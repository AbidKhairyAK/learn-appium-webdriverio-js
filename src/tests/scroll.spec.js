const setupDriver = require('../helpers/setupDriver')
const LoginPage = require('../pageobjects/LoginPage')

describe.only('test scroll', function () {
	let driver
	let loginPage

	before(async function () {
		driver = await setupDriver()
		loginPage = new LoginPage(driver)
	})

	it('scroll down', async function () {
		await driver.$('~Forms').click()
		await driver.pause(1000)
		await driver.touchPerform([
			{ action: 'press', options: { x: 200, y: 1000 }},
			{ action: 'wait', options: { ms: 500 }},
			{ action: 'moveTo', options: { x: 200, y: 200 }},
			{ action: 'release' }
		])
	})

	after(async function () {
		await driver.pause(3000)
		await driver.deleteSession()
	})
})