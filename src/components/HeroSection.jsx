import React from "react";
import styled from "styled-components";
import hero from "../assets/images/hero.jpg";

const HeroSection = () => {
  return (
    <>
      <div style={{ paddingBottom: "0.5rem" }}>
        <HeroImage src={hero}></HeroImage>
        <FadeDiv></FadeDiv>
      </div>
      <HeroText>Lorem IpSum</HeroText>
      <DataDiv>
        <Posts>
          <h4>43</h4>
          <h5>Posts</h5>
        </Posts>
        <Posts>
          <h4>43</h4>
          <h5>Followers</h5>
        </Posts>
        <Posts>
          <h4>43</h4>
          <h5>Following</h5>
        </Posts>
      </DataDiv>
    </>
  );
};

const HeroText = styled.h1`
  position: absolute;
  top: 22%;
  left: 20%;
  color: white;
`;

const DataDiv = styled.div`
  @media screen and (max-width: 420px) {
    color: white;
    /* background-color: red; */
    display: flex;
    justify-content: space-around;
    align-items: center;

    position: absolute;

    top: 40%;
    width: 100%;
  }
`;

const HeroImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 80%;
  @media screen and (max-width: 420px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const FadeDiv = styled.div`
  @media screen and (max-width: 420px) {
    object-fit: contain;
    height: 10rem;
    position: absolute;

    top: 28%;
    width: 100%;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgb(7, 7, 7),
      #000000
    );
  }
`;

const Posts = styled.div`
  @media screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default HeroSection;
