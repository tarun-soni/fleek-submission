import React from "react";
import styled from "styled-components";

import home from "../assets/images/home.png";
import comment from "../assets/images/comment.png";
import search from "../assets/images/search.png";
import circle from "../assets/images/circle.png";
const Nav = () => {
  return (
    <Rect>
      <Home src={home}></Home>
      <Search src={search}></Search>
      <Circle src={circle}></Circle>
      <Comment src={comment}></Comment>
      <Circle src={circle}></Circle>
    </Rect>
  );
};

const Rect = styled.div`
  background-color: whitesmoke;

  padding: 1rem 0;
  position: relative;

  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  background-color: #333;
  position: fixed;
  overflow: hidden;
  bottom: 0;
  width: 100%;
`;

const Home = styled.img`
  height: 26px;
  width: 10%;
  object-fit: contain;
`;

const Search = styled.img`
  height: 26px;
  width: 10%;
  object-fit: contain;
`;

const Circle = styled.img`
  height: 26px;
  width: 10%;
  object-fit: contain;
`;

const Comment = styled.img`
  width: 10%;
  height: 26px;
  object-fit: contain;
`;

export default Nav;
