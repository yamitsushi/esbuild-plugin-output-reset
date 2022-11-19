import { Plugin } from "esbuild";
import path from "node:path"
import fs from "node:fs"

interface Props {
  /**
   * Override the path to reset if set
   *
   */
  customPath?: string;
}

export default (props?: Props): Plugin => ({
  name: "Reset",
  setup: (build) => {
    build.onStart(() => {
      if (props?.customPath) return fs.rmSync(props.customPath, { recursive: true })

      if (build.initialOptions.outdir)
        return fs.rmSync(build.initialOptions.outdir, { recursive: true })

      if (build.initialOptions.outfile)
        return fs.rmSync(path.dirname(build.initialOptions.outfile), { recursive: true })
    })
  },
})

