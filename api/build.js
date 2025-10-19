import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), "hello.exe");

  // Create a simple dummy .exe file (real compilers not supported on Vercel)
  fs.writeFileSync(filePath, "Hello World from fake exe!");

  res.setHeader("Content-Type", "application/octet-stream");
  res.setHeader("Content-Disposition", "attachment; filename=hello.exe");

  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
}
