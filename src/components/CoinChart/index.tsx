import Chart from "react-apexcharts";
import { ChartProps } from "./config";
import { cryptoAPI } from "../../services/cryptoService";
import Select from "../Select";
import { useState } from "react";
import { DAY, DAY_SIZE, HOUR_1, HOUR_12 } from "../../constants/intervals";
import { chartGeneration, generateParams } from "../../utils/chart/chart";

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

function CoinChart({ id }: ChartProps) {
  const [option, setOption] = useState<string>(DAY);
  const [chartLength, setChartLength] = useState<string>(DAY_SIZE);

  const data = [
    { value: HOUR_1, option: "1 hour" },
    { value: HOUR_12, option: "12 hours" },
    { value: DAY, option: "1 day" },
  ];

  const { data: coin } = cryptoAPI.useFetchCoinHistoryQuery({
    id: id,
    interval: option,
  });

  console.log(coin);
  function handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    setOption(event.target.value);
    setChartLength(generateParams(event.target.value));
  }

  return (
    <div>
      <h3>Changes in</h3>
      <Select data={data} handleSelect={handleSelect} />
      <Chart
        options={chartGeneration(coin, chartLength)?.options}
        series={chartGeneration(coin, chartLength)?.series}
        height={"350px"}
        type="line"
      ></Chart>
    </div>
  );
}

export default CoinChart;
