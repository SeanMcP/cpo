module.exports = (config) => {
  config.addPassthroughCopy('./src/styles/');
  config.addPassthroughCopy('./src/images/');

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
