<template>
  <div>
    <div class="pagination-wrapper">
      <div class="pagination">
        <a class="prev page-numbers" href="javascript:;">prev</a>
        <span aria-current="page" class="page-numbers current">1</span>
        <a class="page-numbers" href="javascript:;">2</a>
        <a class="page-numbers" href="javascript:;">3</a>
        <a class="page-numbers" href="javascript:;">4</a>
        <a class="page-numbers" href="javascript:;">5</a>
        <a class="page-numbers" href="javascript:;">6</a>
        <a class="page-numbers" href="javascript:;">7</a>
        <a class="page-numbers" href="javascript:;">8</a>
        <a class="page-numbers" href="javascript:;">9</a>
        <a class="page-numbers" href="javascript:;">10</a>
        <a class="next page-numbers" href="javascript:;">next</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
htm,
body {
  font-family: sans-serif;
}
a {
  text-decoration: none;
}
.pagination-wrapper {
  text-align: center;
  margin: 25px 0;
}
.pagination {
  display: inline-block;
  height: 30px;
  margin-top: 25px;
  padding: 0 25px;
  border-radius: 35px;
  background-color: #eee;
}
@media only screen and (max-width: 1199px) {
  .pagination {
    height: 50px;
    margin-top: 25px;
    padding: 0 10px;
    border-radius: 25px;
  }
}
.page-numbers {
  display: block;
  padding: 0 25px;
  float: left;
  transition: 40ms ease;
  color: #595959;
  font-size: 15px;
  letter-spacing: 0.1em;
  line-height: 30px;
}
.page-numbers:hover,
.page-numbers.current {
  background-color: #4a4a48;
  color: #fff;
}
.page-numbers.prev:hover,
.page-numbers.next:hover {
  background-color: transparent;
  color: #4a4a48;
}
@media only screen and (max-width: 1199px) {
  .page-numbers {
    padding: 0 15px;
    font-size: 16px;
    line-height: 50px;
  }
}
@media only screen and (min-width: 120px) and (max-width: 1024px) {
  .page-numbers {
    padding: 0 14px;
    display: none;
  }
  .page-numbers:nth-of-type(2) {
    position: relative;
    padding-right: 50px;
  }
  .page-numbers:nth-of-type(2)::after {
    content: "...";
    position: absolute;
    font-size: 25px;
    top: 0;
    left: 45px;
  }
  .page-numbers:nth-child(-n + 3),
  .page-numbers:nth-last-child(-n + 3) {
    display: block;
  }
  .page-numbers:nth-last-child(-n + 4) {
    padding-right: 14px;
  }
  .page-numbers:nth-last-child(-n + 4)::after {
    content: none;
  }
}
@import "@/css/theme.css";
</style>
