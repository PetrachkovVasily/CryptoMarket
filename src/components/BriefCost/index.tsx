import { SPACE, ZERO } from "../../constants/notes";
import { useAppSelector } from "../../hooks/redux";

function BriefCost() {
  const user = useAppSelector((state) => state.userReducer);

  const briefNums = calculateBrief();

  function calculateBrief() {
    let diff = ZERO;
    let sum = ZERO;
    let newSum = ZERO;

    user.dataBrief.forEach((item, index) => {
      if (user.data[index] && user.data[index].coin) {
        diff += Number(item.priceUsd) - Number(user.data[index].coin.priceUsd);
        sum += Number(user.data[index].coin.priceUsd) * user.data[index].amount;
        newSum += Number(item.priceUsd) * user.data[index].amount;
      }
    });
    return { sum: sum, diff: diff, newSum: newSum };
  }

  return (
    <pre>
      {Number(briefNums.sum).toFixed(2)} <span>USD</span>
      {SPACE}
      {Number(briefNums.diff).toFixed(2)}
      {SPACE}
      <span>
        ({Number((briefNums.newSum - briefNums.sum) / briefNums.sum).toFixed(2)}
        {SPACE}
        %)
      </span>
    </pre>
  );
}

export default BriefCost;
