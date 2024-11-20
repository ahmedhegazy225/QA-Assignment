import { request } from "@playwright/test";

export class APIHelper {
  static async makeRequest(method: string, url: string, data?: any) {
    const context = await request.newContext();
    const response = await context[method.toLowerCase()](url, {
      data,
    });
    return response;
  }
}
