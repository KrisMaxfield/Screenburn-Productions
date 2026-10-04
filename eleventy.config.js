export default function (eleventyConfig) {
  // Films with `draft: true` show up in `npm start` but not in the published build
  eleventyConfig.addPreprocessor("drafts", "*", (data) => {
    if (data.draft && process.env.ELEVENTY_RUN_MODE === "build") return false;
  });

  // Copy these folders straight into the built site
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");

  // Films, newest first, for the gallery
  eleventyConfig.addCollection("filmsByYear", (api) =>
    api.getFilteredByGlob("src/films/*.md").sort((a, b) => (b.data.year || 0) - (a.data.year || 0))
  );

  return {
    dir: { input: "src", output: "_site", includes: "_includes" },
  };
}
