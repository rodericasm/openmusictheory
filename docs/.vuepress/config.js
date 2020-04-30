module.exports = {
  plugins: [
    [
      "vuepress-plugin-medium-zoom",
      {
        selector: "img",
        delay: 500,
        options: {
          background: "#fff",
          scrollOffset: 0,
        },
      },
    ],
    [
      "vuepress-plugin-clean-urls",
      {
        normalSuffix: "",
        indexSuffix: "/index.html",
        notFoundPath: "/404.html",
      },
    ],
  ],
};
