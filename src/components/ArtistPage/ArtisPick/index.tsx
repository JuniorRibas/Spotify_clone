import React from "react";
import { Image } from "react-native";

const Album1 = require("../../../assets/image2.png");
const Album2 = require("./../../../assets/image5.png");
const Album3 = require("./../../../assets/image6.png");
const Album4 = require("./../../../assets/image8.png");

import {
  Container,
  Title,
  ContainerCard,
  ContainerDescritions,
  NameAlbum,
  DateTimeAlbum,
  ContainerNewSong,
  ContainerCircle,
  TextNewSong,
  BtnDiscography,
  BtnText,
} from "./styles";

const ArtisPick: React.FC = () => {
  return (
    <Container>
      <Title>Artist’s Pick</Title>

      <Card newSong img={Album1} />

      <Title>Popular releases</Title>

      <Card img={Album1} />
      <Card img={Album2} />
      <Card img={Album3} />
      <Card img={Album4} />

      <BtnDiscography>
        <BtnText>SEE DISCOGRAPHY</BtnText>
      </BtnDiscography>
    </Container>
  );
};

interface CardProps {
  newSong?: boolean;
  img: any;
}

const Card: React.FC<CardProps> = ({ newSong, img }) => {
  return (
    <ContainerCard>
      <Image
        source={img}
        style={{ height: newSong ? 100 : 80, width: newSong ? 100 : 80 }}
      />

      <ContainerDescritions>
        {newSong && (
          <ContainerNewSong>
            <ContainerCircle></ContainerCircle>
            <TextNewSong>NEW SONG out now!</TextNewSong>
          </ContainerNewSong>
        )}

        <NameAlbum>Strawberry’s Wake</NameAlbum>
        <DateTimeAlbum newSong={newSong}>Single New Release</DateTimeAlbum>
      </ContainerDescritions>
    </ContainerCard>
  );
};

export default ArtisPick;
