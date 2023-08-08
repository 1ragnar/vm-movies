import Link from "next/link";
import styled from "styled-components";

interface ButtonProps {
  disabled: boolean;
}

export const ArrowButton = styled.button<ButtonProps>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: ${({ disabled }) => (disabled ? 0 : 1)};
  background-color: orange;
  border-width: 0;
  width: 2vw;
  text-align: center;
  align-items: center;
`;

export const ListRootContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ListTitle = styled.h1`
  margin-left: 2vw;
  color: white;
`;

export const NoMovieText = styled.text`
  text-align: center;
  color: orange;
`;

export const ListItemRoot = styled(Link)`
  height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const ListItemContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const ItemImage = styled.img`
  height: 100%;
  object-fit: contain;
`;

export const FavoriteContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: black;
  z-index: 100;
  padding: 2px;
`;
