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

module.exports = (on, config) => {

    on("file:preprocessor", cucumber());
    return loadConfig(config.configFile)
}




