import BriefCost from "../BriefCost";
import BriefElement from "../BriefElement";
import { useAppSelector } from "../../hooks/redux";

function BriefModal() {
  const user = useAppSelector((state) => state.userReducer);

  return (
    <section className="mx-[12px] flex flex-col items-center gap-[16px] md:mx-[24px]">
      <h1>My briefcase</h1>
      <BriefCost />
      <div className="m-[24px] flex max-h-[300px] w-[100%] max-w-[600px] flex-col gap-2 overflow-auto">
        {user.data ? (
          user.data.map((coin) => {
            if (coin.coin) {
              return <BriefElement coin={coin} key={coin.coin.id} />;
            }
          })
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}

export default BriefModal;
