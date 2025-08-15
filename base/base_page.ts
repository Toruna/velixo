import { Page, expect } from '@playwright/test';

export default class BasePage {
    constructor(public page: Page) {}

    async clickOnElement(selector: string) {
        await this.page.click(selector);
    }

    async fillInputField(selector: string, text: string) {
        await this.page.locator(selector).fill(text);
    }

    async validateUrl(expectedPattern: any) {
        await expect(this.page).toHaveURL(expectedPattern);
    }

    async hoverOverElement(selector: string) {
        await this.page.hover(selector);
    }

    async validateElementIsDisplayed(selector: string): Promise<boolean> {
        return await this.page.locator(selector).isVisible();
    }

    async validateElementIsVisibleWithText(selector: string, expectedText: string) {
        const element = this.page.locator(selector);
        await expect(element).toBeVisible({ timeout: 30000 });
        await expect(element).toContainText(expectedText);
    }

    async validateElementIsNotVisible(selector: string) {
        const element = this.page.locator(selector);
        await expect(element).not.toBeVisible({ timeout: 30000 });
    }

    async validateElementWithTextIsNotVisible(selector: string, text: string) {
        const element = this.page.locator(`${selector}:has-text("${text}")`);
        await expect(element).toBeHidden({ timeout: 30000 });
    }
}
