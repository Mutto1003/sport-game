<template>
  <div class="Carousel box-slider">
    <div
      id="carouselExampleFade"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/banerSPBook-04.jpeg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="@/assets/banerSPBook-03.jpeg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="@/assets/banerSPBook.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
};
</script>

<style scoped>
.rd {
  border-radius: 10px;
}
.w-100 {
 border-radius: 10px;
  
  /* padding: 3px 3px 3px 3px; */
}

.box-slider {
  margin: 20px 50px;
  /* padding: 5px; */
  /* background: #fff; */
  border-radius: 10px;
  box-shadow: 0px 5px 10px 0px #018eef;
  border: 2px solid #018eef;
  position: relative;
  z-index: 1;
}
</style>
