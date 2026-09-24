import { readFileSync } from 'fs';
const c = readFileSync('C:\\Users\\USUARIO\\OneDrive\\Documents\\prepa-premium-uv\\src\\lib\\course-content.ts', 'utf-8');
const summaries = [...c.matchAll(/illustrationSummary: "/g)];
const lines = c.split('\n').length;
console.log('Modules with summary:', summaries.length);
console.log('File lines:', lines);
console.log('File size:', (c.length / 1024).toFixed(0), 'KB');
