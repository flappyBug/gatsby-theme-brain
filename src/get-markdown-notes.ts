import * as fs from "fs";
import * as path from "path";
import { NoteFile, PluginOptions } from "..";
import generateSlug from "./generate-slug";

function toRegExp(value: string | RegExp) {
  if (typeof value === "string") {
    return new RegExp(`^${value}$`);
  }
  return value;
}

const matches = (filename: string) => (regExp: RegExp) => regExp.test(filename);
const doesNotMatchAny = (regExps: RegExp[]) => (filename: string) =>
  !regExps.some(matches(filename));

export default (pluginOptions: PluginOptions): NoteFile[] => {
  let notesDirectory = pluginOptions.notesDirectory || "content/brain/";
  let notesFileExtensions = pluginOptions.notesFileExtensions || [
    ".md",
    ".mdx",
  ];
  let exclusions =
    (pluginOptions.exclude && pluginOptions.exclude.map(toRegExp)) || [];

  let filenames = fs.readdirSync(notesDirectory);

  return filenames
    .filter((filename) => {
      return notesFileExtensions.includes(path.extname(filename).toLowerCase());
    })
    .filter(doesNotMatchAny(exclusions))
    .map((filename) => {
      const title = path.parse(filename).name;
      let slug: string = pluginOptions.generateSlug
        ? pluginOptions.generateSlug(filename)
        : generateSlug(title);
      let fullPath = notesDirectory + filename;

      let rawFile = fs.readFileSync(fullPath, "utf-8");

      return {
        filename,
        fullPath,
        title,
        slug,
        rawFile,
      };
    });
};
