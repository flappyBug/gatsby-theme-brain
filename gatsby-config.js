//gist.github.com/JohnAlbin/2fc05966624dffb20f4b06b4305280f9
require("ts-node").register({
  compilerOptions: {
    lib: ["esnext"],
    esModuleInterop: true,
    downlevelIteration: true,
  },
});

module.exports = require("./gatsby-config.ts");
