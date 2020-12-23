import React, { useState } from "react";
import styled from "styled-components";
import hero from "../assets/images/hero.jpg";

const Select = () => {
  const [postSelected, setPostSelected] = useState(true);
  const [skillsSelected, setSkillsSelected] = useState(false);
  const [expSelected, setExpSelected] = useState(false);

  const clickHandler = (type) => {
    console.log(type);
  };
  return (
    <div>
      <SelectDiv>
        <Tab isSelected={postSelected} onClick={clickHandler("posts")}>
          Posts{" "}
        </Tab>
        <Tab isSelected={skillsSelected}>
          {" "}
          <div onClick={clickHandler("skills")}>Skills</div>
        </Tab>
        <Tab isSelected={expSelected}>
          {" "}
          <div onClick={clickHandler("exp")}>Experience</div>
        </Tab>
      </SelectDiv>
      <ImgDiv>
        <Img src={hero}></Img>
        <Img src={hero}></Img>
        <Img src={hero}></Img>
        <Img src={hero}></Img>
        <Img src={hero}></Img>
        <Img src={hero}></Img>
        <Img src={hero}></Img>
      </ImgDiv>
    </div>
  );
};
const SelectDiv = styled.div`
  position: relative;
  @media screen and (max-width: 420px) {
    display: block;
    color: white;
    background-color: #1d1d1d;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
const Tab = styled.div`
  margin: 0.4rem;
  border-bottom: red;
  color: ${({ isSelected }) => (isSelected ? "#4B59F7" : "#fff")};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
  padding: 2px;
  margin: 0.5rem;
`;
const ImgDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 1rem;
`;

export default Select;
