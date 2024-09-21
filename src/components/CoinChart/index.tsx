import { useState } from "react";

import Chart from "react-apexcharts";

import Select from "../Select";
import { ChartProps } from "./config";
import { chartSelectData } from "../../constants/notes";
import { cryptoAPI } from "../../services/cryptoService";
import { DAY, DAY_SIZE } from "../../constants/intervals";
import { chartGeneration, generateParams } from "../../utils/chart/chart";

function CoinChart({ id }: ChartProps) {
  const [option, setOption] = useState<string>(DAY);
  const [chartLength, setChartLength] = useState<string>(DAY_SIZE);

  const data = chartSelectData;

  const { data: coin } = cryptoAPI.useFetchCoinHistoryQuery({
    id: id,
    interval: option,
  });

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
