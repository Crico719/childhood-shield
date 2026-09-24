import { readFileSync, writeFileSync } from 'fs';

const courseContentPath = 'C:\\Users\\USUARIO\\OneDrive\\Documents\\prepa-premium-uv\\src\\lib\\course-content.ts';
const summariesPath = 'C:\\Users\\USUARIO\\OneDrive\\Documents\\Default Project\\illustration-summaries.json';

const content = readFileSync(courseContentPath, 'utf-8');
const summaries = JSON.parse(readFileSync(summariesPath, 'utf-8'));

let modifiedContent = content;
let insertedCount = 0;

// For each module, find the slug line and insert illustrationSummary after it
// We need to find the pattern: slug: "xxx", and insert after it
const slugRegex = /slug: "([^"]+)",/g;
let match;

// Collect all insertions first (to avoid index shifting)
const insertions = [];

while ((match = slugRegex.exec(content)) !== null) {
  const slug = match[1];
  const summary = summaries[slug];
  
  if (summary) {
    // Find the line end after the slug
    const lineEnd = content.indexOf('\n', match.index);
    if (lineEnd !== -1) {
      // Check if illustrationSummary already exists
      const nextLines = content.substring(match.index, match.index + 500);
      if (!nextLines.includes('illustrationSummary')) {
        insertions.push({
          position: lineEnd + 1,
          slug: slug,
          summary: summary
        });
      }
    }
  }
}

// Sort insertions by position in reverse order (to maintain indices)
insertions.sort((a, b) => b.position - a.position);

// Apply insertions
for (const ins of insertions) {
  const indent = '    ';
  const insertion = `${indent}illustrationSummary: "${ins.summary.replace(/"/g, '\\"').replace(/\n/g, ' ')}",\n`;
  modifiedContent = modifiedContent.substring(0, ins.position) + insertion + modifiedContent.substring(ins.position);
  insertedCount++;
}

writeFileSync(courseContentPath, modifiedContent, 'utf-8');

console.log(`Inserted illustrationSummary into ${insertedCount} modules`);
console.log(`Total slugs with summaries: ${Object.keys(summaries).length}`);
