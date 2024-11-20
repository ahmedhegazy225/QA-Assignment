import { test, expect } from "@playwright/test";
import { FlutterCounterPage } from "../pages/flutterCounterPage";

test("Counter Increment Test", async ({ page }) => {
  const counterPage = new FlutterCounterPage(page);
  await counterPage.navigateTo();

  await counterPage.incrementCounter();
  const counterText = await page.textContent("span#counter-value");
  expect(counterText).toBe("1");
});
