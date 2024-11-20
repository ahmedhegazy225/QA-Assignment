import { Page } from "@playwright/test";

export class FlutterCounterPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo() {
    await this.page.goto("https://flutter-angular.web.app/");
  }

  async incrementCounter() {
    await this.page.click("button#increment");
  }
}
