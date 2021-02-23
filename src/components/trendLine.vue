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
import Chart from 'primevue/chart';export default {
	data() {
		return {
      time: 'weekly',
      basicDataWeekly: {
				labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
				datasets: [
          {
						label: 'Sample Weekly Usage',
						backgroundColor: '#fad889',
						data: [5, 8, 3, 2, 3, 5, 8]
					},
          {
						label: 'Sample Previous Weekly Usage',
						backgroundColor: '#e8d6ae',
						data: [6, 7, 5, 6, 6, 5, 7]
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
          {
						label: 'Sample Previous Yearly Usage',
						backgroundColor: '#87c3f5',
						data: [40, 65, 59, 80, 81, 56, 65, 59, 80, 81, 56, 55]
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
              }]
      	}
      }
		}
	}
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
