import dayjs from "dayjs";
import { IPositionProps } from "./page.interface";

const Position = ({ title, from, to, duration, description, skills }: IPositionProps) => {
  return (
    <div>
      <div>
        <p>{title}</p>
        <p>
          {dayjs(from).format('MMM YYYY')} - {to ? dayjs(to).format('MMM YYYY') : 'Present'} · {duration}
        </p>
      </div>
      <p>{description}</p>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};
export default Position;
