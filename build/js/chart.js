const ctx = document.getElementById("myChart");

// Note: changes to the plugin code is not reflected to the chart, because the plugin is loaded at chart construction time and editor changes only trigger an chart.update().
const plugin = {
  id: "customCanvasBackgroundColor",
  beforeDraw: (chart, args, options) => {
    const { ctx } = chart;
    ctx.save();
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillStyle = options.color || "#99ffff";
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  },
};
new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Male",
        data: [
          2319, 3142, 500, 220, 400, 450, 4087, 1129, 3785, 4936, 2501, 3816,
        ],
        borderWidth: 2,
      },
      {
        label: "Female",
        data: [3000, 2000, 1500, 1000, 800, 1000, 700, 800, 500, 220, 400, 450],
        borderWidth: 2,
      },
    ],
  },
  options: {
    plugins: {
      customCanvasBackgroundColor: {
        color: "white",
      },
    },
  },
  plugins: [plugin],
});
