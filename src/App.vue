<template>
  <div class="appwrapper">
    <div id="app">
    <div class="dashboardpage">
    <section>
      <notification>
      </notification>
    </section>
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
              <font-awesome-icon
                icon="sun"
                size="2x"
                fixed-width
                style="color: var(--dynamic-subtitle-color);">
              </font-awesome-icon>
            </span>
            <span v-else>
              <font-awesome-icon
                icon="moon"
                size="2x"
                fixed-width
                style="color: var(--dynamic-subtitle-color);">
              </font-awesome-icon>
            </span>
          </label>
        </section>
      <section class="main-title">
        <div class="header-top">
          <div class="container">
            <h3 class="title dynamic-title">
              <span v-if="darkMode === true">
              </span>
              <span v-else>
              </span>
            </h3>
            <h3 class="title dynamic-title">
              Home IoT Dashboard
            </h3>
          </div>
        </div>
      </section>
        <section class= "rowContainer">
          <statusofdevices class="item"> </statusofdevices>
          <livestream class="item"> </livestream>
        </section>
        <section class="rowContainer">
            <estimatedCosts class="item">
            </estimatedCosts>
              <div class="trendlineContainer">
                <trendLine class="item">
                </trendLine>
              </div>
        </section>
        <section>
          <accordion>
          </accordion>
        </section>
    </div>
  </div>
</div>
</template>
<script>
// primeVUE compoenets
import trendLine from "./components/trendLine";
import estimatedCosts from "./components/estimatedCosts";
import statusofdevices from "./components/statusofdevices";
import livestream from "./components/livestream";
import notification from "./components/notification";
import accordion from "./components/accordion";
export default {
  name: "app",
  components: {
    // Button,
    statusofdevices,
    livestream,
    trendLine,
    estimatedCosts,
    notification,
    accordion
  },
  data() {
    return {
      darkMode: false
    };
  },
  mounted() {    // set 'app-background' class to body tag
    let bodyElement = document.body;
    bodyElement.classList.add("app-background");    // check for active theme
    let htmlElement = document.documentElement;
    let theme = localStorage.getItem("theme");    if (theme === "dark") {
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
      let htmlElement = document.documentElement;      if (this.darkMode) {
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
  display: flex;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.appwrapper{
  padding: 15px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  width: 900px;
}
.rowContainer{
display: flex;
flex-direction: row;
}
.dashboardpage{
  display: block;
  justify-content: center;
}
.item{
  margin: 10px;
}
.themecontainer{
  display: flex;
  justify-content: flex-end;
}
.rowcontainer{
  display: flex;
  flex-direction: row;
}
@media (max-width: 770px) {
  #app{
  padding: 5px;
}
  .rowContainer{
    display: flex;
    flex-direction: column;
  }
  .dashboardpage{
    display: block;
    justify-content: space-around;
    width: 750px;
  }
  .trendlineContainer{
    align-self: center;
  }
}
@media (max-width: 415px) {
  #app{
  padding: 5px;
}
  .rowContainer{
    display: flex;
    flex-direction: column;
  }
  .dashboardpage{
    display: block;
    justify-content: space-evenly;
  }
  .trendlineContainer{
    align-self: center;
  }
}
</style>
