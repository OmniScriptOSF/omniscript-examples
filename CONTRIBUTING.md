# Contributing to OmniScript Examples

Thank you for your interest in contributing examples to **OmniScript Format (OSF)**! This repository contains professional examples and templates.

---

## 🚀 Getting Started

### 1️⃣ Fork the repository

Click the **Fork** button at the top right of the [omniscript-examples](https://github.com/OmniScriptOSF/omniscript-examples) repository page.

### 2️⃣ Clone your fork locally

```bash
git clone https://github.com/your-username/omniscript-examples.git
cd omniscript-examples
git checkout -b my-example-branch
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Create your example

- Place your example in the appropriate category folder
- Use descriptive filenames (kebab-case: `my-example.osf`)
- Add a header comment explaining the example
- Use realistic content, not lorem ipsum
- Ensure your example parses successfully

### 5️⃣ Validate your example

```bash
# Validate all examples
npm run validate

# Or validate a specific file
npm run validate:file your-example.osf
```

### 6️⃣ Commit and push

```bash
git add .
git commit -m "Add: [Category] - [Example Name]"
git push origin my-example-branch
```

### 7️⃣ Open a Pull Request

Go to your fork on GitHub and click **Compare & pull request**.

---

## 💡 Example Guidelines

### File Naming
- Use kebab-case: `business-report.osf`
- Be descriptive: `quarterly-sales-report.osf` not `report.osf`

### Header Comment
```osf
// =============================================================================
// Example: Quarterly Sales Report
// Category: Business
// Description: Comprehensive sales report with charts and tables
// Features: @doc, @table, @chart, @slide
// Estimated time: 15 minutes
// =============================================================================
```

### Content Quality
- ✅ Use realistic, meaningful content
- ✅ Demonstrate specific OSF features
- ✅ Include inline comments for complex syntax
- ✅ Ensure document parses without errors
- ❌ No lorem ipsum or placeholder text

### Categories
- `getting-started/` - Simple examples for beginners
- `documents/` - Document examples
- `presentations/` - Presentation examples
- `spreadsheets/` - Spreadsheet examples
- `tables/` - Table-focused examples
- `modular/` - Modular documents with includes
- `combined/` - Multi-format examples
- `use-cases/` - Real-world scenarios

---

## ✨ Guidelines

### Commit Message Convention

- `Add:` - New example
- `Update:` - Modify existing example
- `Fix:` - Fix errors in example
- `Docs:` - Update README or documentation

**Examples:**
```
Add: [Business] - Quarterly Review Presentation
Update: [Getting Started] - Improve hello world example
Fix: [Advanced] - Correct formula syntax in budget tracker
```

### All contributors must follow our [Code of Conduct](CODE_OF_CONDUCT.md)

---

## 🤝 Community

Join our discussions on [GitHub Discussions](https://github.com/OmniScriptOSF/omniscript-core/discussions).

---

## 📄 License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).

All examples are provided as templates and may be freely used, modified, and distributed.
