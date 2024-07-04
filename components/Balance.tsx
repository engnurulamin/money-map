import getUserBalance from "@/app/actions/getUserBalance";

const Balance = async () => {
  const { balance } = await getUserBalance();
  return (
    <div>
      <h4>
        Your Balance is{" "}
        <strong style={{ fontSize: "20px", fontWeight: "bolder" }}>
          ${balance ?? 0}
        </strong>
      </h4>
    </div>
  );
};

export default Balance;
