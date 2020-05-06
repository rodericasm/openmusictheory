module.exports = {
  base: "/openmusictheory_reskinned/",
  description:
    "Open Music Theory is an open-source, interactive, online textbook for college-level music theory courses.",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: `https://fonts.googleapis.com/css?family=Lora:400|Playfair+Display:800,400&display=swap`,
      },
    ],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "author", href: "/humans.txt" }],
  ],
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
        normalSuffix: ".html",
        indexSuffix: "/index.html",
        notFoundPath: "/404.html",
      },
    ],
    ["img-lazy"],
    ["vuepress-plugin-nprogress"],
    ["vuepress-plugin-smooth-scroll"],
  ],
};
