const slug = require("limax");

export default (str: string) =>
  slug(str, {
    tone: false,
  });
