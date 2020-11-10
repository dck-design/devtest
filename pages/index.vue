<template>
  <div class="container">
    <section class="home">
      <article>
        <h1>welcome to dck-design</h1>
        <h2>sub-title</h2>
        Duis eget mi eu mauris venenatis suscipit id sit amet mi. Nunc faucibus
        ac diam quis egestas. Curabitur id elit odio. Sed pharetra suscipit
        malesuada. Integer nec libero eu ipsum placerat efficitur vitae ornare
        est. Morbi venenatis volutpat nunc, ut volutpat odio porttitor
        venenatis. In dapibus sem velit, nec ultricies eros bibendum eu.
      </article>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '| dck-design |',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'home of dck-design',
        },
      ],
      script: [
        {
          src: '/js/faviconAnimator.js',
        },
      ],
    }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
