import { test, expect } from "@playwright/test";
import { APIHelper } from "../utils/apiHelper";

const baseURL = "https://practice.expandtesting.com/notes/api";

test.describe("API Tests", () => {
  test("Verify API Health", async () => {
    const response = await APIHelper.makeRequest("GET", `${baseURL}/health`);
    expect(response.status()).toBe(200);
  });

  test("Negative Test: Invalid Login", async () => {
    const response = await APIHelper.makeRequest("POST", `${baseURL}/users/login`, {
      username: "nonExistentUser",
      password: "wrongPassword",
    });
    expect(response.status()).toBe(401);
  });
});
