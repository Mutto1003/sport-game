<template>
  <div style="height: 70px" class="uk-sticky-placeholder">
    <div class="uk-sticky-placeholder" style="height: 70px; margin: 0px">
      <nav style="margin: 0px" class="tm-navbar uk-navbar" data-uk-sticky="">
        <div class="uk-container uk-container-center">
          <a class="tm-logo uk-float-left" href="index.html">
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
              <a href="index.html">Home</a>
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
              <a href="about.html">About</a>
            </li>
            <li
              class="uk-parent"
              data-uk-dropdown="{'preventflip':'y'}"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <a href="#">Pages</a>
              <div
                class="uk-dropdown uk-dropdown-navbar uk-dropdown-width-1 uk-dropdown-bottom"
                style="top: 70px; left: 0px"
              >
                <div class="uk-grid uk-dropdown-grid">
                  <div class="uk-width-1-1">
                    <ul class="uk-nav uk-nav-navbar">
                      <li><a href="players.html">Players</a></li>
                      <li><a href="gallery.html">Gallery</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="uk-parent"
              data-uk-dropdown="{'preventflip':'y'}"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <a href="match-list.html">Match</a>
              <div
                class="uk-dropdown uk-dropdown-navbar uk-dropdown-width-1 uk-dropdown-bottom"
                style="top: 70px; left: 0px"
              >
                <div class="uk-grid uk-dropdown-grid">
                  <div class="uk-width-1-1">
                    <ul class="uk-nav uk-nav-navbar">
                      <li><a href="results.html">Results</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li><a href="news.html">News</a></li>
            <li><a href="category.html">Shop</a></li>
            <li><a href="contact.html">Contact</a></li>
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
@import "@/css/theme.css"
</style>
