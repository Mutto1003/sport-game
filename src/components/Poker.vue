<template>
  <div class="poker container w-80">
    <div class="row justify-content-center">
      <div class="col d-flex justify-content-center">
        <div class="avatar">
          <a>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/751678/skytsunami.png"
              alt="Skytsunami"
            />
          </a>
        </div>
      </div>
      <div class="col d-flex justify-content-center">
        <div class="avatar">
          <a>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/751678/skytsunami.png"
              alt="Skytsunami"
            />
          </a>
        </div>
      </div>
      <div class="col d-flex justify-content-center">
        <div class="avatar">
          <a>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/751678/skytsunami.png"
              alt="Skytsunami"
            />
          </a>
        </div>
      </div>
      <div class="col d-flex justify-content-center">
        <div class="avatar">
          <a>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/751678/skytsunami.png"
              alt="Skytsunami"
            />
          </a>
        </div>
      </div>
      <div class="col d-flex justify-content-center">
        <div class="avatar">
          <a>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/751678/skytsunami.png"
              alt="Skytsunami"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Poker",
};
</script>

<style scoped>
@keyframes float {
  0% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
  50% {
    box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
    transform: translatey(-20px);
  }
  100% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
}
/* .container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
} */
.avatar {
  width: 150px;
  height: 150px;
  box-sizing: border-box;
  border: 5px white solid;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
  transform: translatey(0px);
  /* animation: float 6s ease-in-out infinite; */
}
.avatar img {
  width: 100%;
  height: auto;
}

.avatar:hover {
  width: 150px;
  height: 150px;
  box-sizing: border-box;
  border: 5px white solid;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
  transform: translatey(0px);
  animation: float 1s ease-in-out infinite;
}
@import "@/css/theme.css";
</style>
