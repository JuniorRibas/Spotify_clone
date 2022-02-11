import React from "react";
import { Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import {
  Container,
  AlbumImage,
  ContainerDetais,
  DetailsArtist,
  ContainerDetaisPlayer,
  NameMusic,
  NameArtist,
  ContainerIcons,
  IconLike,
  IconPlay,
  ContainerDevices,
  DevicesText,
} from "./styles";

const Album = require("./../../assets/image2.png");
const Devices = require("./../../assets/devices.png");

const PlayerMini: React.FC = () => {
  return (
    <Container
      style={{
        elevation: 2,
      }}
    >
      <AlbumImage
        source={Album}
        style={{ height: RFValue(50), width: RFValue(50) }}
      />

      <ContainerDetais>
        <ContainerDetaisPlayer>
          <DetailsArtist>
            <NameMusic>Prisioner -</NameMusic>
            <NameArtist>Dance Gavin Dance </NameArtist>
          </DetailsArtist>

          <ContainerDevices>
            <Image
              source={Devices}
              style={{ height: RFValue(8.67), width: RFValue(11.92) }}
            />
            <DevicesText>Devices Available</DevicesText>
          </ContainerDevices>
        </ContainerDetaisPlayer>

        <ContainerIcons>
          <IconLike />
          <IconPlay />
        </ContainerIcons>
      </ContainerDetais>
    </Container>
  );
};

export default PlayerMini;
