// **************************************************************
// yamlのファイル差分を検知して, swagger.yamlを自動生成
// **************************************************************

const chokidar = require("chokidar");
const { execSync } = require("child_process");

const watcher = chokidar.watch("./src/**/*.yaml", {
  ignored: /(^|[\/\\])\../,
  persistent: true,
});

watcher.on("change", (path) => {
  const stdout = execSync("npm run gen");
  console.log(`stdout: ${stdout.toString()}`);
});
