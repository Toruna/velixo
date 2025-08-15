import BasePage from "../../base/base_page";
import {Page} from "@playwright/test";
import {LoginLocators} from "./login_page_locators";

export default class LoginPage extends BasePage {
    constructor(public page: Page) {
        super(page);
    }

    async enterEmail(email: string) {
        await this.page.waitForSelector(LoginLocators.emailInputField);

        await this.fillInputField(LoginLocators.emailInputField, email);
    }

    async enterPassword(password: string) {
        await this.page.waitForSelector(LoginLocators.passwordInputField);
        await this.fillInputField(LoginLocators.passwordInputField, password);
    }

    async clickOnNextButton() {
        await this.page.waitForSelector(LoginLocators.nextButton);
        await this.clickOnElement(LoginLocators.nextButton);
    }

    async userLogin(userName: string, password: string) {
        await this.page.goto('/');
        await this.page.waitForSelector(LoginLocators.emailInputField)
        await this.enterEmail(userName);
        await this.clickOnNextButton();
        await this.enterPassword(password);
        await this.clickOnNextButton();
        await this.page.waitForTimeout(5000)
    }
}