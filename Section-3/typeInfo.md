# Section-3

## `"type": "commonjs"` vs `"type": "module"`

### 1. **`"type": "commonjs"`**

- This is the **default module system** in Node.js.
- It uses `require()` to import modules and `module.exports` to export them.
- Example:

  ```javascript
  // Importing a module
  const fs = require("fs");

  // Exporting a module
  module.exports = someFunction;
  ```

- **When to use?**
  - If you're working on an older Node.js project or need compatibility with CommonJS-based libraries.

---

### 2. **`"type": "module"`**

- This enables the **ES Modules (ESM)** system in Node.js.
- It uses `import` and `export` syntax, which is standard in modern JavaScript.
- Example:

  ```javascript
  // Importing a module
  import fs from "fs";

  // Exporting a module
  export default someFunction;
  ```

- **When to use?**
  - If you're starting a new project or want to use modern JavaScript features.

---

### Key Differences

| Feature                | `"type": "commonjs"`           | `"type": "module"`          |
| ---------------------- | ------------------------------ | --------------------------- |
| **Syntax**             | `require()` / `module.exports` | `import` / `export`         |
| **File Extension**     | `.js`                          | `.js` or `.mjs`             |
| **Default in Node.js** | Yes                            | No (must be explicitly set) |

---

### How to Set It?

Add the `"type"` field in your `package.json` file:

```json
{
  "type": "commonjs" // or "module"
}
```

---

### Remember:

- Use **`"type": "commonjs"`** for traditional Node.js projects.
- Use **`"type": "module"`** for modern JavaScript projects with `import`/`export` syntax.
