<template>
  <div>
    <div class="card">
      <div class="card-body">
         <h4 class="font-t text-white">Login</h4>
        <form>
          <div class="mb-3 mt-5">
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

          <div class="d-flex justify-content-center font-t mb-5">
            <button
              @click="$router.push('/sport')"
              id="app"
              type="button"
              class="btn btn-login"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              เข้าสู่ระบบ
            </button>
           <button              
              id="app"
              type="button"
              class="btn btn-login ms-2"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              สมัครสมาชิก
            </button>
          </div>
        </form>
      </div>
    </div>
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

.card {    
    background-color: #0029b9; 
    box-shadow: 0px 5px 10px 0px #018eef;
    border-radius: 25px;       
}

.mt{
  margin-top: 125px;
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
  border-radius: 10px;
  color: #000;
  background: #c09100;
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
