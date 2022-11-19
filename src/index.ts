import { Plugin } from "esbuild";
import path from "node:path";
import fs from "node:fs";

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
      const directory =
        props?.customPath ??
        build.initialOptions.outdir ??
        build.initialOptions.outfile;
      if (fs.existsSync(directory))
        fs.rmSync(path.dirname(directory), { recursive: true });
    });
  },
});
