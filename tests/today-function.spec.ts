import { test } from '@playwright/test';
import LoginPage from '../pages/gmail_login/login_function_helpers';
import { Constants } from '../utils/constants';
import ExcelSheetPage from '../pages/excel_page/excel_sheet_function_helpers';

test.describe('Google Sheets - TODAY() Function', () => {
  test('Verify Excel Today() function', async ({ page }) => {
    const login = new LoginPage(page);
    const excelSheetPage = new ExcelSheetPage(page);

    await login.userLogin(
        Constants.Credentials.gmail.EMAIL,
        Constants.Credentials.gmail.PASSWORD
    );

    await excelSheetPage.navigateToGoogleSheet();
    await excelSheetPage.putTodayFormula();
    await excelSheetPage.validateCellHasTodayDate();
    await excelSheetPage.clearA1();
  });
});