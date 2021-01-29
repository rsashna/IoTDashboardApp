<template>
  <div class="wrapper">
    <div id="app">
    <div class="dashboardpage">
        <section class="themecontainer">
          <!-- theme switcher -->
          <input
            type="checkbox"
            id="theme-switch"
            class="theme-switch"
            v-model="darkMode"
          />
          <label for="theme-switch">
            <span v-if="darkMode === true">
              <img class="theme" src="./assets/suncloud.png">
            </span>
            <span v-else>
              <img class="theme" src="./assets/suncloud.png">
            </span>
          </label>
        </section>
      <section class="main-title">
        <div class="header-top">
          <div class="container">
            <h1 class="title dynamic-title">
              <span v-if="darkMode === true"></span>
              <span v-else></span>
            </h1>
            <h2 class="subtitle dynamic-subtitle">
              Home Iot Dashboard
            </h2>

          </div>
        </div>
      </section>
      <section class= "rowContainer">
<section> <statusofdevices class="item"> </statusofdevices> </section>
<section> <livestream class="item"> </livestream> </section>
</section>
    </div>
  </div>
</div>
</template>


<script>
import statusofdevices from "./components/statusofdevices";
import livestream from "./components/livestream";
export default {
  name: "app",
  components: {
    statusofdevices,
    livestream
  },
  data() {
    return {
      darkMode: false
    };
  },
  mounted() {

    // set 'app-background' class to body tag
    let bodyElement = document.body;
    bodyElement.classList.add("app-background");

    // check for active theme
    let htmlElement = document.documentElement;
    let theme = localStorage.getItem("theme");

    if (theme === "dark") {
      htmlElement.setAttribute("theme", "dark");
      this.darkMode = true;
    } else {
      htmlElement.setAttribute("theme", "light");
      this.darkMode = false;
    }
  },
  watch: {
    darkMode: function() {
      // add/remove class to/from html tag
      let htmlElement = document.documentElement;

      if (this.darkMode) {
        localStorage.setItem("theme", "dark");
        htmlElement.setAttribute("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
        htmlElement.setAttribute("theme", "light");
      }
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.rowContainer{
display: flex;
flex-direction: row;
margin: 50px;
}
.wrapper{
  display: flex;
  align-content: center;
}
.dashboardpage{
  display: block;
  justify-content: center;
  width: 1000px;
}

.item{
  margin: 10px;
}
.theme{
  padding: 10px;
  width:50px;
}
.themecontainer{
  display: flex;
  justify-content: flex-end;
}
@media (max-width: 770px) {
  .dashboardpage{
    display: block;
    justify-content: center;
    width: 750px;
  }
}
@media (max-width: 415px) {
  .dashboardpage{
    display: block;
    justify-content: center;
    width: 360px;
  }
}
</style>
