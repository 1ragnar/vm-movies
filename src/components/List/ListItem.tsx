import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { IMovie } from "../../interfaces";
import {
  FavoriteContainer,
  ItemImage,
  ListItemContainer,
  ListItemRoot,
} from "./styles";

type ListItemProps = {
  data: IMovie;
  onFavoriteClick: (movie: IMovie) => void;
};

const ListItem: React.FC<ListItemProps> = ({ data, onFavoriteClick }) => {
  return (
    <ListItemRoot href={`/movies/${data.id}`}>
      <ListItemContainer>
        <ItemImage src={data.posterImage} alt="movie" />
        <FavoriteContainer
          onClick={(event) => {
            event.preventDefault();
            onFavoriteClick(data);
          }}
        >
          <FontAwesomeIcon
            icon={faHeart}
            color={data.isFavorite ? "red" : "white"}
            size={"lg"}
          />
        </FavoriteContainer>
      </ListItemContainer>
    </ListItemRoot>
  );
};

export default ListItem;
