import path from "path";
import fs from "fs";

/**Searches for a matching `.gitignore` file in the templates directory. */

export const TEMPLATES_DIR = path.resolve(__dirname, "./templates");

export const findGitIgnoreFile = (fileName: string) => {
  try {
    const allFiles = fs.readdirSync(TEMPLATES_DIR);
    //search for <fileName>.gitignore
    const matchedFile = allFiles.find(
      (file) => file.includes(fileName) && file.endsWith(".gitignore"),
    );

    if (matchedFile === undefined) {
      throw new Error(
        `Could not find a matching .gitignore file in the templates directory.`,
      );
    }

    return path.join(TEMPLATES_DIR, matchedFile);
  } catch (e) {
    throw new Error(
      `Could not find a matching .gitignore file in the templates directory.`,
    );
  }
};
