<template>
  <div class="home">
    <div class="row">
      <div class="col-4">
        <CardLogin />
      </div>
      <div class="col-8">
        <div class="card ht">
          <div class="card-body b">สิ่งที่น่าสนใจ</div>
        </div>
      </div>
    </div>
    <!-- <ImgCard /> -->
    <div class="mt"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardLogin from "@/components/CardLogin.vue";
import ImgCard from "@/components/ImgCard.vue";

export default {
  name: "HomeView",
  components: {
    CardLogin,
    ImgCard,
  },
};
</script>
<style scoped>
.mt {
  margin-top: 1000px;
}
</style>
