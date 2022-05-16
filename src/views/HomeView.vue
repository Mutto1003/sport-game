<template>
  <div class="home">
    <div class="va-latest-wrap">
      <div class="uk-container uk-container-center">
        <div class="va-latest-top">
          <h3>Latest <span>Results</span></h3>
          <div class="tournament">
            <address>Cambridgeshire UK<br /><br /></address>
          </div>
          <div class="date">November 29, 2015 | 12:00 am</div>
        </div>
      </div>
      <div class="va-latest-middle uk-flex uk-flex-middle">
        <div class="uk-container uk-container-center">
          <div class="uk-grid uk-flex uk-flex-middle">
            <div class="uk-width-2-12 center">
              <a href="results.html">
                <img
                  src="@/assets/club-logo.png"
                  class="img-polaroid"
                  alt=""
                  title=""
                />
              </a>
            </div>
            <div class="uk-width-3-12 name uk-vertical-align">
              <div class="wrap uk-vertical-align-middle">Cambridgehire</div>
            </div>
            <div class="uk-width-2-12 score">
              <div class="title">score</div>
              <div class="table">
                <div class="left">3</div>
                <div class="right">5</div>
                <div class="uk-clearfix"></div>
              </div>
            </div>
            <div class="uk-width-3-12 name alt uk-vertical-align">
              <div class="wrap uk-vertical-align-middle">china</div>
            </div>
            <div class="uk-width-2-12 center">
              <a href="results.html">
                <img
                  src="@/assets/club-logo1.png"
                  class="img-polaroid"
                  alt=""
                  title=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="uk-container uk-container-center">
        <div class="va-latest-bottom">
          <div class="uk-grid">
            <div class="uk-width-8-12 uk-container-center text">
              <p>
                Vivamus hendrerit, tortor sed luctus maximus, nunc urna
                hendrerit nibh, sit amet efficitur libero lorem quis mauris.
                Nunc a pulvinar lectus. Pellentesque aliquam justo ut rhoncus
                lobortis. In sed venenatis massa. Sed sodales faucibus odio,
                eget tempus nibh accumsan ut. Fusce tincidunt semper finibus.
                Nullam consequat non leo interdum pulvinar.
              </p>
            </div>
          </div>

          <div class="uk-grid">
            <div class="uk-width-1-1">
              <div class="btn-wrap uk-container-center">
                <a class="read-more" href="results.html">More Info</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5">
      <section
        id="tm-top-c"
        class="tm-top-c uk-grid uk-grid-collapse"
        data-uk-grid-match="{target:'> div > .uk-panel'}"
        data-uk-grid-margin=""
      >
        <div class="uk-width-1-1 uk-width-large-1-2 uk-row-first">
          <div class="uk-panel" style="min-height: 497px">
            <div
              class="va-about-wrap clearfix uk-cover-background uk-position-relative"
            >
              <div class="va-about-text">
                <div class="title">About <span>Team</span></div>
                <p>
                  Nam quis purus sed est interdum sagittis sed in leo. Nunc
                  feugiat enim nunc, sit amet placerat erat consectetur in. Cras
                  consequat enim nunc, sit amet venenatis massa volutpat ut.
                  Cras vitae facilisis nulla.
                </p>
                <p>
                  Nulla pharetra lobortis nisl, vitae pretium nunc congue eget.
                  Nunc imperdiet consequat nibh pharetra venenatis. Duis vitae
                  lacinia nibh, et egestas leo. Proin sed mi sit amet dolor
                  rhoncus tristique. Maecenas rhoncus felis vel congue commodo.
                </p>
                <a class="read-more" href="about.html">read more</a>
              </div>
            </div>
          </div>
        </div>

        <div class="uk-width-1-1 uk-width-large-1-2">
          <div style="min-height: 497px" class="uk-panel">
            <div class="trainers-module tm-trainers-slider">
              <div class="trainer-wrapper">
                <div
                  data-uk-slideset="{default: 1, animation: 'fade', duration: 400}"
                  dir="ltr"
                >
                  <div class="trainer-top">
                    <div class="trainers-btn">
                      <a
                        href="/"
                        class="uk-slidenav uk-slidenav-contrast uk-slidenav-previous"
                        data-uk-slideset-item="previous"
                      ></a>
                      <a
                        href="/"
                        class="uk-slidenav uk-slidenav-contrast uk-slidenav-next"
                        data-uk-slideset-item="next"
                      ></a>
                    </div>
                    <h3>Trainers</h3>
                  </div>
                  <ul class="uk-grid uk-slideset uk-grid-width-1-1">
                    <li class="uk-active" style="">
                      <div class="img-wrap">
                        <img
                          src="images/trainer-slider/trainer-img.jpg"
                          alt=""
                        />
                      </div>
                      <div class="name">Bernard <span>Fernandez</span></div>
                    </li>
                    <li style="display: none">
                      <div class="img-wrap">
                        <img
                          src="images/trainer-slider/trainer-img1.jpg"
                          alt=""
                        />
                      </div>
                      <div class="name">Fernand <span>Bernardez</span></div>
                    </li>
                    <li style="display: none">
                      <div class="img-wrap">
                        <img
                          src="images/trainer-slider/trainer-img2.jpg"
                          alt=""
                        />
                      </div>
                      <div class="name">Martin <span>Huanez</span></div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>
<style scoped>
.mt {
  margin-top: 1000px;
}
</style>
