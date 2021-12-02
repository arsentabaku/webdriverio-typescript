const appiumCapabilities = require("./appium.capabilities.json");
const envConfig = require("./e2e.env.json");
const args = process.argv.slice(2);

exports.config = {
  user: envConfig.BROWSERSTACK_USERNAME,
  key: envConfig.BROWSERSTACK_ACCESS_KEY,

  updateJob: false,
  specs: ["./e2e/config/multiple_test.js"],
  exclude: [],

  maxInstances: 10,
  commonCapabilities: {
    project: "Browserstack-e2e-tests",
    build: "mobile-vrplayer-e2e",
    name:
      "e2e-tests__" + new Date().toString().substr(4, 17).replace(/\s+/g, "-"),
    app:
      args[1] === "android"
        ? envConfig.BROWSERSTACK_APP_ID_ANDROID
        : envConfig.BROWSERSTACK_APP_ID_IOS,
    "browserstack.debug": true,
  },

  capabilities: appiumCapabilities[args[1]],

  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 30000,
  },
};

// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
