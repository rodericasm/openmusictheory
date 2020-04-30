module.exports = {
  base: "/openmusictheory_reskinned/",
  description:
    "Open Music Theory is an open-source, interactive, online textbook for college-level music theory courses.",
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
