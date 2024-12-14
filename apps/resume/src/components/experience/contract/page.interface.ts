import { Dayjs } from "dayjs";
import { IPositionProps } from "./position/page.interface";

export interface ICompanyProps {
  name: string;
  url: string;
}
export interface IContractProps {
  company: ICompanyProps;
  from: string;
  to?: string;
  current: boolean;
  duration?: string;
  location: string;
  locationType: "remote" | "on-site" | "hybrid";
  employmentType: "full-time" | "part-time" | "contract" | "freelance";
  positions: IPositionProps[];
}