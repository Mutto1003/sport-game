<template>
  <div class="container w-80">
    <nav class="navbar navbar-expand-md bg-green rd">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item active text-center">
          <a class="nav-link mx-5 font-t" href="#">หน้าหลัก</a>
        </li>        
        <li class="nav-item active text-center">
          <a class="nav-link mx-5 font-t" href="#">วิธีการเล่น</a>
        </li>
        <li class="nav-item active text-center">
          <a class="nav-link mx-5 font-t" href="#">ติดต่อเรา</a>
        </li>
        <li class="nav-item active text-center">
          <a class="nav-link mx-5 font-t" href="#">ทางเข้าTexas</a>
        </li>
        <li class="nav-item active text-center">
          <a class="nav-link mx-5 font-t" href="#">ทางเข้า Casino</a>
        </li>                       
        <li class="nav-item active text-center">
          <a
            class="nav-link mx-5 font-t"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
            >โปรโมชั่น</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.font-t {
  font-family: "IBM Plex Sans Thai", sans-serif;
  -webkit-text-stroke-width: 1px;
  /* -webkit-text-stroke-color: black; */
  /* text-align: center; */
  border: #000;
  color: #018eef;
}
.bg-green {
  background-color: #ffffff;
  box-shadow: 2.5px 4.33px 15px 0px #018eef;
}

.container-fluid.my-container-fluid {
  justify-content: center;
}

.rd {
  /* border: 2px solid #018eef; */
  border-right: 5px solid #018eef;
  border-left: 5px solid #018eef;
  padding: 10px;
  border-radius: 40px;
}
</style>
