# VM-Movie React Next.js App with Docker Compose

## Description

VM-Movie is a dynamic web application built using React, Next.js, and Docker Compose. This application allows users to seamlessly explore a diverse collection of films. It leverages the TMDB API to fetch movie data, offering users up-to-date and comprehensive information about various movies. Furthermore, users have the ability to add their preferred movies to a personalized favorites list.

## Features

- Effortless Browsing and Search: Discover a wide array of movies and easily search for specific titles, all powered by the seamless integration with the TMDB API.

- Detailed Movie Insights: Access in-depth details about each movie, including its title, release date, synopsis, and more.

- Personalized Favorites: Users can curate their own list of favorite movies by adding them to their favorites list. This list is stored locally, ensuring quick access.

- Adaptive Design: The app boasts a responsive design, providing an optimal user experience across various devices.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/1ragnar/vm-movie.git
```

2. Navigate to the project directory:

```bash
 cd vm-movie
```

3. Create a .env.local file in the root directory and add your NEXT_PUBLIC_API_HOST, NEXT_PUBLIC_TMDB_BASE_IMAGE_URL,NEXT_PUBLIC_TMDB_AUTH_TOKEN

Example:
NEXT_PUBLIC_API_HOST=https://api.themoviedb.org/3
NEXT_PUBLIC_TMDB_BASE_IMAGE_URL=https://image.tmdb.org/t/p/original
NEXT_PUBLIC_TMDB_AUTH_TOKEN=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGFhNzE4MzdmNDYzNTQxY2Y3ZWIwNTE2NDVjNTNjZSIsInN1YiI6IjVjZTk5MmQ1MGUwYTI2MzgxY2Q2MzA5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nWwgQTjkqiJd6kz5VOzrxNb1xy6CetWl0bN21r3S1e0

### Please use your keys. This is here only for testing purpose.

## Build Project with docker

Navigate to the root project directory and run:

```bash
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose build
```

## Start the docker Project

```bash
docker-compose up
```

## Build the Project localy

```bash
npm i
```

## Start the Project localy

```bash
npm run dev
```

## Technologies Utilized

- React.js
- Next.js
- TMDB API
- Docker Compose

## License

This project is licensed under the MIT License.
