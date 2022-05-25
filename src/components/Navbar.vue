<template>
  <div class="container w-80">
    <nav class="navbar navbar-expand-md bg-green rd">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item active text-center">
          <a class="nav-link mx-5 text-white" href="#">หน้าแรก</a>
        </li>
        <li class="nav-item active text-center">
          <a class="nav-link mx-5 text-white" href="#">ข่าวสาร</a>
        </li>
        <li class="nav-item active text-center">
          <a class="nav-link mx-5 text-white" href="#">ข้อมูลเกม</a>
        </li>
        <li class="nav-item active text-center">
          <a class="nav-link mx-5 text-white" href="#">เติมเงิน</a>
        </li>
        <li class="nav-item active text-center">
          <a class="nav-link mx-5 text-white" href="#">แฟนเพจ</a>
        </li>
        <li class="nav-item active text-center">
          <a
            class="nav-link mx-5 text-white"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
            >เข้าสู่ระบบ</a
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
.bg-green {
  background-color: #f2bd3a;
  box-shadow: 2.5px 4.33px 15px 0px rgba(80, 0, 254, 0.4);
}

.container-fluid.my-container-fluid {
  justify-content: center;
}

.rd {
  border: 2px solid red;
  padding: 10px;
  border-radius: 40px;
}
@import "@/css/theme.css";
</style>
