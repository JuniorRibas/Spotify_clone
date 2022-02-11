import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export const Container = styled.View`
  height: ${RFValue(50)}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background_cads};
  flex-direction: row;
`;

export const AlbumImage = styled.Image``;

export const ContainerDetais = styled.View`
  flex-direction: row;
  height: ${RFValue(50)}px;
  width: ${RFValue(290)}px;
  justify-content: space-between;
  align-items: center;

  margin-left: 5px;
`;

export const DetailsArtist = styled.View`
  flex-direction: row;
`;

export const NameMusic = styled.Text`
  color: ${({ theme }) => theme.colors.font_primary};
  font-size: ${RFValue(10)}px;

  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const NameArtist = styled.Text`
  color: ${({ theme }) => theme.colors.font_secondary};
  font-size: ${RFValue(10)}px;

  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const ContainerIcons = styled.View`
  flex-direction: row;

  justify-content: center;
  align-items: center;
`;

export const IconLike = styled(AntDesign).attrs({
  name: "hearto",
  size: RFValue(24),
})`
  color: ${({ theme }) => theme.colors.icon_selected};
`;

export const IconPlay = styled(Entypo).attrs({
  name: "controller-play",
  size: RFValue(24),
})`
  color: ${({ theme }) => theme.colors.icon_selected};
  margin-left: 12px;
`;

export const ContainerDetaisPlayer = styled.View``;

export const ContainerDevices = styled.View`
  flex-direction: row;

  align-items: center;
`;

export const DevicesText = styled.Text`
  color: ${({ theme }) => theme.colors.font_primary};
  font-size: ${RFValue(10)}px;

  font-family: ${({ theme }) => theme.fonts.bold};

  margin-left: 5px;
`;
