/* Optional QA tools: npm install --no-save playwright @axe-core/playwright */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { chromium } = require('playwright');
const { default: AxeBuilder } = require('@axe-core/playwright');
const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:3100';
(async () => {
 const options = {headless:true};
 if(process.env.CHROMIUM_PATH) options.executablePath=process.env.CHROMIUM_PATH;
 options.args=['--no-sandbox','--disable-dev-shm-usage'];
 const browser = await chromium.launch(options);
 const context = await browser.newContext({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
 const page = await context.newPage();
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 const response = await page.request.get(base+'/sitemap.xml');
 const routes = [...(await response.text()).matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>new URL(m[1]).pathname);
 for(const route of routes){
  assert.equal((await page.goto(base+route)).status(),200,route);
  assert.equal(await page.locator('h1').count(),1,`h1: ${route}`);
  assert.ok(await page.locator('meta[name="description"]').getAttribute('content'),`description: ${route}`);
  assert.ok(await page.locator('meta[property="og:title"]').getAttribute('content'),`OG: ${route}`);
  assert.equal(new URL(await page.locator('link[rel="canonical"]').getAttribute('href')).pathname,route);
  const bad=await page.locator('[data-cta="whatsapp"]').evaluateAll(nodes=>nodes.filter(n=>!n.href.startsWith('https://wa.me/923422625439?text=')).length);
  assert.equal(bad,0,`CTA: ${route}`);
  assert.ok(!/month-to-month|monthly plans|lorem ipsum/i.test(await page.locator('main').innerText()),`content: ${route}`);
 }
 const widths=[320,375,390,700,768,900,1024,1150,1280,1440,1920];
 for(const width of widths){
  await page.setViewportSize({width,height:900});
  for(const route of ['/','/services','/services/listing-optimization','/pricing','/about','/contact']){
   await page.goto(base+route);
   const size=await page.evaluate(()=>({content:document.documentElement.scrollWidth,viewport:innerWidth}));
   assert.ok(size.content<=size.viewport+1,`overflow ${width} ${route}: ${JSON.stringify(size)}`);
  }
 }
 await page.setViewportSize({width:390,height:844});await page.goto(base);
 await page.getByRole('button',{name:'Menu +'}).click();
 assert.equal(await page.locator('#mobile-menu').isVisible(),true);
 await page.keyboard.press('Escape');assert.equal(await page.locator('#mobile-menu').count(),0);
 await page.locator('input[type=range]').focus();await page.keyboard.press('ArrowRight');
 assert.equal(await page.locator('input[type=range]').inputValue(),'51');
 await page.keyboard.press('End');assert.equal(await page.locator('input[type=range]').inputValue(),'100');
 await page.keyboard.press('Home');assert.equal(await page.locator('input[type=range]').inputValue(),'0');
 const summary=page.locator('summary').first();await summary.focus();await page.keyboard.press('Enter');
 assert.equal(await page.locator('details').first().getAttribute('open'),'');
 fs.mkdirSync('test-results',{recursive:true});
 await page.evaluate(()=>scrollTo(0,0)); await page.screenshot({path:'test-results/mobile.png',fullPage:true});
 await page.goto(base+'/contact');
 await page.getByLabel('Store URL').fill('https://example.com/shop');
 await page.getByLabel('What would you like to improve?').fill('Improve my product titles.');
 let messageUrl='';
 await page.route('https://wa.me/**',route=>{messageUrl=route.request().url();return route.fulfill({status:200,body:'WhatsApp handoff intercepted by test; no message sent.'});});
 await page.getByRole('button',{name:'Continue on WhatsApp'}).click();
 await page.waitForURL('https://wa.me/**');
 assert.match(new URL(messageUrl).searchParams.get('text'),/example.com\/shop/);
 assert.match(new URL(messageUrl).searchParams.get('text'),/Improve my product titles/);
 await page.setViewportSize({width:1440,height:1000});
 const accessibility=[];
 for(const route of ['/','/pricing','/about','/contact','/services/listing-optimization']){
  await page.goto(base+route);
  const result=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
  accessibility.push({route,violations:result.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))}))});
 }
 await page.goto(base);await page.screenshot({path:'test-results/desktop.png',fullPage:true});
 await page.emulateMedia({reducedMotion:'no-preference'});
 await page.goto(base);
 const hero=page.locator('.hero-art');const bounds=await hero.boundingBox();
 await page.mouse.move(bounds.x+bounds.width*.75,bounds.y+bounds.height*.3);
 await page.waitForFunction(()=>document.querySelector('.hero-art').style.getPropertyValue('--ry')!=='');
 const service=page.locator('.service-card').first();await service.scrollIntoViewIfNeeded();
 await service.evaluate(el=>new Promise(resolve=>{if(el.classList.contains('revealed'))return resolve();const observer=new MutationObserver(()=>{if(el.classList.contains('revealed')){observer.disconnect();resolve();}});observer.observe(el,{attributes:true,attributeFilter:['class']});}));
 await page.emulateMedia({reducedMotion:'reduce'});
 assert.equal(await hero.evaluate(el=>getComputedStyle(el).transform),'none');

 assert.equal((await page.request.get(base+'/services/not-a-service')).status(),404);
 assert.equal((await page.request.get(base+'/opengraph-image')).status(),200);
 assert.equal(errors.length,0,errors.join('\n'));
 fs.writeFileSync('test-results/report.json',JSON.stringify({routes:routes.length,widths,errors,accessibility},null,2));
 console.log(JSON.stringify({routes:routes.length,widths,errors,accessibility},null,2));
 await browser.close();
 if(accessibility.some(x=>x.violations.length)) process.exitCode=1;
})().catch(error=>{console.error(error);process.exit(1)});
