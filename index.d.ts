export type PluginOptions = Partial<{
  // Directory containing your brain note files
  notesDirectory: string;
  // File extensions that will be used to generate pages
  notesFileExtensions: string[];
  // Template to use for note rendering
  noteTemplate: string;
  // Mapping object from note type keys to template paths
  additionalNoteTypes: Record<string, string>;
  // Set the root url for your site (e.g. in this case https://example.com/brain)
  rootPath: string;
  // Name of the note that will be used as the 'index' note. So in this case brain.md would generate the root page of the brain.
  rootNote: string;
  // Used to resolve a bug in gatsby-plugin-mdx
  mdxOtherwiseConfigured: boolean;
  // Enable this if you want to link hashtags. E.g. #Test would link to (and create if needed) https://example.com/brain/test
  linkifyHashtags: boolean;
  // Enable this if you want to hide the double brackets that are converted to links (e.g. [[page]] turns into [page](https://example.com/brain/page))
  // Enable this to generate an RSS feed from all notes with syndicate: true in the frontmatter
  hideDoubleBrackets: boolean;
  // Enable this to generate an RSS feed from all notes with syndicate: true in the frontmatter
  generateRSS: boolean;
  // Adjust this to set the RSS output path
  rssPath: string;
  // Adjust this to set the title of the generated RSS feed
  rssTitle: string;
  // Pattern that filter out the file
  exclude: (string | RegExp)[];
  // Function that generate slug from filename, e.g.: "foo.md"
  generateSlug: (filename: string) => string;
}>;

export interface BrainNoteNode {
  id: any;
  title: any;
  slug: string;
  content: any;
  rawContent: any;
  absolutePath: any;
  noteTemplate: any;
  aliases: any;
  children: any[];
  parent: any;
  internal: {
    type: string;
    mediaType: string;
  };
  outboundReferences: string[];
}

export interface NoteFile {
  filename: string;
  fullPath: string;
  slug: string;
  rawFile: string;
}

export interface MarkdownNoteFile {
  title: string;
  content: string;
  rawContent: string;
  fullPath: string;
  frontmatter: {
    [key: string]: any;
  };
  aliases: string[];
  outboundReferences: any[];
  externalOutboundReferences: any[];
  noteTemplate: string;
  inboundReferences: any[];
}
