import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  Input,
  LeftIcon,
  RightIcon,
  SearchBarRoot,
  StyledInput,
} from "./styles";

export type ISearchBarProps = {
  onSearch: (text: string) => void;
  onInputClear: () => void;
};

const SearchBar: React.FC<ISearchBarProps> = ({ onSearch, onInputClear }) => {
  const [text, setText] = useState<string>("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(text);
    }
  };

  return (
    <SearchBarRoot>
      <StyledInput>
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search"
          onKeyDown={handleKeyDown}
        />
        <LeftIcon>
          <FontAwesomeIcon icon={faMagnifyingGlass} color="white" size={"lg"} />
        </LeftIcon>

        <RightIcon
          onClick={() => {
            setText("");
            onInputClear();
          }}
        >
          <FontAwesomeIcon icon={faCircleXmark} color="white" size={"lg"} />
        </RightIcon>
      </StyledInput>
    </SearchBarRoot>
  );
};

export { SearchBar };
