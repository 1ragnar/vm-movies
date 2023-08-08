import styled from "styled-components";

export const SearchBarRoot = styled.div`
  width: 40%;
  background-color: #10161d;
  border-radius: 5px;
  padding: 0 5px;
`;
export const Input = styled.input`
  height: 20px;
  font-size: 16px;
  width: 100%;
  border: 2px solid #aaa;
  border-radius: 4px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  padding-left: 2vw;
  cursor: pointer;
  background-color: transparent;
  border-width: 0;
  color: white;
`;

export const StyledInput = styled.div`
  position: relative;
  padding: 0 20px;
`;

export const LeftIcon = styled.div`
  position: absolute;
  left: 1vw;
  top: 50%;
  transform: translateY(-50%);
`;

export const RightIcon = styled.button`
  background: none;
  border: none;
  position: absolute;
  right: 1vw;
  top: 50%;
  transform: translateY(-50%);
`;
