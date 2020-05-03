<template>
  <div class="layout">
    <sidebar></sidebar>
    <main>
      <div class="main_content_container">
        <h1>{{ $title }}</h1>
        <Content />
        <div class="CC_license">
          This work is licensed under a
          <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"
            >Creative Commons Attribution-ShareAlike 4.0 International
            License</a
          >.
          <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"
            ><img
              class="CC_lic_img"
              alt="Creative Commons License"
              style=" padding: 0;"
              src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png"
          /></a>
        </div>
      </div>
    </main>
  </div>
</template>
