# OmniScript Examples Library

**Comprehensive collection of OmniScript Format (OSF) examples, templates, and real-world use cases.**

This repository contains 20+ professionally crafted OSF documents demonstrating all features of the format, from basic syntax to advanced multi-format compositions.

---

## 📚 Categories

### 🌱 Getting Started
Perfect for beginners learning OSF syntax:
- **[01-hello-world.osf](getting-started/01-hello-world.osf)** - Minimal example (2 min) ⏱️
- **[02-basic-document.osf](getting-started/02-basic-document.osf)** - Formatting, headings, lists (5 min) ⏱️
- **[03-simple-presentation.osf](getting-started/03-simple-presentation.osf)** - Slides with layouts (5 min) ⏱️
- **[04-basic-spreadsheet.osf](getting-started/04-basic-spreadsheet.osf)** - Data tables and formulas (10 min) ⏱️

### 📄 Documents
Professional document examples:
- **[technical-report.osf](documents/technical-report.osf)** - Multi-section technical document
- **[meeting-notes.osf](documents/meeting-notes.osf)** - Structured meeting notes template
- **[research-paper.osf](documents/research-paper.osf)** - Academic document with citations
- **[user-manual.osf](documents/user-manual.osf)** - Technical documentation

### 📊 Presentations
Business and educational slide decks:
- **[business-pitch.osf](presentations/business-pitch.osf)** - Corporate pitch deck
- **[product-demo.osf](presentations/product-demo.osf)** - Product showcase slides
- **[quarterly-review.osf](presentations/quarterly-review.osf)** - Business review presentation
- **[training-slides.osf](presentations/training-slides.osf)** - Educational training materials

### 📈 Spreadsheets
Data analysis and tracking sheets:
- **[budget-tracker.osf](spreadsheets/budget-tracker.osf)** - Personal/business budget
- **[sales-dashboard.osf](spreadsheets/sales-dashboard.osf)** - Sales metrics dashboard
- **[expense-report.osf](spreadsheets/expense-report.osf)** - Expense tracking with formulas
- **[inventory-management.osf](spreadsheets/inventory-management.osf)** - Inventory system

### 🎯 Combined
Multi-format documents demonstrating OSF's versatility:
- **[business-report.osf](combined/business-report.osf)** - Doc + Slides + Sheets in one file
- **[project-proposal.osf](combined/project-proposal.osf)** - Comprehensive project proposal
- **[annual-report.osf](combined/annual-report.osf)** - Full annual business report

### ⚡ Advanced
Complex examples showcasing advanced features:
- **[complex-formulas.osf](advanced/complex-formulas.osf)** - Advanced Excel-style formulas
- **[nested-tables.osf](advanced/nested-tables.osf)** - Complex table structures
- **[multi-theme.osf](advanced/multi-theme.osf)** - Theme switching demonstration
- **[large-dataset.osf](advanced/large-dataset.osf)** - Performance testing with large data

### 💡 Use Cases
Real-world application scenarios:
- **[llm-prompts.osf](use-cases/llm-prompts.osf)** - AI/LLM prompt documentation
- **[api-documentation.osf](use-cases/api-documentation.osf)** - Technical API docs
- **[classroom-materials.osf](use-cases/classroom-materials.osf)** - Educational content
- **[personal-finance.osf](use-cases/personal-finance.osf)** - Personal finance tracking

---

## 🚀 Quick Start

### Clone and Explore
```bash
# Clone the repository
git clone https://github.com/OmniScriptOSF/omniscript-examples.git
cd omniscript-examples

# Browse examples
ls -R
```

### Validate Examples
```bash
# Install dependencies
npm install

# Validate all examples
npm run validate
```

### Convert an Example
```bash
# Install OSF CLI globally (v1.2.1)
npm install -g omniscript-cli@1.2.1

# Convert to PDF
osf render getting-started/01-hello-world.osf --format pdf

# Convert to DOCX
osf render documents/technical-report.osf --format docx --theme corporate

# Convert to PPTX
osf render presentations/business-pitch.osf --format pptx --theme modern
```

### Try New v1.2 Features
```bash
# Create a document with @table blocks
echo '@table { | A | B |\n| --- | --- |\n| 1 | 2 |\n}' > test.osf
osf render test.osf --format html

# Use @include for modular documents
echo '@include { path: "./section.osf"; }' > main.osf
osf parse main.osf
```

---

## 📖 How to Use These Examples

### For Learning
1. Start with **Getting Started** examples in order
2. Read the inline comments to understand syntax
3. Modify examples to experiment
4. Progress to category-specific examples

### As Templates
1. Browse by category to find relevant template
2. Copy the example file
3. Modify metadata and content
4. Export to your desired format

### For Reference
1. Search for specific features (charts, formulas, layouts)
2. Copy and adapt code snippets
3. Consult comments for best practices

---

## 🤝 Contributing Examples

We welcome community contributions! Submit your own examples via pull request.

### Contribution Guidelines
1. **File Naming**: Use `kebab-case` (e.g., `my-example.osf`)
2. **Location**: Place in appropriate category folder
3. **Documentation**: Add header comment explaining purpose
4. **Comments**: Include inline comments for complex syntax
5. **Validation**: Ensure file parses without errors
6. **Realistic Content**: Use meaningful content, not lorem ipsum
7. **Showcase Features**: Demonstrate specific OSF capabilities

### Example Template
```osf
// =============================================================================
// Example: [Name]
// Category: [Category]
// Description: [What this example demonstrates]
// Features: [List of OSF features used]
// Estimated time: [X minutes]
// =============================================================================

@meta {
  title: "Example Title";
  author: "Your Name";
  theme: default;
}

@doc {
  # Your content here
}
```

### Submit Your Example
```bash
# Fork the repository
# Create a new branch
git checkout -b add-example-name

# Add your example
git add your-category/your-example.osf

# Commit with descriptive message
git commit -m "Add: [Category] - [Example Name]"

# Push and create pull request
git push origin add-example-name
```

---

## 🔍 Finding Examples

### By Feature
- **Markdown formatting**: `02-basic-document.osf`
- **Slide layouts**: `03-simple-presentation.osf`
- **Formulas**: `04-basic-spreadsheet.osf`, `complex-formulas.osf`
- **Multi-format**: All files in `combined/` folder
- **Themes**: `multi-theme.osf`
- **Large scale**: `large-dataset.osf`

### By Use Case
- **Business**: `business-pitch.osf`, `quarterly-review.osf`, `business-report.osf`
- **Education**: `training-slides.osf`, `classroom-materials.osf`
- **Technical**: `technical-report.osf`, `api-documentation.osf`, `user-manual.osf`
- **Personal**: `meeting-notes.osf`, `personal-finance.osf`, `budget-tracker.osf`
- **AI/LLM**: `llm-prompts.osf`

---

## ✅ Example Quality Standards

All examples in this repository meet these criteria:
- ✓ Parse successfully with `omniscript-parser`
- ✓ Include descriptive header comments
- ✓ Contain realistic, meaningful content
- ✓ Demonstrate specific OSF features
- ✓ Follow OSF specification
- ✓ Validated by CI on every commit

---

## 📦 Integration

### CI/CD Validation
All examples are automatically validated on every commit using GitHub Actions. See [.github/workflows/validate-examples.yml](.github/workflows/validate-examples.yml).

### Test Suite Usage
These examples are used as test cases in:
- `omniscript-parser` test suite
- `omniscript-converters` integration tests
- `omniscript-cli` end-to-end tests

---

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

All examples are provided as templates and may be freely used, modified, and distributed.

---

## 🌟 Support

- **Issues**: [GitHub Issues](https://github.com/OmniScriptOSF/omniscript-examples/issues)
- **Discussions**: [GitHub Discussions](https://github.com/OmniScriptOSF/omniscript-core/discussions)
- **Documentation**: https://omniscriptosf.github.io
- **Email**: alpha912@github.com

---

**Happy documenting with OmniScript! 📝**
