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
		'appium:app': path.join(process.cwd(), 'app/dummy.apk')
	}
}

async function runTest () {
	const driver = await remote(options)

	try {
		console.log('success')
	} finally {
		await driver.pause(5000)
		await driver.deleteSession()
	}
}

runTest()
