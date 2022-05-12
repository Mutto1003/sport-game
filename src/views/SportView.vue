<template>
  <div>
    <ImgAnimation />
    <div class="row mt-5">
      <div class="col-3">
        <Menusport />
      </div>
      <div class="col-9">
        <Tabelsport />
      </div>
    </div>
  </div>
</template>

<script>
import ImgAnimation from "@/components/ImgAnimation.vue";
import Tabelsport from "@/components/Tabelsport.vue";
// import Menusport from "@/components/CardAnimation.vue";
export default {
  components: {
    ImgAnimation,
    Tabelsport,
    // Menusport,
  },
};
</script>

<style></style>
