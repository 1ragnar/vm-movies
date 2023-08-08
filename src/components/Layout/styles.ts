import styled from "styled-components";
import Image from "next/image";
interface NavigationButtonProps {
  selected: boolean;
}

export const LayoutRootContainer = styled.div`
  flex: 1;
  height: 100vh;
  width: 100%;
`;

export const HeaderContainer = styled.header`
  display: flex;
  height: 5%;
  justify-content: start;
  align-items: center;
  padding: 0 2vw;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  margin-top: 5px;
`;

export const NavigationContainer = styled.nav`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 50%;
`;

export const NavigationButton = styled.button<NavigationButtonProps>`
  display: flex;
  height: 100%;
  text-align: center;
  background-color: transparent;
  color: ${({ selected }) => (selected ? "orange" : "white")};
  justify-content: center;
  align-items: center;
  box-shadow: none;
  width: 100%;
  border-width: 0;
  cursor: pointer;
  font-size: 20px;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const StyledImage = styled(Image)`
  @media (max-width: 767px) {
    display: none;
  }
`;
