import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  height: ${RFValue(100)}px;
  justify-content: space-between;
  align-items: center;
`;

export const TextCountPlays = styled.Text`
  color: ${({ theme }) => theme.colors.icon_selected};
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const ContainerBtn = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.background_secondary};

  align-items: center;
  justify-content: center;

  height: ${RFValue(45)}px;
  width: ${RFValue(177)}px;

  border-radius: 26px;
`;

export const TextBtn = styled.Text`
  color: ${({ theme }) => theme.colors.icon_selected};
`;
