import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { ArrowButton } from "./styles";

export type IArrowProps = {
  children;
  disabled: boolean;
  onClick: () => void;
};

export type IRightArrowProps = {
  limit: number;
  loadNextPage: () => void;
};

const Arrow: React.FC<IArrowProps> = ({ children, disabled, onClick }) => {
  return (
    <ArrowButton disabled={disabled} onClick={onClick}>
      {children}
    </ArrowButton>
  );
};

const LeftArrow: React.FC = () => {
  const { isFirstItemVisible, scrollPrev, visibleElements, initComplete } =
    React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  React.useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleElements]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollPrev()}>
      {"<"}
    </Arrow>
  );
};

const RightArrow: React.FC<IRightArrowProps> = ({ limit, loadNextPage }) => {
  const { isLastItemVisible, scrollNext, visibleElements, items } =
    React.useContext(VisibilityContext);
  const [disabled, setDisabled] = React.useState(
    !visibleElements.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (isLastItemVisible) {
      loadNextPage();
    }
    if (items.toItemsWithoutSeparators().length >= limit) {
      setDisabled(isLastItemVisible);
    }
  }, [items, limit, isLastItemVisible]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollNext()}>
      {">"}
    </Arrow>
  );
};

export { LeftArrow, RightArrow };
