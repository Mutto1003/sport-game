<template>
  <div>
    <button
      @click="$router.push('/sport')"
      id="app"
      type="button"
      class="btn btn-login"
    >
      เข้าสู่ระบบ2222222
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
