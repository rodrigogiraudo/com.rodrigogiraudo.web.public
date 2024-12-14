import Contract from "../experience/contract/page";
import { ITimelineProps } from "./page.interface";

const Timeline = ({ contracts }: ITimelineProps) => {
  return (
    <div>
      {contracts.map((contract, index) => (
        <Contract key={contract.company.name + index} {...contract} />
      ))}
    </div>
  );
};
export default Timeline;
