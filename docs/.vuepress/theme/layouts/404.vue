<template>
  <div class="404-container">
    <sidebar></sidebar>
    <main>
      <div class="main_content_container">
        <h1 class="billboard_404 center_text">Page Missing</h1>
        <p class="center_text">Sorry! This page doesn't exist.</p>
        <RouterLink to="/index.html">
          <p class="center_text">Take me home.</p>
        </RouterLink>
      </div>
    </main>
  </div>
</template>

<style scoped>
.billboard_404 {
  padding: 20% 0;
  font-size: 100px;
  margin-bottom: 20px;
}
</style>
