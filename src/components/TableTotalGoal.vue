<template>
  <div class="">
    <table id="example" class="table-fill" cellspacing="0" width="100%">
      <thead>
        <tr>
          <th rowspan="2">เวลา</th>
          <th rowspan="2">คู่แข่งขัน</th>
          <th colspan="2" class="text-center">ครึ่งแรก</th>
          <th colspan="2" class="text-center">ครึ่งหลัง</th>
          <th colspan="2" class="text-center">ทีมเหย้า</th>
          <th colspan="2" class="text-center">ทีมเยือน</th>
        </tr>
        <tr>
          <th>คี่</th>
          <th>คู่</th>
          <th>คี่</th>
          <th>คู่</th>
          <th>คี่</th>
          <th>คู่</th>
          <th>คี่</th>
          <th>คู่</th>
        </tr>
      </thead>
      <tbody class="table-hover">
        <tr v-for="(item, index) in itemMarkets" :key="index">
          <td>{{ item.iTime }}</td>
          <td>{{ item.iTeam[0].Name }} VS {{ item.iTeam[1].Name }}</td>
          <td>{{ item.iEven_OneST }}</td>
          <td>{{ item.iOdd_OneST }}</td>
          <td>{{ item.iEven_TwoST }}</td>
          <td>{{ item.iOdd_TwoST }}</td>
          <td>{{ item.iEven_HomeTeam }}</td>
          <td>{{ item.iOdd_HomeTeam }}</td>
          <td>{{ item.iEven_AwayTeam }}</td>
          <td>{{ item.iOdd_AwayTeam }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="row">
    <div class="col">
      <div class="mt-5 d-flex justify-content-start">
        <p>Showing 0 to 0 of 0 entries</p>
      </div>
    </div>
    <div class="col">
      <div class="pagination mt-5 d-flex justify-content-end">
        <a href="">&laquo;</a>
        <a href="">1</a>
        <a class="active" href="#">2</a>
        <a href="">3</a>
        <a href="">4</a>
        <a href="">5</a>
        <a href="">6</a>
        <a href="">&raquo;</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TableTeamWin",
  data() {
    return {
      live_scores: [],
      markets: [],
      itemMarkets: [],
      fixtureid: [],
    };
  },
  computed: {},
  async mounted() {
    // Get for loop
    await axios
      .get("http://49.0.193.193:8021/api/v1/feed/live_score/list")
      .then((resultTeam) => {
        this.live_scores = resultTeam.data.data.live_scores;
        let id;
        for (let i = 0; i < this.live_scores.length; i++) {
          id = this.live_scores[i].fixture_id;
          // console.log(id);
          axios
            .get(
              `http://49.0.193.193:8021/api/v1/feed/live_score/${id}/market/list`
            )
            .then((resultM) => {
              this.markets = resultM.data.data.markets;
              let Onest, Twost, HomeTeam, AwayTeam;
              let cItem;
              if (this.markets === null) {
                cItem = {
                  iID: this.live_scores[i].fixture_id,
                  iTime: this.live_scores[i].fixture.StartDate,
                  iTeam: this.live_scores[i].fixture.Participants,
                };
                this.itemMarkets.push(cItem);
              } else if (this.markets !== null) {
                let One_Even,
                  One_Odd,
                  Two_Even,
                  Two_Odd,
                  HomeTeam_Even,
                  HomeTeam_Odd,
                  AwayTeam_Even,
                  AwayTeam_Odd;
                Onest = this.markets.filter((elem) => {
                  if (elem.market_id == "72") {
                    // console.log(elem)
                    return elem;
                  }
                });
                if (Onest[0] == null) {
                  One_Even = "";
                  One_Odd = "";
                } else if (Onest[0] !== null) {
                  One_Even = Onest[0].bets[0].Price;
                  One_Odd = Onest[0].bets[1].Price;
                }

                Twost = this.markets.filter((elem) => {
                  if (elem.market_id == "73") {
                    // console.log(elem)
                    return elem;
                  }
                });
                if (Twost[0] == null) {
                  Two_Even = "";
                  Two_Odd = "";
                } else if (Twost[0] !== null) {
                  Two_Even = Twost[0].bets[0].Price;
                  Two_Odd = Twost[0].bets[1].Price;
                }

                HomeTeam = this.markets.filter((elem) => {
                  if (elem.market_id == "198") {
                    // console.log(elem)
                    return elem;
                  }
                });
                if (HomeTeam[0] == null) {
                  HomeTeam_Even = "";
                  HomeTeam_Odd = "";
                } else if (HomeTeam[0] !== null) {
                  HomeTeam_Even = HomeTeam[0].bets[0].Price;
                  HomeTeam_Odd = HomeTeam[0].bets[1].Price;
                }

                AwayTeam = this.markets.filter((elem) => {
                  if (elem.market_id == "199") {
                    // console.log(elem)
                    return elem;
                  }
                });
                if (AwayTeam[0] == null) {
                  AwayTeam_Even = "";
                  AwayTeam_Odd = "";
                } else if (AwayTeam[0] !== null) {
                  AwayTeam_Even = AwayTeam[0].bets[0].Price;
                  AwayTeam_Odd = AwayTeam[0].bets[1].Price;
                }

                cItem = {
                  iID: this.live_scores[i].fixture_id,
                  iTime: this.live_scores[i].fixture.StartDate,
                  iTeam: this.live_scores[i].fixture.Participants,
                  iEven_OneST: One_Even,
                  iOdd_OneST: One_Odd,
                  iEven_TwoST: Two_Even,
                  iOdd_TwoST: Two_Odd,
                  iEven_HomeTeam: HomeTeam_Even,
                  iOdd_HomeTeam: HomeTeam_Odd,
                  iEven_AwayTeam: AwayTeam_Even,
                  iOdd_AwayTeam: AwayTeam_Odd,
                };
                this.itemMarkets.push(cItem);
              }

              // this.itemMarkets.push(cItem);
              // console.log(JSON.stringify(this.markets_onePeriod));
            });
          // console.log(JSON.stringify(itemMarkets));
        }
        // console.log(JSON.stringify(this.markets));
      });
  },
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

.pagination {
  display: inline-block;
}

.pagination a {
  color: black;
  float: left;
  padding: 4px 12px;
  text-decoration: none;
  border: 1px solid #ddd;
}

.pagination a.active {
  background-color: #1b1e24;
  color: white;
  border: 1px solid #1b1e24;
}

.pagination a:hover:not(.active) {
  background-color: #ddd;
}

.pagination a:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.pagination a:last-child {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>
