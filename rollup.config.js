import buble from "rollup-plugin-buble";

export default {
  input: "src/index.js",
  plugins: [buble()],
  output: [
    {
      name: "vue-trend-chart",
      file: "dist/vue-trend-chart.js",
      format: "umd"
    },
    {
      name: "vue-trend-chart",
      file: "dist/vue-trend-chart.common.js",
      format: "cjs"
    },
    {
      name: "vue-trend-chart",
      file: "dist/vue-trend-chart.esm.js",
      format: "es"
    }
  ]
};
