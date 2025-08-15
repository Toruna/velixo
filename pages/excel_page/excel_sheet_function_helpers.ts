import BasePage from "../../base/base_page";
import { expect, Page } from "@playwright/test";
import { ExcelSheetLocators } from "./excel_sheet_locators";
import {Constants} from "../../utils/constants";

export default class ExcelSheetPage extends BasePage {
    constructor(public page: Page) {
        super(page);
    }

    async navigateToGoogleSheet(){
        await this.page.goto(Constants.Credentials.url.sheetUrl);

    }

    async putTodayFormula() {
        await this.clickOnElement(ExcelSheetLocators.formulaInputFieldLocator);
        await this.fillInputField(ExcelSheetLocators.formulaInputFieldLocator, '=TODAY()');
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(5000);
    }

    async validateCellHasTodayDate() {
        await this.page.keyboard.press('Control+Home');

        const origin = new URL(this.page.url()).origin;
        await this.page.context().grantPermissions(['clipboard-read', 'clipboard-write'], { origin });

        await this.page.keyboard.press('Control+C');
        const copied = (await this.page.evaluate(async () => navigator.clipboard.readText())).trim();

        console.log(`Raw copied value from Excel: "${copied}"`);

        expect.soft(copied, 'Expected to copy a non-empty value from Excel').not.toBe('');

        const displayedDate = this.normalizeDate(copied);
        const now = new Date();
        const expectedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

        console.log(`Normalized displayed date: "${displayedDate}"`);
        console.log(`Expected date: "${expectedDate}"`);

         expect(displayedDate, `Expected Excel cell A1 to show today's date`).toBe(expectedDate);
    }

    normalizeDate(dateStr: string): string {
        if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
            return dateStr;
        }
        const mdyyyy = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
        const match = dateStr.match(mdyyyy);
        if (match) {
            const [, m, d, y] = match;
            return `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`;
        }
        throw new Error(`Unrecognized date format: "${dateStr}"`);
    }

    async clearA1() {
        await this.page.keyboard.press('Control+Home');
        await this.page.keyboard.press('Delete');
        await this.page.keyboard.press('Enter');
    }
}
