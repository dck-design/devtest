<template>
  <div tabindex="-1">
    <CoolLightBox
      :items="items"
      :index="index"
      :loop="true"
      tabindex="-1"
      @close="index = null"
    >
    </CoolLightBox>
    <div class="project-thumbs-wrapper" data-tilt tabindex="-1">
      <div
        v-for="(image, imageIndex) in items"
        :key="imageIndex"
        tabindex="-1"
        data-tilt
        data-tilt-glare="true"
        data-tilt-max-glare="0.8"
        data-tilt-speed="400"
        data-tilt-scale="1.1"
        data-tilt-max="10"
        data-tilt-perspective="500"
        class="project-thumbs"
        :style="{ backgroundImage: 'url(' + image.src + ')' }"
        @click="index = imageIndex"
      ></div>
    </div>
  </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
export default {
  name: 'Projects',
  components: {
    CoolLightBox,
  },
  data() {
    return {
      items: [
        {
          title: 'Ace Education',
          description: 'Full-Flash Web Design & Development',
          src: require('../assets/clients/aceedu.jpg'),
        },
        {
          title: 'Rhiss Interior',
          description: 'Website Development + custom CMS',
          src: require('../assets/clients/rhissInterior.jpg'),
        },
        {
          title: 'ExIm Industries',
          description: 'Packaging and Flyer Design',
          src: require('../assets/clients/RoyalA4.jpg'),
        },
        {
          title: 'Ebenezer NDT Services',
          description: 'EDM Development',
          src: require('../assets/clients/ebeNDT.jpg'),
        },
        {
          title: 'MacroVista',
          description: 'Web D&D',
          src: require('../assets/clients/macrovista.jpg'),
        },
        {
          title: 'Sports Connection Pte Ltd',
          description: 'Web D&D + custom CMS',
          src: require('../assets/clients/bodypac.jpg'),
        },
        {
          title: 'The Shepherd&apos;s Pie',
          description: 'Web Design & Development',
          src: require('../assets/clients/shepherds.jpg'),
        },
        {
          title: 'The Green Cleaning Co.',
          description: 'Business Card Design',
          src: require('../assets/clients/green.jpg'),
        },
        {
          title: 'The Complete Nanny',
          description: 'Business Card Design',
          src: require('../assets/clients/nanny.jpg'),
        },
        {
          title: 'Quality InfoSystems',
          description: 'Web Design & Development',
          src: require('../assets/clients/qis.png'),
        },
        {
          title: 'David H. Sandler PhotoPortfolio',
          description: 'Web Design & Development',
          src: require('../assets/clients/davidhsandler.png'),
        },
        {
          title: 'Acupuncture in the Park',
          description: 'Web Design & Development',
          src: require('../assets/clients/aitp.jpg'),
        },
        {
          title: 'Molly Bennett Creative',
          description: 'Web Development',
          src: require('../assets/clients/mbc.jpg'),
        },
        {
          title: 'Seasonal Palate',
          description: 'Web Design & Development Print Design',
          src: require('../assets/clients/seapal.jpg'),
        },
        {
          title: 'EnviroPill',
          description: 'Flash Intro Page',
          src: require('../assets/clients/enviropill.jpg'),
        },
        {
          title: 'Gauvin Consulting Ltd.',
          description: 'Web Design & Development',
          src: require('../assets/clients/gauvin.jpg'),
        },
        {
          title: 'Seattle Wolves FC',
          description: 'Web Design & Development',
          src: require('../assets/clients/wolves.jpg'),
        },
        {
          title: 'Cathy Madden Studio',
          description: 'Web Design & Development',
          src: require('../assets/clients/cathy.jpg'),
        },
        {
          title: 'Kai&apos;s Bistro & Lounge',
          description: 'Web Design & Development',
          src: require('../assets/clients/kais.jpg'),
        },
        {
          title: 'Dr. Scott Kolar, Chiropractic',
          description: 'Corporate Identity Web Design & Development',
          src: require('../assets/clients/kolar.jpg'),
        },
        {
          title: 'NiteLite Entertainment',
          description: 'Web Development',
          src: require('../assets/clients/nitelite.jpg'),
        },
      ],
      index: null,
    }
  },
  created() {
    this.shuffleArray(this.items)
  },
  methods: {
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
      }
      return array
    },
  },
}
</script>

<style>
.project-thumbs-wrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  justify-self: center;
  align-self: center;
  max-width: 800px;
  max-height: 100vh;
  overflow-y: auto;
}
.project-thumbs {
  cursor: pointer;
  width: 100px;
  height: 100px;
  margin: 5px;
  background-size: cover;
  background-position: center center;
  transform: translateY(0);
  opacity: 0.6;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}
.project-thumbs:hover {
  opacity: 1;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.hide-on {
  transform: translateY(100px) !important;
  opacity: 0 !important;
}
@media screen and (max-width: 640px) {
  .project-thumbs {
    width: 30vw;
    height: 30vw;
    margin: 3px;
    opacity: 0.8;
    box-shadow: none;
  }
}
</style>
