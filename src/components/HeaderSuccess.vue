<template>
  <div style="height: 70px" class="uk-sticky-placeholder">
    <div class="uk-sticky-placeholder" style="height: 70px; margin: 0px">
      <nav style="margin: 0px" class="tm-navbar uk-navbar" data-uk-sticky="">
        <div class="uk-container uk-container-center">
          <a class="tm-logo uk-float-left" href="/">
            <img src="@/assets/logo-img.png" alt="logo" title="logo" />
            <span>Sport<em>.ak</em></span>
          </a>

          <ul class="uk-navbar-nav uk-hidden-small">
            <li
              @click.stop.prevent="myFilter('H')"
              v-bind:class="[activeMenu == 'H' ? 'uk-active' : '']"
              class="uk-parent"
              data-uk-dropdown="{'preventflip':'y'}"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <a @click="$router.push('/')" href="#">Home</a>
            </li>

            <li
              @click.stop.prevent="myFilter('P')"
              v-bind:class="[activeMenu == 'P' ? 'uk-active' : '']"
              data-uk-dropdown="{'preventflip':'y'}"
              aria-haspopup="true"
              aria-expanded="false"
              class=""
            >
              <a @click="$router.push('/sportbook')" href="">Sport</a>
            </li>

            <li
              @click.stop.prevent="myFilter('R')"
              v-bind:class="[activeMenu == 'R' ? 'uk-active' : '']"
              data-uk-dropdown="{'preventflip':'y'}"
              aria-haspopup="true"
              aria-expanded="false"
              class=""
            >
              <a @click="$router.push('/report')" href="">Report</a>
            </li>

            <li
              @click.stop.prevent="myFilter('S')"
              @click="$router.push('/score')"
              v-bind:class="[activeMenu == 'S' ? 'uk-active' : '']"
              data-uk-dropdown="{'preventflip':'y'}"
              aria-haspopup="true"
              aria-expanded="false"
              class=""
            >
              <a href="">Score</a>
            </li>

            <li
              @click.stop.prevent="myFilter('H')"
              v-bind:class="[activeMenu == 'H' ? 'uk-active' : '']"
            >
              <a @click="$router.push('/')" href="">Logout</a>
            </li>

            <!-- <li><a href="category.html">Shop</a></li>
            <li><a href="contact.html">Contact</a></li> -->
          </ul>
          <a
            href="#offcanvas"
            class="uk-navbar-toggle uk-visible-small"
            data-uk-offcanvas=""
          ></a>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderSuccess",
  data() {
    return {
      activeMenu: this.$store.state.test,
      // isContent: false,
    };
  },
  methods: {
    clickLogin() {
      // alert("Hi");
      // this.isMenu = true;
    },
    // We can add our functions here
    myFilter(menu) {
      this.$store.state.test = menu;
      this.activeMenu = menu;
      // some code to filter users
    },
  },
};
</script>

<style scoped>
@import "@/css/theme.css";
</style>
