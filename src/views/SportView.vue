<template>
  <div>
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
  </div>
</template>

<script>
import ImgAnimation from "@/components/ImgAnimation.vue";
import Tabelsport from "@/components/Tabelsport.vue";
import Menusport from "@/components/Menusport.vue"; 
import Pagination from "@/components/Pagination.vue"; 

export default {
  components: {
    ImgAnimation,
    Tabelsport,
    Menusport,
    Pagination
  },
};
</script>

<style></style>
