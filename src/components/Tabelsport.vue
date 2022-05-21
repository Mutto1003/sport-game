<template>
  <div class="">    
    <ul class="responsive-table">
      <li class="table-header">
        <div class="col col-1 font-t">เวลา</div>
        <div class="col col-4 font-t">คู่แข่งขัน</div>
        <div class="col col-1 font-t">FT. HDP</div>
        <div class="col col-1 font-t">FT. O/U</div>
        <div class="col col-1 font-t">FT. 1X2</div>
        <div class="col col-1 font-t">1H. HDP</div>
        <div class="col col-1 font-t">1H. O/U</div>
        <div class="col col-1 font-t">1H. 1X2</div>
      </li>
      <li class="table-row" v-for="(item, index) in mCourses" :key="index">
        <div class="col col-1" data-label="Job Id">{{item.time}}</div>
        <div class="col col-4" data-label="Job Id">{{item.them}}</div>
        <div class="col col-1" data-label="Job Id">{{item.price1}}</div>
        <div class="col col-1" data-label="Job Id">{{item.price2}}</div>
        <div class="col col-1" data-label="Job Id">{{item.price3}}</div>
        <div class="col col-1" data-label="Job Id">{{item.price4}}</div>
        <div class="col col-1" data-label="Job Id">{{item.price5}}</div>
        <div class="col col-1" data-label="Job Id">{{item.price6}}</div>
      </li>      
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mCourses: [
      { time: "20.10", them: "Liverpool VS Man city", price1:"-0.92", price2:"2" ,price3:"3", price4:"4" ,price5:"5", price6:"6" },
      { time: "20.10", them: "Liverpool VS Man city", price1:"-0.92", price2:"2" ,price3:"3", price4:"4" ,price5:"5", price6:"6" },
      { time: "20.10", them: "Liverpool VS Man city", price1:"-0.92", price2:"2" ,price3:"3", price4:"4" ,price5:"5", price6:"6" },
      { time: "20.10", them: "Liverpool VS Man city", price1:"-0.92", price2:"2" ,price3:"3", price4:"4" ,price5:"5", price6:"6" },
      { time: "20.10", them: "Liverpool VS Man city", price1:"-0.92", price2:"2" ,price3:"3", price4:"4" ,price5:"5", price6:"6" },
      { time: "20.10", them: "Liverpool VS Man city", price1:"-0.92", price2:"2" ,price3:"3", price4:"4" ,price5:"5", price6:"6" },
      { time: "20.10", them: "Liverpool VS Man city", price1:"-0.92", price2:"2" ,price3:"3", price4:"4" ,price5:"5", price6:"6" },
      { time: "20.10", them: "Liverpool VS Man city", price1:"-0.92", price2:"2" ,price3:"3", price4:"4" ,price5:"5", price6:"6" },
      { time: "20.10", them: "Liverpool VS Man city", price1:"-0.92", price2:"2" ,price3:"3", price4:"4" ,price5:"5", price6:"6" },
      { time: "20.10", them: "Liverpool VS Man city", price1:"-0.92", price2:"2" ,price3:"3", price4:"4" ,price5:"5", price6:"6" },
      { time: "20.10", them: "Liverpool VS Man city", price1:"-0.92", price2:"2" ,price3:"3", price4:"4" ,price5:"5", price6:"6" },
      { time: "20.10", them: "Liverpool VS Man city", price1:"-0.92", price2:"2" ,price3:"3", price4:"4" ,price5:"5", price6:"6" },      
    ]
    }
  },
};
</script>

<style scoped>
.font-t {
  font-family: "IBM Plex Sans Thai", sans-serif;
  -webkit-text-stroke-width: 1px;
  /* -webkit-text-stroke-color: black; */
  /* text-align: center; */
  /* border: #000; */
  color: #ffffff;
}
body {
	 font-family: 'lato', sans-serif;
}
 .container {
	 max-width: 1000px;
	 margin-left: auto;
	 margin-right: auto;
	 padding-left: 10px;
	 padding-right: 10px;
}
 h2 {
	 font-size: 26px;
	 margin: 20px 0;
	 text-align: center;
}
 h2 small {
	 font-size: 0.5em;
}
 .responsive-table li {
	 border-radius: 3px;
	 padding: 15px 25px;
	 display: flex;
	 justify-content: space-between;
	 margin-bottom: 20px;
}
 .responsive-table .table-header {
	 background-color: #4a4a48;
	 font-size: 14px;
	 text-transform: uppercase;
	 letter-spacing: 0.03em;
}
 .responsive-table .table-row {
	 background-color: #fff;
	 box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
}
 .responsive-table .col-1 {
	 flex-basis: 10%;
}
 .responsive-table .col-2 {
	 flex-basis: 40%;
}
 .responsive-table .col-3 {
	 flex-basis: 25%;
}
 .responsive-table .col-4 {
	 flex-basis: 25%;
}
 @media all and (max-width: 767px) {
	 .responsive-table .table-header {
		 display: none;
	}
	 .responsive-table li {
		 display: block;
	}
	 .responsive-table .col {
		 flex-basis: 100%;
	}
	 .responsive-table .col {
		 display: flex;
		 padding: 10px 0;
	}
	 .responsive-table .col:before {
		 color: #6c7a89;
		 padding-right: 10px;
		 content: attr(data-label);
		 flex-basis: 50%;
		 text-align: right;
	}
}
 
</style>
