import fs from "fs"

/**
 * clean output.
 *
 * @type {import("esbuild").Plugin}
 */
export default {
  name: "Reset",
  setup: (build) => {
    build.onStart(() => {
      const { outdir, outfile } = build.initialOptions

      if (outdir && fs.existsSync(outdir)) fs.rmSync(outdir, { recursive: true })
      if (outfile && fs.existsSync(outfile)) fs.rmSync(outfile)
    })
  },
}
