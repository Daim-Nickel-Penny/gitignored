import { describe, test, expect } from "vitest";
import { findGitIgnoreFile } from "./utils.js";

describe("Tests for utils.ts", () => {
  test("findGitIgnoreFile", () => {
    const searchFileKeyword = "Flask";
    const filePath = findGitIgnoreFile(searchFileKeyword);
    console.log(filePath);
    expect(filePath).toBeDefined();
    expect(filePath).toContain(searchFileKeyword);
  });
});
