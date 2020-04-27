<template>
  <aside>
    <div class="logo_container">
      <p class="logo_text">Open Music Theory</p>
    </div>

    <ul class="sidebar_nav_container">
      <li class="nav_section" v-for="val in nav_build">
        <dl>
          <dt class="nav_header">{{val.header}}</dt>
          <dd class="nav_item" v-for="nav_val in val.nav">
            <router-link :to="nav_val.link">
              <span class="hitbox_span">{{nav_val.name}}</span>
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
          header: "Fundamentals",
          nav: [
            { name: "Basic Notation", link: "/basicNotation.html" },
            {
              name:
                "Realizing a figured bass in strict basso continuo style (video).",
              link: "/beams.html"
            }
          ]
        }
      ]
    };
  }
};
</script>