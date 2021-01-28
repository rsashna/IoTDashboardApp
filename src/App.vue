<template>
    <div id="app">
        <div class="section container">

            <div class="columns is-mobile">
                <div class="column is-9">
                    <!-- content -->
                </div>
                <div class="column is-1">
                    <!-- theme switcher -->
                    <input type="checkbox" id='theme-switch' class='theme-switch' v-model="darkMode"/>
                    <label for='theme-switch'>
                        <span v-if="darkMode === true">
                            <img width="40" name="cloud-sun"/>
                        </span>
                        <span v-else>
                            <img width="40" name="cloud-sun"/>
                        </span>
                    </label>
                </div>
            </div>

            <section class="hero is-medium has-text-centered">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title dynamic-title">
                            <span v-if="darkMode === true">Dark Theme</span>
                            <span v-else>Light Theme</span>
                        </h1>
                        <h2 class="subtitle dynamic-subtitle">Greetings from MyNotePaper!</h2>
                    </div>
                </div>
            </section>

        </div>

    </div>
</template>


<script>
export default {
  name: "app",
  data() {
    return {
      darkMode: false
    };
  },
  mounted() {
    // set page title
    document.title = "Multiple Themes in Vue.js";

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

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
