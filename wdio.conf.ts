import { Config } from "@wdio/sync";

// https://webdriver.io/docs/configurationfile.html
export const config: Config = {
    runner: 'local',
    specs: [
        './test/**/*.ts'
    ],
    hostname: process.env.SELENIUM_HUB_HOST ?? 'localhost',
    path: '/wd/hub',
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome'
    }],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'warn',
    baseUrl: 'https://demoqa.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
