import dayjs from "dayjs";
import HomeContent from "./HomeContent";

export default async function Home() {
  const { default: data } = await import("@/data.json");
  const contractData = data.map((contract: any) => ({
    ...contract,
    from: dayjs(contract.from),
    to: contract.to ? dayjs(contract.to) : undefined,
    positions: contract.positions.map((pos: any) => ({
      ...pos,
      from: dayjs(pos.from),
      to: pos.to ? dayjs(pos.to) : undefined,
    })),
  }));

  return <HomeContent contracts={JSON.parse(JSON.stringify(contractData))} />;
}
