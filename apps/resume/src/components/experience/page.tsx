import Contract from "./contract/page";
import { IExperienceProps } from "./page.interface";

const Experience = ({ contracts }: IExperienceProps) => {
  return (
    <div>
      {contracts.map((contract, index) => (
        <Contract key={contract.company.name + index} {...contract} />
      ))}
    </div>
  );
};
export default Experience;
