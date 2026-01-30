export default function (eleventyConfig) {
  eleventyConfig.setInputDirectory("content");
  eleventyConfig.setIncludesDirectory("_includes");
  eleventyConfig.setLayoutsDirectory("_layouts");

  eleventyConfig.addPassthroughCopy({ "assets/images": "images" });
  eleventyConfig.addPassthroughCopy({ "assets/styles": "styles" });
  eleventyConfig.addPassthroughCopy({ "assets/*.svg": "/" });
}
