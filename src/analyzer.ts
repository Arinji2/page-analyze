import fs from "fs";
import path from "path";
import { CheckForRevalidate } from "./checks/revalidate";
import { CheckForDynamic } from "./checks/dynamic";
import { CheckForFetchCache } from "./checks/fetchCache";

function analyzeFile(filePath: string) {
  const sourceCode = fs.readFileSync(filePath, "utf8");
  const revalidateCheck = CheckForRevalidate(sourceCode);
  if (revalidateCheck.present) {
    console.log(`Revalidate found: ${revalidateCheck.value}`);
  }
  const dynamicCheck = CheckForDynamic(sourceCode);
  if (dynamicCheck.present) {
    console.log(`Dynamic found: ${dynamicCheck.value}`);
  }
  const fetchCacheCheck = CheckForFetchCache(sourceCode);
  if (fetchCacheCheck.present) {
    console.log(`FetchCache found: ${fetchCacheCheck.value}`);
  }
  console.log(`Analyzing file: ${filePath}`);
}

export function traverseDirectory(dirPath: string) {
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      traverseDirectory(filePath);
    } else if (filePath.endsWith("page.tsx") || filePath.endsWith("page.jsx")) {
      analyzeFile(filePath);
    }
  }
}
