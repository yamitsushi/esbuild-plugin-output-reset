"use strict"
const fs = require("fs")

/**
 * Set Environment function.
 *
 * @type {import("esbuild").Plugin}
 */
module.exports = {
  name: "Reset",
  setup: (build) => {
    build.onStart(() => {
      const { outdir, outfile } = build.initialOptions

      if (outdir && fs.existsSync(outdir)) fs.rmSync(outdir, { recursive: true })
      if (outfile && fs.existsSync(outfile)) fs.rmSync(outfile)
    })
  },
}
