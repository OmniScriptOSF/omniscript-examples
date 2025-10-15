#!/usr/bin/env node
// File: scripts/validate.js
const fs = require('fs');
const path = require('path');
const { parse } = require('omniscript-parser');

/**
 * Recursively find all .osf files in a directory
 */
function findOSFFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findOSFFiles(filePath, fileList);
    } else if (file.endsWith('.osf')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

/**
 * Validate a single OSF file
 */
function validateFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const document = parse(content);
    
    console.log(`✓ ${filePath}`);
    return { success: true, filePath, blockCount: document.blocks.length };
  } catch (error) {
    console.error(`✗ ${filePath}`);
    console.error(`  Error: ${error.message}`);
    return { success: false, filePath, error: error.message };
  }
}

/**
 * Main validation function
 */
function main() {
  console.log('='.repeat(80));
  console.log('OSF Examples Validation');
  console.log('='.repeat(80));
  console.log('');
  
  const rootDir = path.join(__dirname, '..');
  const osfFiles = findOSFFiles(rootDir);
  
  console.log(`Found ${osfFiles.length} OSF files\n`);
  
  const results = osfFiles.map(validateFile);
  
  const successful = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;
  
  console.log('');
  console.log('='.repeat(80));
  console.log('Validation Summary');
  console.log('='.repeat(80));
  console.log(`Total files: ${osfFiles.length}`);
  console.log(`Successful: ${successful} ✓`);
  console.log(`Failed: ${failed} ✗`);
  
  if (failed > 0) {
    console.log('');
    console.log('Failed files:');
    results.filter(r => !r.success).forEach(r => {
      console.log(`  - ${r.filePath}: ${r.error}`);
    });
    process.exit(1);
  } else {
    console.log('');
    console.log('✓ All examples validated successfully!');
    process.exit(0);
  }
}

// Run validation
main();
