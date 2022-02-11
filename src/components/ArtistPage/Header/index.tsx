import React from "react";
import { View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import {
  Container,
  ContainerBtns,
  LeftArrow,
  ContainerRigthBtns,
  BtnFollow,
  BtnMore,
  TextFollow,
  NameArtist,
  ContainerNameArtisti,
} from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      {/*  */}
      <ImageBackground
        source={require("../../../assets/capa-1.png")}
        resizeMode="cover"
        style={{
          height: "100%",
          width: "100%",
          flex: 1,
        }}
      >
        <LinearGradient
          colors={[
            "transparent",
            "transparent",
            "transparent",
            "rgba(0,0,0,0.8)",
          ]}
          style={{ flex: 1, justifyContent: "center", position: "relative" }}
        >
          <ContainerBtns style={{ position: "absolute" }}>
            <LeftArrow />
            <ContainerRigthBtns>
              <BtnFollow>
                <TextFollow>Follow</TextFollow>
              </BtnFollow>
              <BtnMore />
            </ContainerRigthBtns>
          </ContainerBtns>

          <ContainerNameArtisti>
            <NameArtist>Dance Gavin Dance</NameArtist>
          </ContainerNameArtisti>
        </LinearGradient>
      </ImageBackground>
    </Container>
  );
};

export default Header;
