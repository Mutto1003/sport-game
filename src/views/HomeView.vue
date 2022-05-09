<template>
  <div class="home">
    <div>
      <div class="row g-2">
        <div class="col-2 mb-3">
          <div class="card box-2">
            <div class="card-body">This is some text within a card body.</div>
          </div>
        </div>
        <div class="col-5">
          <div class="card box-2">
            <div class="card-body">This is some text within a card body.</div>
          </div>
        </div>
        <div class="col-5">
          <div class="card box-2">
            <div class="card-body">This is some text within a card body.</div>
          </div>
        </div>
      </div>

      <div class="row g-2">
        <div class="col-2">
          <button type="button" class="btn button-1 btn-outline-danger mb-3 col-12">วิธีเล่น</button>
          <button type="button" class="btn button-1 btn-outline-danger mb-3 col-12">ฝากเงิน</button>
          <button type="button" class="btn button-1 btn-outline-danger mb-3 col-12">ถอนเงิน</button>
        </div>
        <div class="col-10">
          <div class="card mb-5">
            <div class="card-body box-1">
              This is some text within a card body.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
};
</script>

<style scoped>
.box-1 {
  height: 500px;
  box-shadow: 2.5px 4.33px 15px 0px rgba(80, 0, 254, 0.4);
  /* background-image: url("@/assets/bg-1.jpg"); */
}
.box-2 {
  height: 200px;
  box-shadow: 2.5px 4.33px 15px 0px rgba(80, 0, 254, 0.4);
  /* background-image: url("@/assets/bg-1.jpg"); */
}
.button-1 {
  /* border: 2px solid rgb(251, 251, 251); */
  padding: 10px;
  border-radius: 40px;
  /* background-color: blue; */
}
</style>
