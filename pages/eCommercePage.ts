import { Page } from "@playwright/test";

export class ECommercePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo() {
    await this.page.goto("https://e-commerce-kib.netlify.app/");
  }

  async addProduct(productName: string, description: string) {
    await this.page.click("button#add-product");
    await this.page.fill("input#name", productName);
    await this.page.fill("textarea#description", description);
    await this.page.click("button#save");
  }

  async editProduct(productName: string, newDescription: string) {
    await this.page.click(`text=${productName}`);
    await this.page.fill("textarea#description", newDescription);
    await this.page.click("button#save");
  }

  async deleteProduct(productName: string) {
    await this.page.click(`text=${productName} >> button#delete`);
  }

  async searchProduct(searchTerm: string) {
    await this.page.fill("input#search", searchTerm);
    await this.page.press("input#search", "Enter");
  }
}
