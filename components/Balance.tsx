import getUserBalance from "@/app/actions/getUserBalance";
import { addCommas } from "@/lib/utils";

const Balance = async () => {
  const { balance } = await getUserBalance();
  return (
    <div>
      <h4>
        Your Balance is{" "}
        <strong style={{ fontSize: "20px", fontWeight: "bolder" }}>
          ${addCommas(Number(balance?.toFixed(2) ?? 0))}
        </strong>
      </h4>
    </div>
  );
};

export default Balance;
