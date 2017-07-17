<template lang="pug">
.screen
  .container
    h2 Chart.js

    h3 Bar Chart

    p http://www.chartjs.org/docs/#bar-chart

    div.
      <div class="canvas-holder">
        <canvas id="myChart" width="250" height="125"></canvas>
      </div>

  global-footer
</template>

<script>
import GlobalFooter from '@/components/GlobalFooter';
import Chart from 'chart.js';

export default {
  name: 'chartjs',
  components: {
    GlobalFooter,
  },
  data() {
    return {
      enc_src: '',
      enc_charset: 'utf8',
      enc_dest: '',
    };
  },
  mounted() {
    const ctx = document.getElementById('myChart');
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
          data: [65, 59, 80, 81, 56, 55, 40],
        },
      ],
    };
    /* eslint-disable no-unused-vars */
    const myChart = new Chart(ctx, {
      type: 'bar',
      data,
      options: {},
    });
  },
  computed: {
    encSrcList() {
    },
  },
  methods: {
    doEncode() {
    },
  },
};
</script>

<style lang="stylus" scoped>
.screen {
  font-size: 16px;
}

button, input, select {
  font-size: 16px;
}

.block {
  display: block;
  width: 100%;
}

#src, #dest {
  font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
  font-size: 12px;
}

#src {
  height: 100px;
}

.dest {
  padding: 5px;
  background-color: #f5f5f5;
  overflow-x: scroll;
}

.centering {
  text-align: center;
}

.results {
  .line {
    margin: 0 0 3em;
    .head {
      margin: .4em .2em;
      padding: .2em .8em;
      font-size: 11px;
      color: #444d56;
      background-color: rgba(27,31,35,0.08);
    }
    .line-src {
      margin: 0 0 .5em;
    }
    .line-dest {
      margin: 0 0 .5em;
    }
    code {
      background-color: #f6f8fa;
      border: 0;
      white-space: normal;
      word-break: break-all;
    }
  }
}
</style>
