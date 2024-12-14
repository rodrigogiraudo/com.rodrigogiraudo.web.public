import { Dayjs } from "dayjs";

export interface IPositionProps {
  title: string;
  from: string;
  to?: string;
  duration?: string;
  description: string;
  skills: string[];
}
