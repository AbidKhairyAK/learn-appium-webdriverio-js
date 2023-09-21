class LoginPage {
	constructor (driver) {
		this.driver = driver
	}

	get loginPageNav () { return this.driver.$('~Login') }
	get emailInput () { return this.driver.$('~input-email') }
	get passwordInput () { return this.driver.$('~input-password') }
	get loginButton () { return this.driver.$('~button-LOGIN') }
	get successAlertTitle () { return this.driver.$('id=android:id/alertTitle') }

	async openPage () {
		await this.loginPageNav.click()
	}
	async loginWithCredentials (email, password) {
		await this.emailInput.setValue(email)
		await this.passwordInput.setValue(password)
		await this.loginButton.click()
	}
}

module.exports = LoginPage