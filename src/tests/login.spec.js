const expect = require('chai').expect
const setupDriver = require('../helpers/setupDriver')
const LoginPage = require('../pageobjects/LoginPage')

describe('test login form', function () {
	let driver
	let loginPage

	before(async function () {
		driver = await setupDriver()
		loginPage = new LoginPage(driver)
	})

	it('try login with random user', async function () {
		await loginPage.openPage()
		await loginPage.loginWithCredentials('test@test.com', 'bambang123')

		await loginPage.successAlertTitle.waitForDisplayed({ timeout: 10000 })
		const successTitle = await loginPage.successAlertTitle.getText()

		expect(successTitle).to.equal('Success')
	})

	after(async function () {
		await driver.pause(3000)
		await driver.deleteSession()
	})
})