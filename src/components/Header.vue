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
              class="uk-parent uk-active"
              data-uk-dropdown="{'preventflip':'y'}"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <a @click="$router.push('/')" href="">Home</a>
            </li>

            <li
              data-uk-dropdown="{'preventflip':'y'}"
              aria-haspopup="true"
              aria-expanded="false"
              class=""
            >
              <a @click="$router.push('/sportbook')" href="">Sport</a>
            </li>

            <li
              data-uk-dropdown="{'preventflip':'y'}"
              aria-haspopup="true"
              aria-expanded="false"
              class=""
            >
              <a @click="$router.push('/report')" href="">Report</a>
            </li>

            <li
              data-uk-dropdown="{'preventflip':'y'}"
              aria-haspopup="true"
              aria-expanded="false"
              class=""
            >
              <a @click="$router.push('/score')" href="">Score</a>
            </li>

            <li>
              <a
                data-uk-dropdown="{'preventflip':'y'}"
                aria-haspopup="true"
                aria-expanded="false"
                class=""
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
                href=""
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
export default {};
</script>

<style scoped>
@import "@/css/theme.css";
</style>
