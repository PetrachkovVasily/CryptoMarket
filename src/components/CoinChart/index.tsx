import Chart from "react-apexcharts";
import { ChartProps } from "./config";
import { cryptoAPI } from "../../services/cryptoService";
import Select from "../Select";
import { useState } from "react";
import { DAY, DAY_SIZE } from "../../constants/intervals";
import { chartGeneration, generateParams } from "../../utils/chart/chart";
import { chartSelectData } from "../../constants/notes";

function CoinChart({ id }: ChartProps) {
  const [option, setOption] = useState<string>(DAY);
  const [chartLength, setChartLength] = useState<string>(DAY_SIZE);

  const data = chartSelectData;

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
