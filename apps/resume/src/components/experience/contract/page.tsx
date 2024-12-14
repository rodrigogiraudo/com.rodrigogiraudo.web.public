import dayjs from "dayjs";
import { IContractProps } from "./page.interface";
import Position from "./position/page";

const Contract = ({
  company,
  from,
  to,
  duration,
  positions,
  location,
  locationType,
  employmentType,
}: IContractProps) => {
  return (
    <div>
      <div>
        <p>{company.name}</p>
        <p>
          {dayjs(from).format("MMM YYYY")} - {dayjs(to).format("MMM YYYY")} · {duration}
        </p>
      </div>
      <p>{location}</p>
      <ul>
        {positions.map((position) => (
          <Position key={position.title} {...position} />
        ))}
      </ul>
    </div>
  );
};
export default Contract;
