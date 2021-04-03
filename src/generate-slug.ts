import slug from "limax";

export = (str: string) =>
  slug(str, {
    tone: false,
  });
