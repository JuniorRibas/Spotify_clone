import React from "react";
import { View, Image } from "react-native";

import {
  Container,
  ContainerTitlePopular,
  TextTitle,
  ContainerCard,
  NumberText,
  ContainerDescrition,
  NomeMusic,
  ContainerNumberPlays,
  ContainerType,
  Type,
  NumerPlays,
  IconsMore,
  ContainerNameDescrition,
} from "./styles";

import Img from "./../../../assets/explicit.png";

const Popular: React.FC = () => {
  return (
    <Container>
      <ContainerTitlePopular>
        <TextTitle>Popular</TextTitle>
      </ContainerTitlePopular>

      <Cards name="Prisoner" plays="1,315,519" number="1" active />
      <Cards name="We Own The Night" plays="1,315,519" number="2" />
      <Cards name="Head Hunter" plays="1,315,519" number="3" />
      <Cards name="Son of Robot" plays="1,315,519" number="4" />
      <Cards name="Care" plays="1,315,519" number="5" />
    </Container>
  );
};

interface CardProps {
  active?: boolean;
  name: string;
  plays: string;
  number: string;
}

const Cards: React.FC<CardProps> = ({ active, name, plays, number }) => {
  return (
    <ContainerCard>
      <NumberText>{number}</NumberText>
      <ContainerDescrition>
        <ContainerNameDescrition>
          <NomeMusic active={active}>{name}</NomeMusic>
          <ContainerNumberPlays>
            <Image source={Img} style={{ height: 13, width: 13 }} />
            <NumerPlays>{plays}</NumerPlays>
          </ContainerNumberPlays>
        </ContainerNameDescrition>
        <IconsMore />
      </ContainerDescrition>
    </ContainerCard>
  );
};

export default Popular;
