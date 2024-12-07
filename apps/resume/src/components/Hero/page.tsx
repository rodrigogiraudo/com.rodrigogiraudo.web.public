import { IPageProps } from "./page.interface";
import * as S from "./page.styled";

const Hero = ({ name, title, image }: IPageProps) => {
  return (
    <S.HeroImage>
      <S.HeroText>
        <h1>{name}</h1>
        <p>{title}</p>
      </S.HeroText>
    </S.HeroImage>
  );
};
export default Hero;
