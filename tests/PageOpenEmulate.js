var webdriver = require('selenium-webdriver');
var driver;

driver = new webdriver.Builder()
.forBrowser('firefox')
.build();

driver.get('https://browxin.github.io/browxin-client/').then(function(){
  driver.quit();
});
