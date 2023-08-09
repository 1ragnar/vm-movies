import React, { ReactNode } from "react";
import Link from "next/link";
import {
  HeaderContainer,
  LayoutRootContainer,
  NavigationButton,
  NavigationContainer,
  StyledImage,
} from "./styles";
import { useRouter } from "next/router";
import { SearchBar } from "../SearchBar/SearchBar";

type Props = {
  children?: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  const handleSearch = (text: string) => {
    if (text === "" && router.pathname === "/search") {
      router.push({ pathname: "/" });
    }
    router.replace({
      pathname: "/search",
      query: { title: text },
    });
  };

  const handleBack = () => {
    if (router.pathname === "/search") {
      router.push({ pathname: "/" });
    }
  };

  return (
    <LayoutRootContainer>
      <HeaderContainer>
        <StyledImage
          src="/vm-movies-logo.svg"
          alt={"logo"}
          width={80}
          height={80}
        />
        <NavigationContainer>
          <Link
            href="/"
            passHref
            style={{ textDecoration: "none", margin: "0 10px" }}
          >
            <NavigationButton selected={router.pathname === "/"}>
              Home
            </NavigationButton>
          </Link>
          <Link
            href="/new"
            passHref
            style={{ textDecoration: "none", margin: "0 10px" }}
          >
            <NavigationButton selected={router.pathname === "/new"}>
              New
            </NavigationButton>
          </Link>
          <Link
            href="/favorites"
            passHref
            style={{ textDecoration: "none", margin: "0 10px" }}
          >
            <NavigationButton selected={router.pathname === "/favorites"}>
              Favorites
            </NavigationButton>
          </Link>
        </NavigationContainer>

        <SearchBar onSearch={handleSearch} onInputClear={handleBack} />
      </HeaderContainer>
      {children}
    </LayoutRootContainer>
  );
};

export default Layout;
