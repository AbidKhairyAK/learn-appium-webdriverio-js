const { remote } = require('webdriverio')
const path = require('path')

const options = {
	hostname: '0.0.0.0',
	port: 4723,
	logLevel: 'error',
	capabilities: {
		platformName: 'Android',
		'appium:automationName': 'UIAutomator2',
		'appium:deviceName': 'emulator-5554',
		'appium:app': path.join(process.cwd(), 'app/dummy.apk'),
		'appium:appActivity': '.MainActivity'
	}
}

async function setupDriver () {
	const driver = await remote(options)
	return driver
}

module.exports = setupDriver