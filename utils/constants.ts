import * as dotenv from 'dotenv';

dotenv.config();

export class Constants {
    static Credentials = {
        gmail: {
            EMAIL: process.env.GMAIL_EMAIL || 'test.automation.playwright.user@gmail.com',
            PASSWORD: process.env.GMAIL_PASSWORD || 'test.123',
        },
        url: {
            sheetUrl: process.env.SHEET_URL || 'https://docs.google.com/spreadsheets/d/1S3tbxsOEjxDyw03P192EQaYbhhdU4oDUxml0i5XKIjE/edit?gid=0#gid=0)'
        }
    };
}