<template>
  <div class="">    
    <ul class="responsive-table">
      <li class="table-header">
        <div class="col col-1 font-t">เวลา</div>
        <div class="col col-2 font-t">คู่แข่งขัน</div>
        <div class="col col-1 font-t">HH</div>
        <div class="col col-1 font-t">HD</div>
        <div class="col col-1 font-t">HA</div>
        <div class="col col-1 font-t">DH</div>
        <div class="col col-1 font-t">DD</div>
        <div class="col col-1 font-t">DA</div>
        <div class="col col-1 font-t">AH</div>
        <div class="col col-1 font-t">AD</div>
        <div class="col col-1 font-t">AA</div>        
      </li>
      <li class="table-row">
        <div class="col col-1" data-label="Job Id">20.10</div>
        <div class="col col-2" data-label="Job Id">Liverpool VS Man city</div>
        <div class="col col-1" data-label="Job Id">-0.92</div>
        <div class="col col-1" data-label="Job Id">0.89</div>
        <div class="col col-1" data-label="Job Id">1.63</div>
        <div class="col col-1" data-label="Job Id">0.83</div>
        <div class="col col-1" data-label="Job Id">0.98</div>
        <div class="col col-1" data-label="Job Id">2.19</div>
        <div class="col col-1" data-label="Job Id">2.19</div>
        <div class="col col-1" data-label="Job Id">2.19</div>
        <div class="col col-1" data-label="Job Id">2.19</div>
      </li>      
    </ul>
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
	 flex-basis: 5%;
}
 .responsive-table .col-2 {
	 flex-basis: 20%;
}
 .responsive-table .col-3 {
	 flex-basis: 10%;
}
 .responsive-table .col-4 {
	 flex-basis: 10%;
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
