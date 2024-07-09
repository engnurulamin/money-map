import getUserBalance from "@/app/actions/getUserBalance";
import { addCommas } from "@/lib/utils";

const Balance = async () => {
  const { balance } = await getUserBalance();
  return (
    <div>
      <h4 className="center">Your Balance</h4>
      <h4 className="center balance">
        ${addCommas(Number(balance?.toFixed(2) ?? 0))}
      </h4>
    </div>
  );
};

export default Balance;
