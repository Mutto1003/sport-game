<template>
  <div class="container">
    <div class="image-stack">
      <div class="image-stack__item image-stack__item--bottom">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>
      <div class="image-stack__item image-stack__item--top">
        <img src="@/assets/Mosala.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
p {
  font-size: 20px;
  font-family: sans-serif;
  color: #6439a9;
}
.container {
  padding: 100px 30px;
  width: 100%;
  margin: 0 auto;
  max-width: 800px;
}
.image-stack {
  position: relative;
  width: 100%;
}
.image-stack__item--bottom {
  position: absolute;
  margin-top: 80px;
  left: 50;
  right: 0;
  top: 0;
  width: 80%;
  z-index: -1;
}
.image-stack__item--top {
  padding-top: 0px;
  padding-right: 20%;
  width: 80%;
}
img {
  width: 100%;
  display: block;
}
</style>
