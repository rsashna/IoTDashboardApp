<template>
  <section>
    <div class="trendlineContainer">
      <div class="chartContainer">
        <h3 class="subtitle dynamic-subtitle">Device Usage Trends</h3>
        <Chart v-if="time === 'yearly'" type="line" :data="basicDataYearly" />
        <Chart v-if="time === 'monthly'" type="line" :data="basicDataMonthly" />
        <Chart v-if="time === 'weekly'" type="line" :data="basicDataWeekly" />
      <!-- <Chart type="line" :data="data" :options="options" /> -->
      </div>
      <div class="buttonContainer">
        <Button class="timerbutton" v-on:click="time='weekly'">Weekly Trend</Button>
        <Button class="timerbutton" v-on:click="time='monthly'">Monthly Trend</Button>
        <Button class="timerbutton" v-on:click="time='yearly'">Yearly Trend</Button>
      </div>
    </div>
  </section>
</template>
<script>
import Chart from 'primevue/chart';
import axios from "axios";
export default {
	data() {
		return {
      alldata:[],
      time: [],
      basicDataWeekly: {
				labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
				datasets: [
          {
						label: 'Weekly Usage',
						backgroundColor: '#fad889',
						data: []
					},
          {
						label: 'Previous Weekly Usage',
						backgroundColor: '#e8d6ae',
						data: []
					}
				]
			},
      basicDataMonthly: {
				labels: ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '31'],
				datasets: [
					{
						label: 'Monthly Usage',
						backgroundColor: '#9CCC65',
						data: []
					},
          {
						label: 'Previous Monthly Usage',
						backgroundColor: '#c0e695',
						data: []
					}
				]
			},
			basicDataYearly: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
				datasets: [
          {
						label: 'Yearly Usage',
						backgroundColor: '#42A5F5',
						data: []
					},
           {
					 	label: 'Previous Yearly Usage',
					 	backgroundColor: '#87c3f5',
					 	data: []
					 }
				]
			},
      options: {
      	responsive: true,
      	hoverMode: 'index',
      	stacked: false,
      	scales: {
              yAxes: [{
                  type: 'linear',
                  display: true,
                  position: 'left',
                  id: 'y-axis-1',
              },
              {
                  type: 'linear',
                  display: true,
                  position: 'right',
                  id: 'y-axis-2',
                  gridLines: {
                      drawOnChartArea: false
                  }
              }
        ],
      	}
      }
		}
  }, methods:{
    },
    beforeCreate(){
      axios.get('/cacheDB/weeklyUsage.JSON')
      .then(response => {
        var weeklyData1 = response.data.recordset[0].jsonData.split("[")[1].split("]")[0].split(",");
        this.alldata = weeklyData1;
        this.basicDataWeekly.datasets[0].data=weeklyData1;
        var weeklyData2 = response.data.recordset[1].jsonData.split("[")[1].split("]")[0].split(",");
        this.basicDataWeekly.datasets[1].data=weeklyData2;
      }).catch(error => {
        console.log(error);
      }),
        axios.get('/cacheDB/monthlyUsage.JSON')
        .then(response => {
            var monthlyData1 = response.data.recordset[1].jsonData.split("[")[1].split("]")[0].split(",");
            this.alldata = monthlyData1;
            this.basicDataMonthly.datasets[0].data=monthlyData1;
            var monthlyData2 = response.data.recordset[0].jsonData.split("[")[1].split("]")[0].split(",");
            this.basicDataMonthly.datasets[1].data=monthlyData2;
      }).catch(error => {
        console.log(error);
      }),
        axios.get('/cacheDB/yearlyUsage.JSON')
        .then(response => {
            var y0 = response.data.recordset[1].January;
            var y1 = response.data.recordset[1].February;
            var y2 = response.data.recordset[1].March;
            var y3 = response.data.recordset[1].April;
            var y4 = response.data.recordset[1].May;
            var y5 = response.data.recordset[1].June;
            var y6 = response.data.recordset[1].July;
            var y7 = response.data.recordset[1].August;
            var y8 = response.data.recordset[1].September;
            var y9 = response.data.recordset[1].October;
            var y10 = response.data.recordset[1].November;
            var y11 = response.data.recordset[1].December;

            this.alldata = y0,y1,y2,y3,y4,y5,y6,y7,y8,y9,y10,y11;

            this.basicDataYearly.datasets[0].data[0] = y0;
            this.basicDataYearly.datasets[0].data[1] = y1;
            this.basicDataYearly.datasets[0].data[2] = y2;
            this.basicDataYearly.datasets[0].data[3] = y3;
            this.basicDataYearly.datasets[0].data[4] = y4;
            this.basicDataYearly.datasets[0].data[5] = y5;
            this.basicDataYearly.datasets[0].data[6] = y6;
            this.basicDataYearly.datasets[0].data[7] = y7;
            this.basicDataYearly.datasets[0].data[8] = y8;
            this.basicDataYearly.datasets[0].data[9] = y9;
            this.basicDataYearly.datasets[0].data[10] = y10;
            this.basicDataYearly.datasets[0].data[11] = y11;


            var y00 = response.data.recordset[0].January;
            var y12 = response.data.recordset[0].February;
            var y22 = response.data.recordset[0].March;
            var y33 = response.data.recordset[0].April;
            var y44 = response.data.recordset[0].May;
            var y55 = response.data.recordset[0].June;
            var y66 = response.data.recordset[0].July;
            var y77 = response.data.recordset[0].August;
            var y88 = response.data.recordset[0].September;
            var y99 = response.data.recordset[0].October;
            var y100 = response.data.recordset[0].November;
            var y111 = response.data.recordset[0].December;

            this.alldata = y00,y12,y22,y33,y44,y55,y66,y77,y88,y99,y100,y111;

            this.basicDataYearly.datasets[1].data[0] = y00;
            this.basicDataYearly.datasets[1].data[1] = y12;
            this.basicDataYearly.datasets[1].data[2] = y22;
            this.basicDataYearly.datasets[1].data[3] = y33;
            this.basicDataYearly.datasets[1].data[4] = y44;
            this.basicDataYearly.datasets[1].data[5] = y55;
            this.basicDataYearly.datasets[1].data[6] = y66;
            this.basicDataYearly.datasets[1].data[7] = y77;
            this.basicDataYearly.datasets[1].data[8] = y88;
            this.basicDataYearly.datasets[1].data[9] = y99;
            this.basicDataYearly.datasets[1].data[10] = y100;
            this.basicDataYearly.datasets[1].data[11] = y111;
            this.time='weekly';
      }).catch(error => {
        console.log(error);
      })
    },
}
</script>
<style lang="scss">
.chartContainer{
  width: 600px;
  height: 350px;
  margin-bottom: 10px;
}
.timerbutton{
  margin: 5px;
  background-color: #b9f9fa;
  border-radius: 2px;
  border-color: #d7fcf9;
  cursor: pointer;
}
@media (max-width: 415px){
  .chartContainer{
    display: flex;
    flex-direction: column;
    width: 400px;
    align-self: center;
  }
}
@media (max-width: 770px){
  .chartContainer{
    display: flex;
    flex-direction: column;
    width: 500px;
    align-self: center;
  }
}
</style>
