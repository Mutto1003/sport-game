<template>
  <div class="home bg-1">
    <Loading v-if="isLoading"></Loading>
    <Header v-if="isHeader" class="fixed-top" />    
    <Carousel class="mtc" />
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

    <div class="mt">
      <div class="tm-top-e-box tm-full-width va-main-next-match">
        <div class="uk-container uk-container-center">
          <section
            id="tm-top-e"
            class="tm-top-e uk-grid"
            data-uk-grid-match="{target:'> div > .uk-panel'}"
            data-uk-grid-margin=""
          >
            <div class="uk-width-1-1 uk-row-first">
              <div class="uk-panel">
                <div class="uk-container uk-container-center">
                  <div class="uk-grid uk-grid-collapse">
                    <div
                      class="uk-width-medium-1-2 uk-width-small-1-1 va-single-next-match"
                    >
                      <div class="va-main-next-wrap">
                        <div class="main-next-match-title">
                          <em>Next <span>Match</span></em>
                        </div>
                        <div class="match-list-single">
                          <div class="match-list-item">
                            <div class="count">
                              <div id="countdown4">
                                <div class="counter_container"></div>
                                <div class="counter_container">
                                  <span class="countdown_number" style="color: "
                                    >2043
                                  </span>
                                  <span class="countdown_word" style="color: "
                                    >days</span
                                  >
                                  <span class="countdown_separator">:</span>
                                  <span class="countdown_number" style="color: "
                                    >05
                                  </span>
                                  <span class="countdown_word" style="color: "
                                    >hrs</span
                                  >
                                  <span class="countdown_separator">:</span>
                                  <span class="countdown_number" style="color: "
                                    >08
                                  </span>
                                  <span class="countdown_word" style="color: "
                                    >min</span
                                  >
                                  <span class="countdown_separator">:</span>
                                  <span class="countdown_number" style="color: "
                                    >14
                                  </span>
                                  <span class="countdown_word" style="color: "
                                    >sec</span
                                  >
                                  <span class="countdown_separator">:</span>
                                </div>
                              </div>

                              <div class="clearfix"></div>
                            </div>
                            <div class="clear"></div>
                            <div class="logo">
                              <a href="match-single.html">
                                <img
                                  src="@/assets/team-ava.png"
                                  class="img-polaroid"
                                  alt="England VS Amsterdam (2015-11-14)"
                                  title="England VS Amsterdam (2015-11-14)"
                                />
                              </a>
                            </div>
                            <div class="team-name">England</div>
                            <div class="versus">VS</div>

                            <div class="team-name">Amsterdam</div>
                            <div class="logo">
                              <a href="match-single.html">
                                <img
                                  src="@/assets/team-ava1.png"
                                  class="img-polaroid"
                                  alt="England VS Amsterdam (2015-11-14)"
                                  title="England VS Amsterdam (2015-11-14)"
                                />
                              </a>
                            </div>
                            <div class="clear"></div>
                            <div class="date">November 14, 2015 | 12:00 am</div>
                            <div class="clear"></div>
                            <div class="location">
                              <address>Cambridgeshire UK<br /><br /></address>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="uk-width-medium-1-2 uk-width-small-1-1 va-list-next-match"
                    >
                      <div class="match-list-wrap">
                        <div class="match-list-item alt">
                          <div class="date">November 29, 2015</div>
                          <div class="wrapper">
                            <div class="logo">
                              <a href="match-single.html">
                                <img
                                  src="@/assets/team-ava.png"
                                  class="img-polaroid"
                                  alt="Cambridgehire VS china (2015-11-29)"
                                  title="Cambridgehire VS china (2015-11-29)"
                                />
                              </a>
                            </div>
                            <div class="team-name">Cambridgehire</div>
                            <div class="versus">VS</div>

                            <div class="team-name">china</div>
                            <div class="logo">
                              <a href="match-single.html">
                                <img
                                  src="@/assets/team-ava1.png"
                                  class="img-polaroid"
                                  alt="Cambridgehire VS china (2015-11-29)"
                                  title="Cambridgehire VS china (2015-11-29)"
                                />
                              </a>
                            </div>
                          </div>
                        </div>

                        <div class="match-list-item alt">
                          <div class="date">November 20, 2015</div>
                          <div class="wrapper">
                            <div class="logo">
                              <a href="match-single.html">
                                <img
                                  src="@/assets/team-ava2.png"
                                  class="img-polaroid"
                                  alt="Cambridgehire VS china (2015-11-20)"
                                  title="Cambridgehire VS china (2015-11-20)"
                                />
                              </a>
                            </div>
                            <div class="team-name">Cambridgehire</div>
                            <div class="versus">VS</div>

                            <div class="team-name">china</div>
                            <div class="logo">
                              <a href="match-single.html">
                                <img
                                  src="@/assets/team-ava3.png"
                                  class="img-polaroid"
                                  alt="Cambridgehire VS china (2015-11-20)"
                                  title="Cambridgehire VS china (2015-11-20)"
                                />
                              </a>
                            </div>
                          </div>
                        </div>

                        <div class="match-list-item alt">
                          <div class="date">November 14, 2015</div>
                          <div class="wrapper">
                            <div class="logo">
                              <a href="match-single.html">
                                <img
                                  src="@/assets/team-ava4.png"
                                  class="img-polaroid"
                                  alt="England VS Amsterdam (2015-11-14)"
                                  title="England VS Amsterdam (2015-11-14)"
                                />
                              </a>
                            </div>
                            <div class="team-name">England</div>
                            <div class="versus">VS</div>

                            <div class="team-name">Amsterdam</div>
                            <div class="logo">
                              <a href="match-single.html">
                                <img
                                  src="@/assets/team-ava5.png"
                                  class="img-polaroid"
                                  alt="England VS Amsterdam (2015-11-14)"
                                  title="England VS Amsterdam (2015-11-14)"
                                />
                              </a>
                            </div>
                          </div>
                        </div>

                        <div class="match-list-item alt">
                          <div class="date">November 29, 2015</div>
                          <div class="wrapper">
                            <div class="logo">
                              <a href="match-single.html">
                                <img
                                  src="@/assets/team-ava.png"
                                  class="img-polaroid"
                                  alt="Cambridgehire VS china (2015-11-29)"
                                  title="Cambridgehire VS china (2015-11-29)"
                                />
                              </a>
                            </div>
                            <div class="team-name">Cambridgehire</div>
                            <div class="versus">VS</div>

                            <div class="team-name">china</div>
                            <div class="logo">
                              <a href="match-single.html">
                                <img
                                  src="@/assets/team-ava1.png"
                                  class="img-polaroid"
                                  alt="Cambridgehire VS china (2015-11-29)"
                                  title="Cambridgehire VS china (2015-11-29)"
                                />
                              </a>
                            </div>
                          </div>
                        </div>

                        <div class="match-list-item alt">
                          <div class="date">November 20, 2015</div>
                          <div class="wrapper">
                            <div class="logo">
                              <a href="match-single.html">
                                <img
                                  src="@/assets/team-ava2.png"
                                  class="img-polaroid"
                                  alt="King VS china (2015-11-20)"
                                  title="King VS china (2015-11-20)"
                                />
                              </a>
                            </div>
                            <div class="team-name">King</div>
                            <div class="versus">VS</div>

                            <div class="team-name">china</div>
                            <div class="logo">
                              <a href="match-single.html">
                                <img
                                  src="@/assets/team-ava3.png"
                                  class="img-polaroid"
                                  alt="King VS china (2015-11-20)"
                                  title="King VS china (2015-11-20)"
                                />
                              </a>
                            </div>
                          </div>
                        </div>

                        <div class="match-list-item alt">
                          <div class="date">November 14, 2015</div>
                          <div class="wrapper">
                            <div class="logo">
                              <a href="match-single.html">
                                <img
                                  src="@/assets/team-ava4.png"
                                  class="img-polaroid"
                                  alt="England VS Amsterdam (2015-11-14)"
                                  title="England VS Amsterdam (2015-11-14)"
                                />
                              </a>
                            </div>
                            <div class="team-name">England</div>
                            <div class="versus">VS</div>

                            <div class="team-name">Amsterdam</div>
                            <div class="logo">
                              <a href="match-single.html">
                                <img
                                  src="@/assets/team-ava5.png"
                                  class="img-polaroid"
                                  alt="England VS Amsterdam (2015-11-14)"
                                  title="England VS Amsterdam (2015-11-14)"
                                />
                              </a>
                            </div>
                          </div>
                        </div>

                        <div class="match-list-item alt">
                          <div class="date">November 29, 2015</div>
                          <div class="wrapper">
                            <div class="logo">
                              <a href="match-single.html">
                                <img
                                  src="@/assets/team-ava.png"
                                  class="img-polaroid"
                                  alt="Cambridgehire VS china (2015-11-29)"
                                  title="Cambridgehire VS china (2015-11-29)"
                                />
                              </a>
                            </div>
                            <div class="team-name">Cambridgehire</div>
                            <div class="versus">VS</div>

                            <div class="team-name">china</div>
                            <div class="logo">
                              <a href="match-single.html">
                                <img
                                  src="@/assets/team-ava.png"
                                  class="img-polaroid"
                                  alt="Cambridgehire VS china (2015-11-29)"
                                  title="Cambridgehire VS china (2015-11-29)"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="match-list-item alt">
                          <div class="date">November 29, 2015</div>
                          <div class="wrapper">
                            <div class="logo">
                              <a href="match-single.html">
                                <img
                                  src="@/assets/team-ava.png"
                                  class="img-polaroid"
                                  alt="Cambridgehire VS china (2015-11-29)"
                                  title="Cambridgehire VS china (2015-11-29)"
                                />
                              </a>
                            </div>
                            <div class="team-name">Cambridgehire</div>
                            <div class="versus">VS</div>

                            <div class="team-name">china</div>
                            <div class="logo">
                              <a href="match-single.html">
                                <img
                                  src="@/assets/team-ava.png"
                                  class="img-polaroid"
                                  alt="Cambridgehire VS china (2015-11-29)"
                                  title="Cambridgehire VS china (2015-11-29)"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>

    <div class="">
      <div class="tm-top-f-box tm-full-width va-main-our-news">
        <div class="uk-container uk-container-center">
          <section
            id="tm-top-f"
            class="tm-top-f uk-grid"
            data-uk-grid-match="{target:'> div > .uk-panel'}"
            data-uk-grid-margin=""
          >
            <div class="uk-width-1-1 uk-row-first">
              <div class="uk-panel">
                <div class="uk-container uk-container-center">
                  <div class="uk-grid uk-grid-collapse" data-uk-grid-match="">
                    <div class="uk-width-1-1">
                      <div class="our-news-title">
                        <h3>Our <span>News</span></h3>
                      </div>
                      <div class="our-news-text">
                        Nullam quis eros tellus. Duis sit amet neque nec orci
                        feugiat tincidunt. Lorem ipsum dolor sit amet, <br />
                        consectetur adipiscing elit. Nulla sed turpis aliquet,
                        pharetra enim sit amet, congue erat.
                      </div>
                    </div>

                    <article
                      class="uk-width-large-1-2 uk-width-medium-1-1 uk-width-small-1-1 our-news-article"
                      data-uk-grid-match=""
                    >
                      <div
                        class="img-wrap uk-cover-background uk-position-relative"
                        style="
                          background-image: url('');
                          min-height: 280px;
                        "
                      >
                        <a href="news-single.html"></a>
                        <img
                          class="uk-invisible"
                          src=""
                          alt=""
                        />
                      </div>
                      <div style="min-height: 280px" class="info">
                        <div class="date">Nov 20, 2015</div>
                        <div class="name">
                          <h4>
                            <a href="news-single.html"
                              >Nullam enim ante, volutpat non viverra eget
                            </a>
                          </h4>
                        </div>
                        <div class="text">
                          <p>
                            Vivamus hendrerit, tortor sed luctus maximus, nunc
                            urna hendrerit nibh, sit amet efficitur libero lorem
                            quis mauris. Nunc a pulvinar lectus.
                          </p>
                          <div class="read-more">
                            <a href="news-single.html">Read More</a>
                          </div>
                        </div>
                      </div>
                    </article>

                    <article
                      class="uk-width-large-1-2 uk-width-medium-1-1 uk-width-small-1-1 our-news-article"
                      data-uk-grid-match=""
                    >
                      <div
                        class="img-wrap uk-cover-background uk-position-relative"
                        style="
                          background-image: url('');
                          min-height: 280px;
                        "
                      >
                        <a href="news-single.html"></a>
                        <img
                          class="uk-invisible"
                          src=""
                          alt=""
                        />
                      </div>
                      <div style="min-height: 280px" class="info">
                        <div class="date">Nov 20, 2015</div>
                        <div class="name">
                          <h4>
                            <a href="news-single.html"
                              >Cum sociis natoque penatibus et magnis dis
                              parturient</a
                            >
                          </h4>
                        </div>
                        <div class="text">
                          <p>
                            Vivamus hendrerit, tortor sed luctus maximus, nunc
                            urna hendrerit nibh, sit amet efficitur libero lorem
                            quis mauris. Nunc a pulvinar lectus.
                          </p>
                          <div class="read-more">
                            <a href="news-single.html">Read More</a>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div class="all-news-btn">
                  <a href="news.html"><span>All News</span></a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header d-flex justify-content-center">
            <h5 class="modal-title text-center" id="app">เข้าสู่ระบบ</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3 mt-3">
                <input
                  type="text"
                  class="form-control rounded-input"
                  placeholder="ชื่อผู้ใช้"
                  id="app"
                />
              </div>
              <div class="mb-5 mt-3">
                <input
                  type="text"
                  class="form-control rounded-input"
                  placeholder="รหัสผ่าน"
                  id="app"
                />
              </div>

              <div class="d-flex justify-content-center">
                <button
                  @click="$router.push('/sportbook')"
                  id="app"
                  type="button"
                  class="btn btn-login"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  เข้าสู่ระบบ
                </button>
                <!-- <button type="button" class="btn" data-bs-dismiss="modal">
                  ปิด
                </button> -->
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Loading from "@/components/Loading.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Carousel from "@/components/Carousel.vue";
export default {
  name: "HomeView",
  data() {
    return {
      isLoading: true,
      isHeader: false,
      // isContent: false,
    };
  },
  components: { Loading, Header, Carousel, Footer },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
      this.isHeader = true;
    }, 500);
    // this.isContent = true;
  },
};
</script>
<style scoped>

.mt {
  padding: 90px 0;
}

.mtc {
  margin-top: 150px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.bg-1 {
  width: 100%;
  height: 450px;
  background-image: url("@/assets/banerSPBook-010.jpeg");
  position: absolute;
  top: 0;
  right: 0;
}

.rounded-input {
  padding: 10px;
  border-radius: 25px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
}

.btn-login {
  padding: 10px 20px;
  border-radius: 50px;
  color: #000;
  background: #e0a500;
  background: -moz-linear-gradient(
    0deg,
    rgba(224, 165, 0, 1) 0,
    rgba(255, 228, 15, 1) 100%
  );
  background: -webkit-linear-gradient(
    0deg,
    rgba(224, 165, 0, 1) 0,
    rgba(255, 228, 15, 1) 100%
  );
  background: linear-gradient(
    0deg,
    rgba(224, 165, 0, 1) 0,
    rgba(255, 228, 15, 1) 100%
  );
  font-size: 18px;
  font-weight: 600;
  border: 0;
}
@import "@/css/theme.css";
</style>
