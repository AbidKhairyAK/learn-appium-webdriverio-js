const setupDriver = require('../helpers/setupDriver')
const expect = require('chai').expect

describe('init test', function () {
	let driver

	before(async function () {
		driver = await setupDriver()
	})

	it('test element coy', async function () {
		const titleEl = await driver.$('//*[@text="WEBDRIVER"]')
		const titleText = await titleEl.getText()

		expect(titleText).to.equal('WEBDRIVER')
	})

	after(async function () {
		await driver.pause(2000)
		await driver.deleteSession()
	})
})