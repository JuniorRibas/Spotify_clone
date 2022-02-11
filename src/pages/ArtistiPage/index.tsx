import React from "react";
import { Text } from "react-native";
import ArtisPick from "../../components/ArtistPage/ArtisPick";
import Header from "../../components/ArtistPage/Header";
import Popular from "../../components/ArtistPage/Popular";
import SubHeader from "../../components/ArtistPage/SubHeader";
import CustomNavigateBottom from "../../components/CustomNavigateBottom";
import PlayerMini from "../../components/PlayerMini";

import { Container, ContainerScroll } from "./styles";

const ArtistiPage: React.FC = () => {
  return (
    <Container>
      <ContainerScroll>
        <Header />
        <SubHeader />
        <Popular />
        <ArtisPick />
      </ContainerScroll>
      <PlayerMini />
      <CustomNavigateBottom />
    </Container>
  );
};

export default ArtistiPage;
