import {
  CHART_VALUE_RANGE,
  DAY,
  DAY_SIZE,
  HOUR_1,
  HOUR_1_SIZE,
  HOUR_12,
  HOUR_12_SIZE,
} from "../../constants/intervals";
import {
  coinHistoryListInterface,
  coinHistoryDateInterface,
  coinHistoryPriceInterface,
} from "../interfaces/chartInterfaces";

export const chartGeneration = (
  coin: coinHistoryListInterface | undefined,
  chartLength: string,
) => {
  return {
    options: {
      chart: {
        id: "basic-bar",
        height: "100%",
        width: "100%",
      },
      xaxis: {
        show: false,
        categories: coin?.data
          .slice(-Number(chartLength))
          .map((item: coinHistoryDateInterface) => {
            const date = new Date(item.date);
            let hours = date.getHours().toString();
            let minutes = date.getMinutes().toString();
            if (hours.length < 2) {
              hours = "0" + hours;
            }
            if (minutes.length < 2) {
              minutes = "0" + minutes;
            }
            return hours + ":" + minutes;
          }),
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      stroke: {
        width: 3,
      },
    },
    series: [
      {
        name: "$ price",
        data:
          coin?.data
            .slice(-Number(chartLength))
            .map((item: coinHistoryPriceInterface) => {
              return Number(
                item.priceUsd.toString().slice(0, CHART_VALUE_RANGE),
              );
            }) || [],
      },
    ],
  };
};

export const generateParams = (value: string) => {
  switch (value) {
    case DAY: {
      return DAY_SIZE;
    }
    case HOUR_1: {
      return HOUR_1_SIZE;
    }
    case HOUR_12: {
      return HOUR_12_SIZE;
    }
    default: {
      return HOUR_1_SIZE;
    }
  }
};
