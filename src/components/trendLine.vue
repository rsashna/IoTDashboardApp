<template>
  <section>
    <div class="chartContainer">
      <h3 class="subtitle dynamic-subtitle">Device Usage Trends</h3>
      <Chart v-if="time === 'yearly'" type="line" :data="basicDataYearly" />
      <Chart v-if="time === 'monthly'" type="line" :data="basicDataMonthly" />
      <Chart v-if="time === 'weekly'" type="line" :data="basicDataWeekly" />
      <Button class="timerbutton" v-on:click="time='weekly'">Weekly Trend</Button>
      <Button class="timerbutton" v-on:click="time='monthly'">Monthly Trend</Button>
      <Button class="timerbutton" v-on:click="time='yearly'">Yearly Trend</Button>
    <!-- <Chart type="line" :data="data" :options="options" /> -->
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
      time: 'yearly',
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
						label: 'Sample Monthly Usage',
						backgroundColor: '#9CCC65',
						data: [28, 48, 40, 19, 86, 27, 50, 28, 48, 40, 19, 86, 27, 90, 28, 48, 40, 19, 86, 27]
					},
          {
						label: 'Sample Previous Monthly Usage',
						backgroundColor: '#c0e695',
						data: [86, 27, 90, 27, 48, 40, 28, 48, 40, 19, 19, 53, 27, 90, 28, 48, 40, 19, 86, 27]
					}
				]
			},
			basicDataYearly: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
				datasets: [
          {
						label: 'Sample Yearly Usage',
						backgroundColor: '#42A5F5',
						data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56]
					},
          // {
					// 	label: 'Sample Previous Yearly Usage',
					// 	backgroundColor: '#87c3f5',
					// 	data: [40, 65, 59, 80, 81, 56, 65, 59, 80, 81, 56, 55]
					// }
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
    mounted(){
      axios.get('/cacheDB/weeklyUsage.JSON')
      .then(response => {
        var weeklyData1 = response.data.recordset[0].jsonData.split("[")[1].split("]")[0].split(",");
        this.alldata = weeklyData1;
        this.basicDataWeekly.datasets[0].data=weeklyData1;
        var weeklyData2 = response.data.recordset[1].jsonData.split("[")[1].split("]")[0].split(",");
        // this.alldata = weeklyData2;
        this.basicDataWeekly.datasets[1].data=weeklyData2;
      }).catch(error => {
        console.log(error);
      })
    },
}
</script>
<style lang="scss">
.chartContainer{
  width: 600px;
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
