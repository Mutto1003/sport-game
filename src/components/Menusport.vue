<template>
  <div class="col-12">
    <div class="box-sidebar-left">
      <div class="bsl-menu">
        <a href="" class="bsl-link popular"
          ><div class="bsl-icon">
            <img src="/assets/popular.fca78488.svg" class="bsli" />
          </div>
          <div class="bsl-title font-t">เกมยอดนิยม</div></a
        ><a
          aria-current="page"
          href=""
          class="router-link-active router-link-exact-active bsl-link new"
          ><div class="bsl-icon">
            <img src="/assets/new.8e600219.svg" class="bsli" />
          </div>
          <div class="bsl-title font-t">เกมมาใหม่</div></a
        ><a href="" class="bsl-link provider"
          ><div class="bsl-icon">
            <img src="/assets/provider.dc1d9994.svg" class="bsli" />
          </div>
          <div class="bsl-title font-t">ค่ายเกมทั้งหมด</div></a
        ><a href="" class="bsl-link casino"
          ><div class="bsl-icon">
            <img src="/assets/casino.6b269c4e.svg" class="bsli" />
          </div>
          <div class="bsl-title font-t">คาสิโน</div></a
        ><a href="" class="bsl-link slot"
          ><div class="bsl-icon">
            <img src="/assets/slot.849d8d0f.svg" class="bsli" />
          </div>
          <div class="bsl-title font-t">สล็อต</div></a
        ><a href="" class="bsl-link fishing"
          ><div class="bsl-icon">
            <img src="/assets/fishing.811d1996.svg" class="bsli" />
          </div>
          <div class="bsl-title font-t">ตกปลา</div></a
        >
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

.bsl-link.popular.router-link-active, .bsl-link.popular.router-link-active:focus, .bsl-link.popular.router-link-active:hover {
    background-color: #fa3d63cc;
    box-shadow: 0 0 10px #fa3d6399;
    color: #fff;
}
.bsl-link.popular {    
    color: #fa3d63cc;
    font-weight: 600;
}

.bsl-link.new {
    color: #ffc107;
    font-weight: 600;
}

.bsl-link.new:hover {
  box-shadow: 0 0 10px #ffc107;
  /* background-color: #fa3d63cc; */
  transition: box-shadow 0.5s;
}

.bsl-link.provider {
    color: #007dcf;
    font-weight: 600;
}

.bsl-link.provider:hover {
  box-shadow: 0 0 10px #007dcf;  
  transition: box-shadow 0.5s;
}

.bsl-link.casino {
    color: #44bfd7;
    font-weight: 600;
}

.bsl-link.casino:hover {
  box-shadow: 0 0 10px #44bfd7;  
  transition: box-shadow 0.5s;
}


.bsl-link.slot {
    color: #2e8be6;
    font-weight: 600;
}

.bsl-link.slot:hover {
  box-shadow: 0 0 10px #2e8be6;  
  transition: box-shadow 0.5s;
}


.bsl-link.fishing {
    color: #6e61b5;
    font-weight: 600;
}

.bsl-link.fishing:hover {
  box-shadow: 0 0 10px #6e61b5;  
  transition: box-shadow 0.5s;
}

.bsl-link {
    display: flex;
    align-items: center;
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


</style>
