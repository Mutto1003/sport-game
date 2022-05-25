<template>
  <div class="report">
    <Loading v-if="isLoading"></Loading>
    <HeaderSuccess v-if="isHeader" class="fixed-top" />   
    <!-- <Carousel class="mtc" /> -->
    <div class="container mtc">
      <div class="row mt-5">
        <div class="col-12">
          <Tabelsport />
        </div>
      </div>
    </div>
    <Pagination />
    <Footer />
  </div>
</template>

<script>
import HeaderSuccess from "@/components/HeaderSuccess.vue";
import Loading from "@/components/Loading.vue";
import Carousel from "@/components/Carousel.vue";
import ImgAnimation from "@/components/ImgAnimation.vue";
import Tabelsport from "@/components/Tablesport.vue";
import Menusport from "@/components/Menusport.vue";
import Pagination from "@/components/Pagination.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "ReportView",
  data() {
    return {
      isLoading: true,
      isHeader: false,
    };
  },
  components: {
    Loading,
    HeaderSuccess,
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
