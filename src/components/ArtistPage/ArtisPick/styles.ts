import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

interface NewSong {
  newSong: boolean;
}

export const Container = styled.View`
  margin-top: ${RFValue(50)}px;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.icon_selected};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};

  margin-top: 50px;
`;

export const ContainerCard = styled.View`
  height: ${RFValue(100)}px;
  width: ${RFPercentage(45)}px;

  flex-direction: row;

  align-items: center;
`;

export const ContainerDescritions = styled.View`
  margin-left: 10px;
`;

export const NameAlbum = styled.Text`
  color: ${({ theme }) => theme.colors.font_primary};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const DateTimeAlbum = styled.Text<NewSong>`
  color: ${({ theme, newSong }) =>
    newSong ? theme.colors.font_primary : theme.colors.font_secondary};
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.semibold};
`;

export const ContainerNewSong = styled.View`
  height: ${RFValue(24)}px;
  width: ${RFValue(160)}px;

  align-items: center;
  justify-content: center;

  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.background_white};

  border-radius: 17px;
`;

export const ContainerCircle = styled.View`
  height: ${RFValue(16)}px;
  width: ${RFValue(16)}px;

  background-color: ${({ theme }) => theme.colors.background_cads};

  border-radius: 8px;

  margin-right: 10px;
`;

export const TextNewSong = styled.Text``;

export const BtnDiscography = styled.TouchableOpacity`
  border: 2px solid white;

  border-radius: 20px;

  width: ${RFValue(184)}px;
  height: ${RFValue(29)}px;

  justify-content: center;
  align-items: center;

  margin-top: 10px;
  margin-bottom: 20px;
`;

export const BtnText = styled.Text`
  color: ${({ theme }) => theme.colors.font_primary};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
