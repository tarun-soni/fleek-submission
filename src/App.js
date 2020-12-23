import "./App.css";
import Nav from "./components/Nav.jsx";
import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import Select from "./components/Select";
import { useState } from "react";

function App() {
  const [isSelected, setIsSelected] = useState(true);
  return (
    <>
      <Main>
        <HeroSection />

        <Nav />
      </Main>
      <Select />
    </>
  );
}
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default App;
