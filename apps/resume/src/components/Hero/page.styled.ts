import styled from "styled-components";

export const HeroImage = styled.div`
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../../assets/hero-bg.png");

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const HeroText = styled.div`
  width: 100%;
  color: white;
  padding: 6rem;
  min-height: 25vh;
`;
