<template>
  <div class="app bg-1">
    <Header class="fixed-top mt-3" />
    <br /><br /><br /><br /><br /><br />    
    <Carousel />    
    <Content />
    <Footer class="mt-5" />
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header d-flex justify-content-center">
            <h5 class="modal-title text-center" id="app">เข้าสู่ระบบ</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3 mt-3">
                <input
                  type="text"
                  class="form-control rounded-input"
                  placeholder="ชื่อผู้ใช้"
                  id="app"
                />
              </div>
              <div class="mb-5 mt-3">
                <input
                  type="text"
                  class="form-control rounded-input"
                  placeholder="รหัสผ่าน"
                  id="app"
                />
              </div>

              <div class="d-flex justify-content-center">
                <button id="app" type="button" class="btn btn-login">
                  เข้าสู่ระบบ
                </button>
                <!-- <button type="button" class="btn" data-bs-dismiss="modal">
                  ปิด
                </button> -->
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import Carousel from "@/components/Carousel.vue";
import Content from "@/components/Content.vue";
export default {
  name: "App",
  components: {
    // Navbar,
    Footer,   
    Carousel,
    Content,
    Header
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.bg-1 {
  width: 100%;
  height: 700px;
  background-image: url("@/assets/bg-3.jpg");
}

.rounded-input {
  padding: 10px;
  border-radius: 25px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
}

.btn-login {
  padding: 10px 20px;
  border-radius: 50px;
  color: #000;
  background: #e0a500;
  background: -moz-linear-gradient(
    0deg,
    rgba(224, 165, 0, 1) 0,
    rgba(255, 228, 15, 1) 100%
  );
  background: -webkit-linear-gradient(
    0deg,
    rgba(224, 165, 0, 1) 0,
    rgba(255, 228, 15, 1) 100%
  );
  background: linear-gradient(
    0deg,
    rgba(224, 165, 0, 1) 0,
    rgba(255, 228, 15, 1) 100%
  );
  font-size: 18px;
  font-weight: 600;
  border: 0;
}

</style>
