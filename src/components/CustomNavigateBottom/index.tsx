import React, { useMemo } from "react";
import { View } from "react-native";

import { Container, ContainerIcon, Icon, IconText } from "./styles";

const Home = require("./../../assets/home.png");
const Search = require("./../../assets/search.png");
const Library = require("./../../assets/library.png");

const CustomNavigateBottom: React.FC = () => {
  const menus = useMemo(
    () => [
      { name: "Home", icon: Home },
      { name: "Search", icon: Search },
      { name: "Library", icon: Library },
    ],
    []
  );

  return (
    <Container>
      {menus.map((item) => (
        <ContainerIcon key={item.name}>
          <Icon source={item.icon} style={{ height: 24, width: 24 }} />
          <IconText>{item.name}</IconText>
        </ContainerIcon>
      ))}
    </Container>
  );
};

export default CustomNavigateBottom;
