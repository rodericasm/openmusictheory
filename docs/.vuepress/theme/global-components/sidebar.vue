<template>
  <aside>
    <div class="logo_container">
      <p class="logo_text center_text">Open Music Theory</p>
    </div>
    <div
      style="border-bottom: 3px solid black;   width: 65%;
  margin: auto; margin-top: 70px;
  padding-top: 10px;
  padding-bottom: 10px;"
    >
      Search
    </div>

    <ul class="sidebar_nav_container">
      <li class="nav_section" v-for="val in nav_build">
        <dl>
          <dt class="nav_header">{{ val.header }}</dt>
          <dd class="nav_item" v-for="nav_val in val.nav">
            <router-link :to="nav_val.link">
              <span class="hitbox_span">
                <span class="underline_span">{{ nav_val.name }}</span>
              </span>
            </router-link>
          </dd>
        </dl>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  data: function() {
    return {
      nav_build: [
        {
          header: "Introduction",
          nav: [
            { name: "Home", link: "/index.html" },
            {
              name: "About Open Music Theory",
              link: "/about",
            },
          ],
        },
        {
          header: "Fundamentals",
          nav: [
            { name: "Basic notation", link: "/basicNotation" },
            {
              name: "Meter",
              link: "/meter",
            },
            {
              name: "Protonotation",
              link: "/protonotation",
            },
            {
              name: "Rhythmic values",
              link: "/rhythmicValues",
            },
            {
              name: "Beams and borrowed divisions",
              link: "/beams",
            },
          ],
        },
      ],
    };
  },
};
</script>
