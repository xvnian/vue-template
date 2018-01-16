require('babel-register')
var config = require('../../config')

// http://nightwatchjs.org/gettingstarted#settings-file
module.exports = {
  src_folders: ['test/e2e/specs'],
  output_folder: 'test/e2e/reports',
  custom_assertions_path: ['test/e2e/custom-assertions'],

  selenium: {
    start_process: true,
    server_path: require('selenium-server').path,
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      // 'webdriver.chrome.driver': require('chromedriver').path
    }
  },

  test_settings: {
    default: {
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      globals: {
        devServerURL: 'http://localhost:' + (process.env.PORT || config.dev.port)
      }
    },

    // chrome: {
    //   desiredCapabilities: {
    //     browserName: 'chrome',
    //     javascriptEnabled: true,
    //     acceptSslCerts: true
    //   }
    // },

    phantom: {
      'desiredCapabilities': {
        'browserName': 'phantomjs',
        'javascriptEnabled': true,
        'acceptSslCerts': true,
        'databaseEnabled': true,
        'locationContextEnabled': true,
        'applicationCacheEnabled': true,
        'browserConnectionEnabled': true,
        'webStorageEnabled': true,
        'rotatable': true,
        'nativeEvents': true,
        "phantomjs.cli.args" : ['--debug=true'],
        'phantomjs.binary.path' : require('phantomjs-prebuilt').path,
        'phantomjs.page.setting.userAgent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36'
      }
    },

    // firefox: {
    //   desiredCapabilities: {
    //     browserName: 'firefox',
    //     javascriptEnabled: true,
    //     acceptSslCerts: true
    //   }
    // }
  }
}
