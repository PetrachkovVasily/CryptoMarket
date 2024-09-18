import Chart from "react-apexcharts";

const config = {
  options: {
    chart: {
      id: "basic-bar",
      wight: "90%",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  },
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ],
};

function CoinChart() {
  return (
    <div>
      <Chart
        options={config.options}
        series={config.series}
        height={"350px"}
        type="line"
      ></Chart>
    </div>
  );
}

export default CoinChart;
