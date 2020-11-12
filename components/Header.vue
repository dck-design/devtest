<template>
  <header class="header">
    <ul>
      <li><a href="javascript:gotoslide('about');">About</a></li>
      <li><a href="javascript:gotoslide('projects');">Projects</a></li>
      <li><a href="javascript:gotoslide('contact');">Contact</a></li>
    </ul>
  </header>
</template>

<script>
export default { name: 'Header' }
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}
html,
body {
  font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 2rem;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.header {
  position: absolute;
  top: 1vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: transform 1s;
  transform: translateY(-200px);
}
.header ul {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: right;
  margin: 0;
  padding: 0;
  border-radius: 10px;
  overflow: hidden;
}
.header a {
  display: flex;
  padding: 0.4rem 1rem;
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
}
.header a:hover,
.header a:focus {
  background: rgba(0, 0, 0, 0.5);
}
a,
a:hover,
a:active,
a:visited {
  text-decoration: none;
  -webkit-transition: background 0.4s;
  -moz-transition: background 0.4s;
  -ms-transition: background 0.4s;
  -o-transition: background 0.4s;
  transition: background 0.4s;
}
/* Animation readying */
body {
  visibility: hidden;
}
</style>
