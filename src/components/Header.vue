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
              <div
                class="uk-dropdown uk-dropdown-navbar uk-dropdown-width-1 uk-dropdown-bottom"
                style="top: 70px; left: 0px"
              >
                <div class="uk-grid uk-dropdown-grid">
                  <div class="uk-width-1-1">
                    <ul class="uk-nav uk-nav-navbar">
                      <li>
                        <a class="yellow-scheme" href="../yellow/index.html"
                          >Yellow Color Scheme</a
                        >
                      </li>
                      <li>
                        <a class="blue-scheme" href="../blue/index.html"
                          >Blue Color Scheme</a
                        >
                      </li>
                      <li>
                        <a class="red-scheme" href="../red/index.html"
                          >Red Color Scheme</a
                        >
                      </li>
                      <li><a href="offline.html">Offline Page</a></li>
                      <li><a href="404.html">Error Page</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li
              data-uk-dropdown="{'preventflip':'y'}"
              aria-haspopup="true"
              aria-expanded="false"
              class=""
            >
              <a @click="$router.push('/sportbook')" href="">Sport</a>
            </li>
            <li><a @click="$router.push('/report')" href="#">Report</a></li>
            <li
              class="uk-parent"
              data-uk-dropdown="{'preventflip':'y'}"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <a @click="$router.push('/score')" href="#">Score</a>
            </li>
            <li><a href="news.html">Login</a></li>
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
