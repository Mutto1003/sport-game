<template>
  <div class="NavigationBar">
    <section class="py-7 mt-3">
  <div class="container">
    <div class="row justify-space-between text-center py-2">
      <div class="col-12 mx-auto">
        
        <button type="button" class="btn bg-gradient-primary w-auto me-2">Primary</button>
        
        <button type="button" class="btn bg-gradient-secondary w-auto me-2">Secondary</button>
        
        <button type="button" class="btn bg-gradient-info w-auto me-2">Info</button>
        
        <button type="button" class="btn bg-gradient-success w-auto me-2">Success</button>
        
        <button type="button" class="btn bg-gradient-warning w-auto me-2">Warning</button>
        
        <button type="button" class="btn bg-gradient-danger w-auto me-2">Danger</button>
        
        <button type="button" class="btn bg-gradient-light w-auto me-2">Light</button>
        
        <button type="button" class="btn bg-gradient-dark w-auto me-2">Dark</button>
        
        <button type="button" class="btn bg-gradient-white w-auto me-2">White</button>
        
      </div>
    </div>
  </div>
</section>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>

<style scoped>
header{
    width: 100%;
    height: 100vh;
    background: url();
    mask-repeat: 50% 50%;
    background-size: cover;
    background-attachment: fixed;
}

.content{
    width: 100%;
    margin: 4em auto;
    font-size: 20px;
    line-height: 30px;
    text-align: justify;
}

.logo{
    position: fixed;
    float: left;
    margin: 16px 36px;
    color: rgb(255, 255, 255);
    font-weight: bolder;
    font-size: 24px;
}
nav{
    position: fixed;
    width: 100%;
}

nav ul{
    list-style: none;
    background: rgba(0, 0, 0, 0);
    overflow: hidden;
    color: white;
    padding: 0;
    text-align: center;
    margin: 0;
    transition: 1s;
}

nav.black ul{
    background: #000;
}

nav ul li{
    display: inline-block;
    padding: 20px;
}

nav ul li a{
    text-decoration: none;
    color: white;
    font-size: 18px;
    font-family: sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
}

</style>
