<template>
  <div>
    <Loading v-if="isLoading"></Loading>
    <div class=""> 
      <Content class="mt-5" />     
    </div>    
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";
import Content from "@/components/Content.vue";
export default {
  name: "App",  
  components: {    
    Content,    
    Loading,
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;         
    }, 1500);
    // this.isContent = true;
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai&display=swap");
#app {
  font-family: "IBM Plex Sans Thai", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

</style>
