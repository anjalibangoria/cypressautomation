const deepmerge = require('deepmerge')
const path = require('path')
const cucumber = require('cypress-cucumber-preprocessor').default


function loadConfig(filename) {
    const configJson = require(filename)
    if (configJson.extends) {
        const baseConfigFilename = path.join(
            path.dirname(filename), configJson.extends)
        const baseConfig = loadConfig(baseConfigFilename)
        console.log('merging %s with %s', baseConfigFilename, filename)
        return deepmerge(baseConfig, configJson)
    } else {
        return configJson
    }
}

function addConfigurationBasedOnType(type) {
    console.log(type != undefined && type.toLowerCase() == "ui");
    if (type != undefined && type.toLowerCase() == "ui") {
        loadConfig("../../cypress/config/uiconfig.json")
    }

}

module.exports = (on, config) => {

    on("file:preprocessor", cucumber());
    on('task', {
        log(message) {
            console.log(message)
            return null
        },
    });
    // add uiconfig.json because cypress-tags doesnt allow to add custom config file
    // so ui-config will be added when 
    if (config.env.automationType != undefined) {
        addConfigurationBasedOnType(config.env.automationType)
    } else {
        loadConfig(config.configFile);
    }
    return config;
}




