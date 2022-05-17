<template>
  <div>
    <Loading v-if="isLoading"></Loading>
    <Header v-if="isHeader" class="fixed-top" />
    <ImgAnimation />
    <div class="row mt-5">
      <div class="col-2">
        <Menusport/>
      </div>
      <div class="col-10">
        <Tabelsport />
      </div>
    </div>
    <Pagination/>
    <Footer/>
  </div>
</template>

<script>
import ImgAnimation from "@/components/ImgAnimation.vue";
import Tabelsport from "@/components/Tabelsport.vue";
import Menusport from "@/components/Menusport.vue"; 
import Pagination from "@/components/Pagination.vue"; 
import Loading from "@/components/Loading.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name : "SportView",
  data() {
    return {
      isLoading: true,
      isHeader: false,
      isContent: false,
    };
  },
  components: {
    ImgAnimation,
    Tabelsport,
    Menusport,
    Pagination,
    Loading,
     Header,
     Footer,
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
      this.isHeader = true;      
    }, 1500);
    // this.isContent = true;
  },
};
</script>

<style></style>
