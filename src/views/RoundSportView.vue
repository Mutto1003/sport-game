<template>
  <div class="roundsport">
      <div class="container rounded mt-5 bg-white p-md-5">
    <div class="h2 font-weight-bold">Meetings</div>
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-blue">
                    <td class="pt-2"> <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="rounded-circle" alt="">
                        <div class="pl-lg-5 pl-md-3 pl-1 name">Emilia Kollette</div>
                    </td>
                    <td class="pt-3 mt-1">25 Sep 2020</td>
                    <td class="pt-3">11:00 AM</td>
                    <td class="pt-3"><span class="fa fa-check pl-3"></span></td>
                    <td class="pt-3"><span class="fa fa-ellipsis-v btn"></span></td>
                </tr>
                <tr id="spacing-row">
                    <td></td>
                </tr>
                <tr class="bg-blue">
                    <td class="pt-2"> <img src="https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="rounded-circle" alt="">
                        <div class="pl-lg-5 pl-md-3 pl-1 name">Anny Adams</div>
                    </td>
                    <td class="pt-3">26 Sep 2020</td>
                    <td class="pt-3">11:00 AM</td>
                    <td class="pt-3"><span class="fa fa-check pl-3"></span></td>
                    <td class="pt-3"><span class="fa fa-ellipsis-v btn"></span></td>
                </tr>
                <tr id="spacing-row">
                    <td></td>
                </tr>
                <tr class="bg-blue">
                    <td class="pt-2"> <img src="https://images.pexels.com/photos/3779448/pexels-photo-3779448.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="rounded-circle" alt="">
                        <div class="pl-lg-5 pl-md-3 pl-1 name">Arnold Linn</div>
                    </td>
                    <td class="pt-3">26 Sep 2020</td>
                    <td class="pt-3">02:00 PM</td>
                    <td class="pt-3"><span class="fa fa-check pl-3"></span></td>
                    <td class="pt-3"><span class="fa fa-ellipsis-v btn"></span></td>
                </tr>
                <tr id="spacing-row">
                    <td></td>
                </tr>
                <tr class="bg-blue">
                    <td class="pt-2"> <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="rounded-circle" alt="">
                        <div class="pl-lg-5 pl-md-3 pl-1 name">Josh Limosel</div>
                    </td>
                    <td class="pt-3">26 Sep 2020</td>
                    <td class="pt-3">04:00 PM</td>
                    <td class="pt-3"><span class="fa fa-minus pl-3"></span></td>
                    <td class="pt-3"><span class="fa fa-ellipsis-v btn"></span></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
  </div>
</template>

<script>
export default {
  name: "RoundSportView",
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&family=Poppins:wght@600&display=swap');

* {
    box-sizing: border-box
}

body {
    background-color: #d9ecf2;
    font-family: 'Poppins', sans-serif;
    color: #666
}

.h2 {
    color: #444;
    font-family: 'PT Sans', sans-serif
}

thead {
    font-family: 'Poppins', sans-serif;
    font-weight: bolder;
    font-size: 20px;
    color: #666
}

img {
    width: 40px;
    height: 40px
}

.name {
    display: inline-block
}

.bg-blue {
    background-color: #EBF5FB;
    border-radius: 8px
}

.fa-check,
.fa-minus {
    color: blue
}

.bg-blue:hover {
    background-color: #3e64ff;
    color: #eee;
    cursor: pointer
}

.bg-blue:hover .fa-check,
.bg-blue:hover .fa-minus {
    background-color: #3e64ff;
    color: #eee
}

.table thead th,
.table td {
    border: none
}

.table tbody td:first-child {
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px
}

.table tbody td:last-child {
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px
}

#spacing-row {
    height: 10px
}

@media(max-width:575px) {
    .container {
        width: 125%;
        padding: 20px 10px
    }
}
</style>
