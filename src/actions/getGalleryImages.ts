"use server";
import fs from "fs/promises";
import path from "path";

async function getGalleryImages(
  dirPath: string = __dirname + "../assets/images/gallery"
): Promise<string[]> {
  try {
    const absolutePath = path.resolve(dirPath);
    const files = await fs.readdir(absolutePath);
    return files;
  } catch (e) {
    console.error("Error reading directory:", e);
    return [];
  }
}

export default getGalleryImages;
