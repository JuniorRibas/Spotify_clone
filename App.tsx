import React from "react";

import { ThemeProvider } from "styled-components";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  GothicA1_400Regular,
  GothicA1_600SemiBold,
  GothicA1_700Bold,
  GothicA1_900Black,
} from "@expo-google-fonts/gothic-a1";

import ArtistiPage from "./src/pages/ArtistiPage";
import styles from "./src/styles/theme";

export default function App() {
  let [fontsLoaded] = useFonts({
    GothicA1_400Regular,
    GothicA1_600SemiBold,
    GothicA1_700Bold,
    GothicA1_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={styles}>
      <ArtistiPage />
    </ThemeProvider>
  );
}
