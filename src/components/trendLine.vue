<template>
  <section>
    <div class="chartContainer">
      <h3 class="subtitle dynamic-subtitle">Device Usage Trends</h3>
      <Chart type="line" :data="basicData" />
    <!-- <Chart type="line" :data="data" :options="options" /> -->
    </div>
  </section>
</template>

<script>
import Chart from 'primevue/chart';

export default {
	data() {
		return {
			basicData: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [
					{
						label: 'Sample SmartFan Usage',
						backgroundColor: '#42A5F5',
						data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40]
					},
					{
						label: 'Sample SmartBulb Usage',
						backgroundColor: '#9CCC65',
						data: [28, 48, 40, 19, 86, 27, 90, 28, 48, 40, 19, 86, 27, 90, 28, 48, 40, 19, 86, 27, 90, 28, 48, 40, 19, 86, 27, 90]
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
