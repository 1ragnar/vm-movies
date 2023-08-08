import React from "react";
import { Bars } from "react-loader-spinner";
import { LoaderContainer } from "./styles";

export type ILoaderProps = {
  text: string;
};

const Loader: React.FC<ILoaderProps> = ({ text }) => {
  return (
    <LoaderContainer>
      <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <text>{text}</text>
    </LoaderContainer>
  );
};

export { Loader };
