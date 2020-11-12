<template>
  <div class="contentContainer">
    <section id="about" class="slides">
      <article>
        <div class="slideText">
          dck-design offers front-end ui development services. <br />
          our specialization in animated ui will make your website interactive,
          visually attractive, and fun site.
        </div>
      </article>
    </section>
    <section id="projects" class="slides">
      <article class="full-stretch">
        <Projects />
      </article>
    </section>
    <section id="contact" class="slides">
      <article>
        <div class="slideText">
          <Contact />
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
export default {
  components: { Projects, Contact },
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
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 3rem;
}
.slides {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
}
.slides article {
  position: relative;
  width: 100vw;
  height: 100vh;
  max-width: 800px;
  max-height: 80vh;
  border: 1px solid rgba(0, 0, 0, 0.01);
}
.full-stretch {
  height: auto !important;
  max-width: 100vw !important;
  display: flex;
  justify-content: center;
  align-content: center;
}
.slideText {
  position: absolute;
  max-width: 480px;
  bottom: 5vh;
  left: 0;
  right: 0;
  margin: auto;
}
@media screen and (max-width: 768px) {
  .slides article {
    max-width: 90vw;
    max-height: 90vh;
  }
  .full-stretch {
    max-height: 100vh !important;
  }
}
</style>
