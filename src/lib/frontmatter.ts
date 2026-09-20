export function parseFrontmatter(fileContent: string) {
  const match = /---\s*([\s\S]*?)\s*---/.exec(fileContent);
  if (!match) {
    return { metadata: {} as Record<string, string>, content: fileContent.trim() };
  }

  const content = fileContent.replace(match[0], "").trim();
  const metadata: Record<string, string> = {};

  for (const line of match[1].trim().split("\n")) {
    const sep = line.indexOf(": ");
    if (sep === -1) continue;
    const key = line.slice(0, sep).trim();
    const value = line.slice(sep + 2).trim().replace(/^['"](.*)['"]$/, "$1");
    metadata[key] = value;
  }

  return { metadata, content };
}
