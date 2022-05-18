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

            <li>
              <a
                v-on:click="clickLogin"
                data-uk-dropdown="{'preventflip':'y'}"
                aria-haspopup="true"
                aria-expanded="false"
                class=""
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
                >Login</a
              >
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
  data() {
    return {
      isMenu: false,
      // isContent: false,
    };
  },
  methods: {
    clickLogin() {
      // alert("Hi");
      // this.isMenu = true;
    },
    // We can add our functions here
  },
};
</script>

<style scoped>
@import "@/css/theme.css";
</style>
