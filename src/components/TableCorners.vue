<template>
  <div class="">
    <table id="example" class="table-fill" cellspacing="0" width="100%">
      <thead>
        <tr>
          <th rowspan="2">เวลา</th>
          <th rowspan="2">คู่แข่งขัน</th>
          <th colspan="3" class="text-center">FT.1X2</th>
          <th colspan="3" class="text-center">ครึ่งแรก 1X2</th>
          <th colspan="3" class="text-center">FT.DC</th>
          <th colspan="3" class="text-center">ครึ่งแรก สองโอกาส</th>
        </tr>
        <tr>
          <th>1</th>
          <th>X</th>
          <th>2</th>
          <th>1</th>
          <th>X</th>
          <th>2</th>
          <th>1X</th>
          <th>12</th>
          <th>2X</th>
          <th>1X</th>
          <th>12</th>
          <th>2X</th>
        </tr>
      </thead>
      <tbody class="table-hover">
        <tr>
          <td>20.10</td>
          <td>Liverpool VS Man city</td>
          <td></td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
        </tr>
        <tr>
          <td>20.10</td>
          <td>Liverpool VS Man city</td>
          <td></td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
        </tr>
        <tr>
          <td>20.10</td>
          <td>Liverpool VS Man city</td>
          <td></td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
        </tr>
        <tr>
          <td>20.10</td>
          <td>Liverpool VS Man city</td>
          <td></td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
        </tr>
        <tr>
          <td>20.10</td>
          <td>Liverpool VS Man city</td>
          <td></td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
        </tr>
        <tr>
          <td>20.10</td>
          <td>Liverpool VS Man city</td>
          <td></td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
        </tr>
        <tr>
          <td>20.10</td>
          <td>Liverpool VS Man city</td>
          <td></td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>0.5</td>
        </tr>
      </tbody>
    </table>
    <button v-on:click="clickMe()">Test</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TableCorners",
  data() {
    return {         
    };
  },
  mounted() {
    // let result = await axios.get(      
    //   "http://49.0.193.193:8021/api/v1/feed/live_score/list"
    // );
    // this.$store.state.live_score = result.data.data;
    // console.log(JSON.stringify(this.live_score));    

    // await axios
    //   .get("http://49.0.193.193:8021/api/v1/feed/live_score/list")
    //   .then((resultTeam) => {
    //     this.live_score = resultTeam.data.data;
    //     console.log(this.live_score);        
    //   });   

    // await axios
    //   .get("http://49.0.193.193:8021/api/v1/feed/live_score/list")
    //   .then((resultTeam) => {
    //     this.fixtureid = resultTeam.data.data.live_scores;
    //     console.log(this.fixtureid);
    //     for (let i = 0; i < this.fixtureid.length; i++) {
    //       console.log(this.fixtureid[i].fixture_id);
    //       // Test = this.fixtureid[i].fixture_id;
    //       // console.log(JSON.stringify(Test));
    //     }
    //   });

    // axios.get(
    //   `http://49.0.193.193:8021/api/v1/feed/live_score/${Test}/market/list`
    // ).then((result) => {
    //   this.mConnerArray = result.data;
    //   console.log(JSON.stringify(this.mConnerArray));
    // });
  },
  methods:{
    clickMe(){
      console.log(JSON.stringify(this.$store.state.live_score))
    }
  }
};
</script>

<style scoped>
@import "@/css/theme.css";
/* .table-striped > tbody > tr:nth-child(2n+1) > td, .table-striped > tbody > tr:nth-child(2n+1) > th {
   background-color: red;
} */

/* table {
  border-collapse: collapse;
  border-radius: 1em;
  overflow: hidden;
} */

@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700,300,100);

body {
  background-color: #3e94ec;
  font-family: "Roboto", helvetica, arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-rendering: optimizeLegibility;
}

div.table-title {
  display: block;
  margin: auto;
  max-width: 600px;
  padding: 5px;
  width: 100%;
}

.table-title h3 {
  color: #fafafa;
  font-size: 30px;
  font-weight: 400;
  font-style: normal;
  font-family: "Roboto", helvetica, arial, sans-serif;
  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
}

/*** Table Styles **/

.table-fill {
  background: white;
  border-radius: 3px;
  border-collapse: collapse;
  height: 320px;
  margin: auto;
  /* max-width: 600px; */
  padding: 5px;
  width: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  animation: float 5s infinite;
}

th {
  color: #d5dde5;
  /* #4a4a48 */
  background: #1b1e24;
  border-bottom: 1px solid #9ea7af;
  border-right: 1px solid #343a45;
  /* font-size: 23px; */
  font-weight: 100;
  padding: 13px;
  text-align: left;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  vertical-align: middle;
}

th:first-child {
  border-top-left-radius: 3px;
}

th:last-child {
  border-top-right-radius: 3px;
  border-right: none;
}

tr {
  border-top: 1px solid #c1c3d1;
  /* border-bottom-: 1px solid #c1c3d1; */
  color: #666b85;
  /* font-size: 16px; */
  font-weight: normal;
  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
}

tr:hover td {
  background: #4e5066;
  color: #ffffff;
  border-top: 1px solid #22262e;
}

tr:first-child {
  border-top: none;
}

tr:last-child {
  border-bottom: none;
}

tr:nth-child(odd) td {
  background: #ebebeb;
}

tr:nth-child(odd):hover td {
  background: #4e5066;
}

tr:last-child td:first-child {
  border-bottom-left-radius: 3px;
}

tr:last-child td:last-child {
  border-bottom-right-radius: 3px;
}

td {
  background: #ffffff;
  padding: 10px;
  text-align: left;
  vertical-align: middle;
  font-weight: 300;
  /* font-size: 18px; */
  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
  border-right: 1px solid #c1c3d1;
}

td:last-child {
  border-right: 0px;
}

th.text-left {
  text-align: left;
}

th.text-center {
  text-align: center;
}

th.text-right {
  text-align: right;
}

td.text-left {
  text-align: left;
}

td.text-center {
  text-align: center;
}

td.text-right {
  text-align: right;
}
</style>
