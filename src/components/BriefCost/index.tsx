import { SPACE, ZERO } from "../../constants/notes";
import { useAppSelector } from "../../hooks/redux";
import { formatValue } from "../../utils/formater/textFormater";
import TextHeader from "../TextHeader";

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

    console.log(newSum - sum);

    return { sum: sum, diff: diff, newSum: newSum };
  }

  return (
    <pre className="flex gap-2">
      {briefNums.sum != 0 ? (
        <>
          {formatValue(Number(briefNums.sum))} <span>USD</span>
          {SPACE}
          {+briefNums.diff > ZERO ? (
            <TextHeader colorT={"green"}>
              {formatValue(Number(briefNums.diff))}
              {SPACE}
              <span>
                (
                {formatValue(
                  Number((briefNums.newSum - briefNums.sum) / briefNums.sum),
                )}
                {SPACE}
                %)
              </span>
            </TextHeader>
          ) : (
            <TextHeader colorT={"red"}>
              {briefNums.sum != 0 && briefNums.newSum - briefNums.sum != 0
                ? formatValue(Number(briefNums.diff))
                : 0}
              {SPACE}
              <span>
                (
                {briefNums.sum != 0 && briefNums.newSum - briefNums.sum != 0
                  ? formatValue(
                      Number(
                        (briefNums.newSum - briefNums.sum) / briefNums.sum,
                      ),
                    )
                  : 0}
                {SPACE}
                %)
              </span>
            </TextHeader>
          )}
        </>
      ) : (
        0
      )}
    </pre>
  );
}

export default BriefCost;
