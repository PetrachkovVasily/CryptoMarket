import { useAppSelector } from "../../hooks/redux";

function BriefCost() {
  const user = useAppSelector((state) => state.userReducer);

  const briefNums = calculateBrief();

  function calculateBrief() {
    let diff = 0;
    let sum = 0;
    let newSum = 0;

    user.dataBrief.forEach((item, index) => {
      if (user.data[index] && user.data[index].coin) {
        diff += Number(user.data[index].coin.priceUsd) - Number(item.priceUsd);
        sum += Number(user.data[index].coin.priceUsd) * user.data[index].amount;
        newSum += Number(item.priceUsd) * user.data[index].amount;
      }
    });
    return { sum: sum, diff: diff, newSum: newSum };
  }

  return (
    <pre>
      {Number(briefNums.sum).toFixed(2)} <span>USD</span>{" "}
      {Number(briefNums.diff).toFixed(2)}{" "}
      <span>({Number(briefNums.newSum / briefNums.sum).toFixed(2)} %)</span>
    </pre>
  );
}

export default BriefCost;
