<template>
    <div>
        <canvas ref="chartCanvas"></canvas>
    </div>
</template>

<script>
import { Chart } from 'chart.js/auto';
import { ArcElement, Tooltip, Legend, BarElement } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend, BarElement);

export default {
    data() {
        return {
            chart: null
        }
    },
    props: {
        chartData: {
            type: Object,
            required: true
        },
        type: {
            type: String,
            default: 'pie',
            required: true
        },
        title: {
            type: String
        }
    },

    // mounted() {
    //     this.renderChart();
    // },
     watch: {
    chartData: {
      handler() {
        this.renderChart();
      },
      deep: true
    }
  },
    methods: {
        renderChart() {
            
            let ctx = this.$refs.chartCanvas.getContext('2d');
            if (this.chart) this.chart.destroy();
            this.chart = new Chart(ctx, {
                type: this.type,
                data: this.chartData,
                options: {
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: this.title,
                            position: 'bottom'
                        }
                    },
                    
                },

            });
            console.log("watch data",this.chartData)
        }
    }
}
</script>