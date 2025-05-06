import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "BOUNDLESS",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-AU",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Cinzel Decorative",
        body: "Cormorant Garamond",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
    	  light: "#f8f5f0",         // Warm off-white background
          lightgray: "#e8e0d5",     // Soft beige-gray borders
          gray: "#c0b8a8",         // Muted golden-gray for graph links
          darkgray: "#5a5346",     // Dark taupe for body text (readable but soft)
          dark: "#3a3328",         // Deep brown-gray for headers (high contrast)
          secondary: "#b59a3c",    // Rich gold for links/current node
          tertiary: "#d4b45e",     // Lighter gold for hover states
          highlight: "rgba(181, 154, 60, 0.15)",  // Gold tint for highlights
          textHighlight: "#f0e6a388"  // Pale gold translucent highlight
      },
      darkMode: {
        light: "#1a1a1f",        // Deep off-black background
        lightgray: "#3a3646",    // Purple-tinged dark borders
        gray: "#6a5d8c",        // Muted purple for graph links
        darkgray: "#d0c8e0",    // Light lavender text
        dark: "#f0e8ff",       // Bright lavender for headers
        secondary: "#9d7cdf",   // Vibrant purple for links
        tertiary: "#b59aff",    // Lighter purple for hover states
        highlight: "rgba(157, 124, 223, 0.15)",  // Purple tint for highlights
        textHighlight: "#c8a8ff88"  // Soft purple translucent highlight
      },
    },
  },
},
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
