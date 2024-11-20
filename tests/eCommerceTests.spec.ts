import { test, expect } from "@playwright/test";
import { ECommercePage } from "../pages/eCommercePage";

test.describe("E-Commerce Tests", () => {
  const productName = "Test Product";
  const productDescription = "Test Description";
  const updatedDescription = "Updated Description";

  test("Add, Edit, Delete Product", async ({ page }) => {
    const eCommercePage = new ECommercePage(page);
    await eCommercePage.navigateTo();

    // Add product
    await eCommercePage.addProduct(productName, productDescription);
    expect(await page.isVisible(`text=${productName}`)).toBeTruthy();

    // Edit product
    await eCommercePage.editProduct(productName, updatedDescription);
    expect(await page.isVisible(`text=${updatedDescription}`)).toBeTruthy();

    // Delete product
    await eCommercePage.deleteProduct(productName);
    expect(await page.isVisible(`text=${productName}`)).toBeFalsy();
  });

  test("Search for a product", async ({ page }) => {
    const eCommercePage = new ECommercePage(page);
    await eCommercePage.navigateTo();

    await eCommercePage.searchProduct("Sample");
    expect(await page.isVisible("text=Sample")).toBeTruthy();
  });

  test("Search for a non-existent product", async ({ page }) => {
    const eCommercePage = new ECommercePage(page);
    await eCommercePage.navigateTo();

    await eCommercePage.searchProduct("NonExistentProduct");
    expect(await page.isVisible("text=No results found")).toBeTruthy();
  });
});
