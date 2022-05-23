<template>
  <div data-bs-spy="scroll">
    <div class="col-12">
      <div class="box-sidebar-left">
        <div class="bsl-menu">
          <a @click="add('Tsport')" class="bsl-link popular"
            ><div class="bsl-icon">
              <!-- <img src="/assets/popular.fca78488.svg" class="bsli" /> -->
            </div>
            <div class="bsl-title font-t">ราคาต่อรอง & สูงต่ำ</div></a
          ><a
            aria-current="page"
            href=""
            class="router-link-active router-link-exact-active bsl-link new"
            ><div class="bsl-icon">
              <!-- <img src="/assets/new.8e600219.svg" class="bsli" /> -->
            </div>
            <div class="bsl-title font-t">คี่/คู่ & ประตูรวม</div></a
          ><a @click="add('Tcorner')" class="bsl-link corner"
            ><div class="bsl-icon">
              <!-- <img src="/assets/corner.dc1d9994.svg" class="bsli" /> -->
            </div>
            <div class="bsl-title font-t">1X2 & สองโอกาส</div></a
          ><a @click="add('Tscore')" class="bsl-link casino"
            ><div class="bsl-icon">
              <!-- <img src="/assets/casino.6b269c4e.svg" class="bsli" /> -->
            </div>
            <div class="bsl-title font-t">ครึ่งเวลา / เต็มเวลา</div></a
          ><a href="" class="bsl-link slot"
            ><div class="bsl-icon">
              <!-- <img src="/assets/slot.849d8d0f.svg" class="bsli" /> -->
            </div>
            <div class="bsl-title font-t">ทายผลสกอร์</div></a
          ><a href="" class="bsl-link fishing"
            ><div class="bsl-icon">
              <!-- <img src="/assets/fishing.811d1996.svg" class="bsli" /> -->
            </div>
            <div class="bsl-title font-t">ทายผลผู้ชนะ</div></a
          >
        </div>

        <!-- Button trigger modal -->
        <div>
          <a
            href=""
            class="bsl-link reportnoti"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            ><div class="bsl-icon">
              <!-- <img src="/assets/fishing.811d1996.svg" class="bsli" /> -->
            </div>
            <div class="bsl-title font-t">
              รายการแทง <span class="notification-count texta mx-3">6</span>
            </div></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menusport",
  methods: {
    add(itemMenu){
      // this.$store.dispatch("addAction",itemMenu)
      this.$store.state.component = itemMenu;
    }
  }
};
</script>

<style scoped>
.font-t {
  font-family: "IBM Plex Sans Thai", sans-serif;
  /* -webkit-text-stroke-width: 1px; */
  /* -webkit-text-stroke-color: black; */
  /* text-align: center; */
  /* border: #000; */
  /* color: #ffffff; */
}
.box-sidebar-left {
  position: sticky;
  top: 100px;
}

.bsl-link.popular.router-link-active,
.bsl-link.popular.router-link-active:focus,
.bsl-link.popular.router-link-active:hover {
  background-color: #fa3d63cc;
  box-shadow: 0 0 10px #fa3d6399;
  color: #fff;
}
.bsl-link.popular {
  color: #fa3d63cc;
  text-decoration: none;
  font-weight: 600;
}
.bsl-link.popular:hover {
  box-shadow: 0 0 10px #fa3d63cc;;
  /* background-color: #fa3d63cc; */
  transition: box-shadow 0.5s;
  text-decoration: none;
}

.bsl-link.new {
  color: #ffc107;
  text-decoration: none;
  font-weight: 600;
}

.bsl-link.new:hover {
  box-shadow: 0 0 10px #ffc107;
  /* background-color: #fa3d63cc; */
  transition: box-shadow 0.5s;
  text-decoration: none;
}

.bsl-link.corner {
  color: #007dcf;
  text-decoration: none;
  font-weight: 600;
}

.bsl-link.corner:hover {
  box-shadow: 0 0 10px #007dcf;
  text-decoration: none;
  transition: box-shadow 0.5s;
}

.bsl-link.casino {
  color: #44bfd7;
  text-decoration: none;
  font-weight: 600;
}

.bsl-link.casino:hover {
  box-shadow: 0 0 10px #44bfd7;
  text-decoration: none;
  transition: box-shadow 0.5s;
}

.bsl-link.slot {
  color: #2e8be6;
  text-decoration: none;
  font-weight: 600;
}

.bsl-link.slot:hover {
  box-shadow: 0 0 10px #2e8be6;
  text-decoration: none;
  transition: box-shadow 0.5s;
}

.bsl-link.fishing {
  color: #6e61b5;
  text-decoration: none;
  font-weight: 600;
}

.bsl-link.fishing:hover {
  box-shadow: 0 0 10px #6e61b5;
  text-decoration: none;
  transition: box-shadow 0.5s;
}

.bsl-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 15px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 10px #0003;
  color: #333;
  margin-bottom: 25px;
}
.bsl-icon {
  width: 20%;
  margin-right: 15px;
}
.bsl-title {
  text-align: left;
}

.bsl-link.reportnoti {
  background: linear-gradient(to bottom right, #b0db7d 40%, #99dbb4 100%);
  box-shadow: 0 0 10px rgba(203, 205, 211, 10);
  text-decoration: none;
  color: #fff;
  font-weight: 600;
}

.texta {
  position: absolute;
  z-index: 2;
  animation: bounce 1s ease-in infinite;
}

/* Noti */
@keyframes bounce {
  50% {
    transform: translateY(-5px);
  }
}
@keyframes scale {
  50% {
    transform: scale(1);
  }
}
@keyframes roll {
  0% {
    transform: rotate(0deg);
    left: 25%;
  }
  50% {
    left: 60%;
    transform: rotate(168deg);
  }
  100% {
    transform: rotate(0deg);
    left: 25%;
  }
}
@keyframes move {
  0% {
    left: 25%;
  }
  50% {
    left: 60%;
  }
  100% {
    left: 25%;
  }
}
</style>
