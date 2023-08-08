import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { countryToFlag } from "../../../utils/helpers";
import { addRemoveFavorite } from "../../../utils/localStorage";
import { IMovieDetails } from "../../interfaces";
import {
  CustomHeader,
  CustomText,
  Title,
  DetailsRootContainer,
  MovieRootContainer,
  TextHeadingContainer,
  Tagline,
  RuntimeScoreContainer,
  BackdropImage,
  LeftContainer,
  PosterImage,
  FavoriteContainer,
  FavoriteText,
  RightContainer,
  Flags,
} from "./styles";

export type IMovieProps = {
  data: IMovieDetails;
};

const Movie: React.FC<IMovieProps> = ({ data }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(data?.isFavorite);

  const onFavoriteClick = (data: IMovieDetails) => {
    addRemoveFavorite({
      id: data.id,
      posterImage: data.posterImage,
    });
    setIsFavorite((oldValue) => !oldValue);
  };
  return (
    <MovieRootContainer>
      <BackdropImage src={data.backdropImage} alt="backdrop_movie" />
      <DetailsRootContainer>
        <LeftContainer>
          <PosterImage src={data.posterImage} alt="poster_movie" />
          <FavoriteContainer
            onClick={(event) => {
              event.preventDefault();
              onFavoriteClick(data);
            }}
          >
            <FontAwesomeIcon
              icon={faHeart}
              color={isFavorite ? "red" : "white"}
              size={"lg"}
            />
            <FavoriteText>
              {isFavorite ? "Remove favorite" : "Add favorite"}
            </FavoriteText>
          </FavoriteContainer>
        </LeftContainer>
        <RightContainer>
          <Title>{data.title}</Title>
          <Tagline>{data.tagline}</Tagline>
          <RuntimeScoreContainer>
            <TextHeadingContainer>
              <CustomHeader>RELEASE DATE</CustomHeader>
              <CustomText>{data.releaseDate}</CustomText>
            </TextHeadingContainer>
            <TextHeadingContainer>
              <CustomHeader>RUNTIME</CustomHeader>
              <CustomText>{data.runtime} minutes</CustomText>
            </TextHeadingContainer>
            <TextHeadingContainer>
              <CustomHeader>SCORE</CustomHeader>
              <CustomText>{data.voteAverage.toFixed(1)}</CustomText>
            </TextHeadingContainer>
            <TextHeadingContainer>
              <CustomHeader>SCORE COUNT</CustomHeader>
              <CustomText>{data.voteCount}</CustomText>
            </TextHeadingContainer>
          </RuntimeScoreContainer>
          <TextHeadingContainer>
            <CustomHeader>OVERVIEW</CustomHeader>
            <CustomText>{data.overview}</CustomText>
          </TextHeadingContainer>
          <TextHeadingContainer>
            <CustomHeader>GENRES</CustomHeader>
            <CustomText>
              {data.genres.map((item, index) => (
                <span key={item.id}>
                  {item.name}
                  {index !== data.genres.length - 1 && ", "}
                </span>
              ))}
            </CustomText>
          </TextHeadingContainer>

          <TextHeadingContainer>
            <CustomHeader>PRODUCTION COMPANIES</CustomHeader>
            <CustomText>
              {data.productionCompanies.map((item, index) => (
                <span key={item.id}>
                  {item.name}
                  {index !== data.productionCompanies.length - 1 && ", "}
                </span>
              ))}
            </CustomText>
          </TextHeadingContainer>

          <TextHeadingContainer>
            <CustomHeader>PRODUCTION COUNTRIES</CustomHeader>
            <Flags>
              {data.productionCountries.map(
                (item) => countryToFlag(item.iso_3166_1) + " "
              )}
            </Flags>
          </TextHeadingContainer>
        </RightContainer>
      </DetailsRootContainer>
    </MovieRootContainer>
  );
};

export { Movie };
