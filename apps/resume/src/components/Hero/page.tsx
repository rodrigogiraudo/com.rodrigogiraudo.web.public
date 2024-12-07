import { IPageProps } from "./page.interface";


const Hero = ({ name, title, image }: IPageProps) => {
  return (
    <div>
      <div>
        <h1>{name}</h1>
        <p>{title}</p>
      </div>
    </div>
  );
};
export default Hero;
