<template>
  <div class="score">
    <Loading v-if="isLoading"></Loading>
    <Header v-if="isHeader" class="fixed-top" />
    <!-- <Carousel class="mtc" /> -->
    <div class="container mtc">
      <div
        class="tm-main uk-row-first"
        style=""
      >
        <main id="tm-content" class="tm-content">
          <div class="match-list-wrap">
            <div class="match-list-item">
              <div class="date">
                <span>14</span>
                Nov
              </div>
              <div class="logo">
                <a href="match-single.html">
                  <img
                    src="@/assets/team-ava.png"
                    class="img-polaroid"
                    alt="England VS Amsterdam (2015-11-14)"
                    title="England VS Amsterdam (2015-11-14)"
                /></a>
              </div>
              <div class="team-name">England</div>
              <div class="team-score">2</div>
              <div class="score-separator">:</div>
              <div class="team-score">0</div>
              <div class="team-name">Amsterdam</div>
              <div class="logo">
                <a href="match-single.html">
                  <img
                    src="@/assets/team-ava1.png"
                    class="img-polaroid"
                    alt="England VS Amsterdam (2015-11-14)"
                    title="England VS Amsterdam (2015-11-14)"
                /></a>
              </div>
              
              <div class="va-view-wrap">
                <a class="view-article" href="match-single.html">view</a>
              </div>
            </div>
            <div class="match-list-item">
              <div class="date">
                <span>29</span>
                Nov
              </div>
              <div class="logo">
                <a href="match-single.html">
                  <img
                    src="@/assets/team-ava2.png"
                    class="img-polaroid"
                    alt="Cambridgehire VS china (2015-11-29)"
                    title="Cambridgehire VS china (2015-11-29)"
                /></a>
              </div>
              <div class="team-name">Cambridgehire</div>
              <div class="versus">VS</div>
              <div class="team-name">china</div>
              <div class="logo">
                <a href="match-single.html">
                  <img
                    src="@/assets/team-ava3.png"
                    class="img-polaroid"
                    alt="Cambridgehire VS china (2015-11-29)"
                    title="Cambridgehire VS china (2015-11-29)"
                /></a>
              </div>
              
              <div class="va-view-wrap">
                <a class="view-article" href="match-single.html">view</a>
              </div>
            </div>
            <div class="match-list-item">
              <div class="date">
                <span>20</span>
                Nov
              </div>
              <div class="logo">
                <a href="match-single.html">
                  <img
                    src="@/assets/team-ava4.png"
                    class="img-polaroid"
                    alt="Cambridgehire VS china (2015-11-20)"
                    title="Cambridgehire VS china (2015-11-20)"
                /></a>
              </div>
              <div class="team-name">Cambridgehire</div>
              <div class="versus">VS</div>
              <div class="team-name">china</div>
              <div class="logo">
                <a href="match-single.html">
                  <img
                    src="@/assets/team-ava5.png"
                    class="img-polaroid"
                    alt="Cambridgehire VS china (2015-11-20)"
                    title="Cambridgehire VS china (2015-11-20)"
                /></a>
              </div>
             
              <div class="va-view-wrap">
                <a class="view-article" href="match-single.html">view</a>
              </div>
            </div>
            <div class="match-list-item">
              <div class="date">
                <span>14</span>
                Nov
              </div>
              <div class="logo">
                <a href="match-single.html">
                  <img
                    src="@/assets/team-ava.png"
                    class="img-polaroid"
                    alt="England VS Amsterdam (2015-11-14)"
                    title="England VS Amsterdam (2015-11-14)"
                /></a>
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
                /></a>
              </div>
              
              <div class="va-view-wrap">
                <a class="view-article" href="match-single.html">view</a>
              </div>
            </div>
            <div class="match-list-item">
              <div class="date">
                <span>29</span>
                Nov
              </div>
              <div class="logo">
                <a href="match-single.html">
                  <img
                    src="@/assets/team-ava2.png"
                    class="img-polaroid"
                    alt="Cambridgehire VS china (2015-11-29)"
                    title="Cambridgehire VS china (2015-11-29)"
                /></a>
              </div>
              <div class="team-name">Cambridgehire</div>
              <div class="versus">VS</div>
              <div class="team-name">china</div>
              <div class="logo">
                <a href="match-single.html">
                  <img
                    src="@/assets/team-ava3.png"
                    class="img-polaroid"
                    alt="Cambridgehire VS china (2015-11-29)"
                    title="Cambridgehire VS china (2015-11-29)"
                /></a>
              </div>
              
              <div class="va-view-wrap">
                <a class="view-article" href="match-single.html">view</a>
              </div>
            </div>
            <div class="match-list-item">
              <div class="date">
                <span>20</span>
                Nov
              </div>
              <div class="logo">
                <a href="match-single.html">
                  <img
                    src="@/assets/team-ava4.png"
                    class="img-polaroid"
                    alt="King VS china (2015-11-20)"
                    title="King VS china (2015-11-20)"
                /></a>
              </div>
              <div class="team-name">King</div>
              <div class="versus">VS</div>
              <div class="team-name">china</div>
              <div class="logo">
                <a href="match-single.html">
                  <img
                    src="@/assets/team-ava5.png"
                    class="img-polaroid"
                    alt="King VS china (2015-11-20)"
                    title="King VS china (2015-11-20)"
                /></a>
              </div>
              
              <div class="va-view-wrap">
                <a class="view-article" href="match-single.html">view</a>
              </div>
            </div>
            <div class="match-list-item">
              <div class="date">
                <span>14</span>
                Nov
              </div>
              <div class="logo">
                <a href="match-single.html">
                  <img
                    src="@/assets/team-ava.png"
                    class="img-polaroid"
                    alt="England VS Amsterdam (2015-11-14)"
                    title="England VS Amsterdam (2015-11-14)"
                /></a>
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
                /></a>
              </div>
              
              <div class="va-view-wrap">
                <a class="view-article" href="match-single.html">view</a>
              </div>
            </div>
            <div class="match-list-item">
              <div class="date">
                <span>29</span>
                Nov
              </div>
              <div class="logo">
                <a href="match-single.html">
                  <img
                    src="@/assets/team-ava2.png"
                    class="img-polaroid"
                    alt="Cambridgehire VS china (2015-11-29)"
                    title="Cambridgehire VS china (2015-11-29)"
                /></a>
              </div>
              <div class="team-name">Cambridgehire</div>
              <div class="versus">VS</div>
              <div class="team-name">china</div>
              <div class="logo">
                <a href="match-single.html">
                  <img
                    src="@/assets/team-ava3.png"
                    class="img-polaroid"
                    alt="Cambridgehire VS china (2015-11-29)"
                    title="Cambridgehire VS china (2015-11-29)"
                /></a>
              </div>
              
              <div class="va-view-wrap">
                <a class="view-article" href="match-single.html">view</a>
              </div>
            </div>
            <div class="match-list-item">
              <div class="date">
                <span>20</span>
                Nov
              </div>
              <div class="logo">
                <a href="match-single.html">
                  <img
                    src="@/assets/team-ava4.png"
                    class="img-polaroid"
                    alt="King VS china (2015-11-20)"
                    title="King VS china (2015-11-20)"
                /></a>
              </div>
              <div class="team-name">King</div>
              <div class="versus">VS</div>
              <div class="team-name">china</div>
              <div class="logo">
                <a href="match-single.html">
                  <img
                    src="@/assets/team-ava5.png"
                    class="img-polaroid"
                    alt="King VS china (2015-11-20)"
                    title="King VS china (2015-11-20)"
                /></a>
              </div>
              
              <div class="va-view-wrap">
                <a class="view-article" href="match-single.html">view</a>
              </div>
            </div>
            <div class="match-list-item">
              <div class="date">
                <span>14</span>
                Nov
              </div>
              <div class="logo">
                <a href="match-single.html">
                  <img
                    src="@/assets/team-ava.png"
                    class="img-polaroid"
                    alt="England VS Amsterdam (2015-11-14)"
                    title="England VS Amsterdam (2015-11-14)"
                /></a>
              </div>
              <div class="team-name">England</div>
              <div class="versus">VS</div>
              <div class="team-name">Amsterdam</div>
              <div class="logo">
                <a href="match-single.html">
                  <img
                    src="@/assets/team-ava2.png"
                    class="img-polaroid"
                    alt="England VS Amsterdam (2015-11-14)"
                    title="England VS Amsterdam (2015-11-14)"
                /></a>
              </div>
              
              <div class="va-view-wrap">
                <a class="view-article" href="match-single.html">view</a>
              </div>
            </div>
            <div class="match-list-item">
              <div class="date">
                <span>29</span>
                Nov
              </div>
              <div class="logo">
                <a href="match-single.html">
                  <img
                    src="@/assets/team-ava3.png"
                    class="img-polaroid"
                    alt="Cambridgehire VS china (2015-11-29)"
                    title="Cambridgehire VS china (2015-11-29)"
                /></a>
              </div>
              <div class="team-name">Cambridgehire</div>
              <div class="versus">VS</div>
              <div class="team-name">china</div>
              <div class="logo">
                <a href="match-single.html">
                  <img
                    src="@/assets/team-ava4.png"
                    class="img-polaroid"
                    alt="Cambridgehire VS china (2015-11-29)"
                    title="Cambridgehire VS china (2015-11-29)"
                /></a>
              </div>
              
              <div class="va-view-wrap">
                <a class="view-article" href="match-single.html">view</a>
              </div>
            </div>
            <div class="match-list-item">
              <div class="date">
                <span>20</span>
                Nov
              </div>
              <div class="logo">
                <a href="match-single.html">
                  <img
                    src="@/assets/team-ava5.png"
                    class="img-polaroid"
                    alt="King VS china (2015-11-20) - Copy"
                    title="King VS china (2015-11-20) - Copy"
                /></a>
              </div>
              <div class="team-name">King</div>
              <div class="versus">VS</div>
              <div class="team-name">china</div>
              <div class="logo">
                <a href="match-single.html">
                  <img
                    src="@/assets/team-ava.png"
                    class="img-polaroid"
                    alt="King VS china (2015-11-20) - Copy"
                    title="King VS china (2015-11-20) - Copy"
                /></a>
              </div>
              
              <div class="va-view-wrap">
                <a class="view-article" href="match-single.html">view</a>
              </div>
            </div>
            <div class="match-list-item">
              <div class="date">
                <span>12</span>
                Nov
              </div>
              <div class="logo">
                <a href="match-single.html">
                  <img
                    src="@/assets/team-ava1.png"
                    class="img-polaroid"
                    alt="Italy VS Chalenger (2015-11-12)"
                    title="Italy VS Chalenger (2015-11-12)"
                /></a>
              </div>
              <div class="team-name">Italy</div>
              <div class="versus">VS</div>
              <div class="team-name">Chalenger</div>
              <div class="logo">
                <a href="match-single.html">
                  <img
                    src="@/assets/team-ava2.png"
                    class="img-polaroid"
                    alt="Italy VS Chalenger (2015-11-12)"
                    title="Italy VS Chalenger (2015-11-12)"
                /></a>
              </div>
              
              <div class="va-view-wrap">
                <a class="view-article" href="match-single.html">view</a>
              </div>
            </div>
            <div class="match-list-item">
              <div class="date">
                <span>12</span>
                Nov
              </div>
              <div class="logo">
                <a href="match-single.html">
                  <img
                    src="@/assets/team-ava3.png"
                    class="img-polaroid"
                    alt="Croatia VS Roman (2015-11-12)"
                    title="Croatia VS Roman (2015-11-12)"
                /></a>
              </div>
              <div class="team-name">Croatia</div>
              <div class="versus">VS</div>
              <div class="team-name">Roman</div>
              <div class="logo">
                <a href="match-single.html">
                  <img
                    src="@/assets/team-ava4.png"
                    class="img-polaroid"
                    alt="Croatia VS Roman (2015-11-12)"
                    title="Croatia VS Roman (2015-11-12)"
                /></a>
              </div>
              
              <div class="va-view-wrap">
                <a class="view-article" href="match-single.html">view</a>
              </div>
            </div>
            <div class="match-list-item">
              <div class="date">
                <span>12</span>
                Nov
              </div>
              <div class="logo">
                <a href="match-single.html">
                  <img
                    src="@/assets/team-ava5.png"
                    class="img-polaroid"
                    alt="Uventus VS Chalenger (2015-11-12)"
                    title="Uventus VS Chalenger (2015-11-12)"
                /></a>
              </div>
              <div class="team-name">Uventus</div>
              <div class="versus">VS</div>
              <div class="team-name">Chalenger</div>
              <div class="logo">
                <a href="match-single.html">
                  <img
                    src="@/assets/team-ava.png"
                    class="img-polaroid"
                    alt="Uventus VS Chalenger (2015-11-12)"
                    title="Uventus VS Chalenger (2015-11-12)"
                /></a>
              </div>              
              <div class="va-view-wrap">
                <a class="view-article" href="match-single.html">view</a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <Pagination />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Loading from "@/components/Loading.vue";
import Carousel from "@/components/Carousel.vue";
import ImgAnimation from "@/components/ImgAnimation.vue";
import Tabelsport from "@/components/Tabelsport.vue";
import Menusport from "@/components/Menusport.vue";
import Pagination from "@/components/Pagination.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "ScoreView",
  data() {
    return {
      isLoading: true,
      isHeader: false,
    };
  },
  components: {
    Loading,
    Header,
    Carousel,
    ImgAnimation,
    Tabelsport,
    Menusport,
    Pagination,
    Footer,
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
      this.isHeader = true;
    }, 500);
  },
};
</script>

<style scoped>
.mtc {
  margin-top: 150px;
}

.bg-1 {
  width: 100%;
  height: 450px;
  background-image: url("@/assets/head-bg.jpg");
  position: absolute;
  top: 0;
  right: 0;
}
</style>
