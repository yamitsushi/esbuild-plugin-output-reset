import { Plugin } from "esbuild";
import path from "node:path";
import fs from "fs";

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
        path.dirname(build.initialOptions.outfile);
      if (fs.existsSync(directory)){
        fs.rmSync(directory, { recursive: true });}
    });
  },
});
