import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

interface ActiveMusicProps {
  active?: boolean;
}

export const Container = styled.View`
  margin-top: ${RFValue(50)}px;
  align-items: center;
`;

export const ContainerTitlePopular = styled.View``;

export const TextTitle = styled.Text`
  color: ${({ theme }) => theme.colors.icon_selected};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const ContainerCard = styled.View`
  flex-direction: row;
  align-items: center;

  width: ${RFPercentage(45)}px;

  margin-bottom: 16px;
`;

export const NumberText = styled.Text`
  color: ${({ theme }) => theme.colors.icon_selected};
  font-size: ${RFValue(14)}px;

  height: ${RFValue(15)}px;
  width: ${RFValue(16)}px;
`;

export const ContainerDescrition = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const ContainerNameDescrition = styled.View``;

export const NomeMusic = styled.Text<ActiveMusicProps>`
  color: ${({ theme, active }) =>
    active ? theme.colors.font_selected : theme.colors.font_primary};
  font-size: ${RFValue(14)}px;
`;

export const ContainerNumberPlays = styled.View`
  flex-direction: row;
  align-items: center;

  /* background-color: ${({ theme }) => theme.colors.icon_selected}; */
`;

export const ContainerType = styled.View`
  background-color: ${({ theme }) => theme.colors.icon_primary};

  height: ${RFValue(12)}px;
  width: ${RFValue(12)}px;
`;

export const Type = styled.Text`
  color: ${({ theme }) => theme.colors.font_black};
  font-size: ${RFValue(10)}px;
`;

export const NumerPlays = styled.Text`
  color: ${({ theme }) => theme.colors.icon_selected};
  font-size: ${RFValue(10)}px;

  margin-left: 5px;
`;

export const IconsMore = styled(Feather).attrs({ name: "more-vertical" })`
  color: ${({ theme }) => theme.colors.icon_selected};
  font-size: ${RFValue(14)}px;
`;
