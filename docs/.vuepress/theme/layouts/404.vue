<template>
  <div class="theme-container">
    <sidebar></sidebar>
    <main>
      <div class="main_content_container">
        <h1 class="billboard_404 center_text">404</h1>
        <p class="center_text">{{ getMsg() }}</p>
        <RouterLink to="/">
          <p class="center_text">Take me home.</p>
        </RouterLink>
      </div>
    </main>
  </div>
</template>

<script>
const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`
];

export default {
  methods: {
    getMsg() {
      return msgs[Math.floor(Math.random() * msgs.length)];
    }
  }
};
</script>

<style scoped>
.billboard_404 {
  padding: 10% 0;
  font-size: 150px;
  margin-bottom: 20px;
}
</style>