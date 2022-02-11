import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(48)}px;
  flex-direction: row;
  justify-content: space-around;

  background-color: ${({ theme }) => theme.colors.background_cads};
`;

export const ContainerIcon = styled.View`
  justify-content: center;
  align-items: center;
`;
export const Icon = styled.Image``;
export const IconText = styled.Text`
  color: ${({ theme }) => theme.colors.font_secondary};
  font-size: ${RFValue(8)}px;

  font-family: ${({ theme }) => theme.fonts.regular};
`;
