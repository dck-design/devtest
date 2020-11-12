<template>
  <div class="logo">
    <div
      id="logo"
      data-tilt
      data-tilt-full-page-listening
      data-tilt-speed="500"
      data-tilt-perspective="2000"
    ></div>
  </div>
</template>

<script>
export default { name: 'Logo' }
</script>

<style>
.logo {
  position: absolute;
  z-index: -2;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 50%
  );
  -webkit-transition: background 3s;
  -moz-transition: background 3s;
  -ms-transition: background 3s;
  -o-transition: background 3s;
  transition: background 3s;
}
#logo {
  position: absolute;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-image: url(../assets/dck-design_new_logo.svg);
  background-repeat: no-repeat;
  background-size: min(65vh, 65vw);
  background-position: center center;
  -webkit-transition: background 1s;
  -moz-transition: background 1s;
  -ms-transition: background 1s;
  -o-transition: background 1s;
  transition: background 1s;
}
@media screen and (max-width: 640px) {
  #logo {
    background-size: min(75vh, 75vw);
  }
}
</style>
