const appiumCapabilities = require("./src/config/appium.capabilities.json");
const envConfig = require("./src/config/e2e.env.json");
const args = process.argv.slice(3);

exports.config = {
  user: envConfig.BROWSERSTACK_USERNAME,
  key: envConfig.BROWSERSTACK_ACCESS_KEY,

  updateJob: false,
  specs: ["./lib/config/multiple-tests.js"],
  exclude: [],

  maxInstances: 10,
  commonCapabilities: {
    project: "Browserstack-e2e-tests",
    build: "mobile-vrplayer-e2e",
    name:
      "e2e-tests__" + new Date().toString().substr(4, 17).replace(/\s+/g, "-"),
    app:
      args[0] === "android"
        ? envConfig.BROWSERSTACK_APP_ID_ANDROID
        : envConfig.BROWSERSTACK_APP_ID_IOS,
    "browserstack.debug": true,
  },

  capabilities: appiumCapabilities[args[0]],

  logLevel: "error",
  coloredLogs: true,
  deprecationWarnings: true,
  baseUrl: "",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: "mocha",
  reporters: ["dot", "spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 30000,
  },
  
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      project: "tsconfig.json",
    },
  },
};

exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
