<template>
  <div id="app" class="mb-4">
    <GitHubCorner />
    <div class="container mb-4 mt-4">
      <div class="mb-4 d-flex">
        <h1 class="logo">
          <router-link to="/">
            <img alt="Logo" src="./assets/logo.png" width="50" />
            Bouleconstd Gelato {{ isRenderHeader }}
          </router-link>
        </h1>
        <!-- <theme-handler class="mt-3 ml-auto mr-4"></theme-handler> -->
      </div>

      <b-nav tabs align="center" v-if="isRenderHeader">
        <b-nav-item to="/">Featured</b-nav-item>
        <b-nav-item to="/random" v-if="!isMobile">Random</b-nav-item>
        <b-nav-item to="/explore">Explore</b-nav-item>
        <b-nav-item to="/keyword" v-if="!isMobile">Keywords</b-nav-item>
        <b-nav-item to="/search">Search</b-nav-item>
        <b-nav-item to="/favorites" alt="Favorites">⭐</b-nav-item>
      </b-nav>
    </div>
    <router-view />

    <footer class="container mt-4 text-center" v-if="isRenderFooter">
      <hr />
      <a href="https://www.netlify.com">
        <img src="https://www.netlify.com/img/global/badges/netlify-light.svg" alt="Netlify" />
      </a>
    </footer>
  </div>
</template>

<script>
import GitHubCorner from '@/components/GitHubCorner.vue';
// import ThemeHandler from '@/components/ThemeHandler.vue';

export default {
  name: 'App',
  components: {
    GitHubCorner,
    // ThemeHandler,
  },
  computed: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      );
    },
    isRenderHeader() {
      const arrRouter = ['login', 'register'];
      const routerName = this.$route.name;
      if (arrRouter.indexOf(routerName) !== -1) return false;
      return true;
    },
    isRenderFooter() {
      const arrRouter = ['login', 'register', 'dashboard/view'];
      const routerName = this.$route.name;
      if (arrRouter.indexOf(routerName) !== -1) return false;
      return true;
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.container {
  max-width: 960px;
}

.logo {
  font-family: 'Pacifico', 'cursive';
}
.logo a {
  text-decoration: none;
  color: inherit;
}

@media (max-width: 576px) {
  .nav {
    font-size: 0.9rem;
  }
}
</style>
