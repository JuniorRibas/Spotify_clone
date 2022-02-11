import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  height: ${RFValue(180)}px;
`;

export const ContainerBtns = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  flex: 1;

  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: ${RFValue(100)}px;
`;

export const LeftArrow = styled(AntDesign).attrs({ name: "arrowleft" })`
  color: ${({ theme }) => theme.colors.icon_selected};
  font-size: ${RFValue(20)}px;
`;

export const ContainerRigthBtns = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BtnFollow = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.btn_transparent};
  height: ${RFValue(20)}px;
  width: ${RFValue(50)}px;

  justify-content: center;
  align-items: center;

  border-radius: 5px;
`;

export const TextFollow = styled.Text`
  color: ${({ theme }) => theme.colors.icon_selected};
  font-size: ${RFValue(10)}px;

  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const BtnMore = styled(Feather).attrs({ name: "more-vertical" })`
  color: ${({ theme }) => theme.colors.icon_selected};
  font-size: ${RFValue(20)}px;
`;

export const NameArtist = styled.Text`
  color: ${({ theme }) => theme.colors.icon_selected};
  font-size: ${RFValue(45)}px;
  text-align: center;

  margin-top: 20px

  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const ContainerNameArtisti = styled.View`
  justify-content: center;
  align-items: center;
`;
