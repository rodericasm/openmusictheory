import ImgLazy from "vuepress-plugin-img-lazy/ImgLazy";

export default ({ Vue }) => {
  Vue.component(ImgLazy.name, ImgLazy);
};
