# esbuild-plugin-output-reset

ESBuild plugin to reset output directory for new build

## Installation

```bash
npm install esbuild-plugin-output-reset --save-dev
pnpm install esbuild-plugin-output-reset --save-dev
yarn add esbuild-plugin-output-reset --save-dev
```

```javascript
import esbuild from "esbuild";
import clear from "esbuild-plugin-clear";

esbuild.build({
  entryPoints: ["./src/index.js"],
  bundle: true,
  outfile: "./dist/index.js",
  plugins: [clear],
});
```
