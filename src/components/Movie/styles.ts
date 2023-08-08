import styled from "styled-components";

export const BackdropImage = styled.img`
  height: 45%;
  width: 100%;
  object-fit: fill;
  position: absolute;
`;
export const MovieRootContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  box-sizing: border-box;
  padding: 10px 3vw;
  justify-content: center;
`;

export const DetailsRootContainer = styled.div`
  width: 90%;
  background-color: #060d17;
  z-index: 10;
  margin-top: 20%;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  padding: 20px;
  height: 50%;
  justify-content: space-between;
`;

export const LeftContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const PosterImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: fill;
  border-radius: 10px;
`;

export const FavoriteContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  cursor: pointer;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const FavoriteText = styled.text`
  margin-left: 5px;
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;
export const TextHeadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

export const CustomText = styled.text`
  font-size: 16px;
  margin-top: 5px;
`;

export const RightContainer = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CustomHeader = styled.text`
  font-size: 16px;
  opacity: 0.5;
`;
export const Flags = styled.text`
  font-size: 26px;
  margin-top: 5px;
`;
export const Title = styled.text`
  font-size: 32px;
  font-weight: bold;
`;

export const Tagline = styled.text`
  font-size: 20px;
  margin-top: 5px;
`;

export const RuntimeScoreContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
