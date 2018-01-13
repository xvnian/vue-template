// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.containsText('div', 'hello')
      // .assert.elementPresent('.demo')
      // .assert.containsText('h1', 'hello world')
      // .assert.elementCount('img', 1)
      .end()
  }
}
