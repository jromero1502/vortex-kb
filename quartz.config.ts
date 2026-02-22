import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Vortex KB",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "vortexkb.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Manrope",
        body: "Manrope",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#F4F6FF",        // fondo etéreo ligeramente violeta
          lightgray: "#FFFFFF",    // superficies principales
          gray: "#E8EAFF",         // bordes suaves índigo
          darkgray: "#4B4B6A",     // texto secundario
          dark: "#1A1A2E",         // texto principal
          secondary: "#7D59D6",    // violeta identitario
          tertiary: "#5F4CCF",     // violeta azulado coherente
          highlight: "rgba(125, 89, 214, 0.10)",
          textHighlight: "#8A63F288",
        },
        darkMode: {
          light: "#161A36",        // fondo base índigo profundo
          lightgray: "#24204A",    // superficie elevada (más clara que antes)
          gray: "#3A2F6B",         // bordes / separadores
          darkgray: "#B8C2FF",     // texto secundario
          dark: "#F4F6FF",         // texto principal
          secondary: "#8A63F2",    // violeta tridente
          tertiary: "#7A6BFF",     // azul energía
          highlight: "rgba(108, 62, 184, 0.18)",
          textHighlight: "#C7A6FF88",
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
