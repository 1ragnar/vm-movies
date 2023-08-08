import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { IMovie } from "../../interfaces";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { LeftArrow, RightArrow } from "./Arrows";
import ListItem from "./ListItem";
import { ListRootContainer, ListTitle, NoMovieText } from "./styles";

type CustomListProps = {
  items: IMovie[];
  onLoadNextPage: () => void;
  title: string;
  onFavoriteClick: (movie: IMovie) => void;
};

const CustomList: React.FC<CustomListProps> = ({
  items,
  onLoadNextPage,
  title,
  onFavoriteClick,
}) => {
  return (
    <ListRootContainer>
      <ListTitle>{title}</ListTitle>
      {items.length > 0 ? (
        <ScrollMenu
          LeftArrow={LeftArrow}
          RightArrow={<RightArrow limit={20} loadNextPage={onLoadNextPage} />}
        >
          {items.map((movie) => (
            <ListItem
              key={movie.id}
              data={movie}
              onFavoriteClick={onFavoriteClick}
            />
          ))}
        </ScrollMenu>
      ) : (
        <NoMovieText>No movies</NoMovieText>
      )}
    </ListRootContainer>
  );
};

export { CustomList };
