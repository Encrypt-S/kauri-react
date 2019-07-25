import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "src/i18n";
import { Button, StyleSheet, Text, View } from "react-native";

import { English, German } from "./home.lang"

export default function HomeModule(props) {
  const { t } = useTranslation();

  i18n.addResources('en', 'home', English)
  i18n.addResources('de', 'home', German)

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return(
    <View>
      <Text style={styles.title}>{t('home:title')}</Text>
      <Text style={styles.title}>{t('home:description')}</Text>
      <Button onPress={() => changeLanguage("de")} title="Use German"></Button>
      <Button onPress={() => changeLanguage("en")} title="Use English"></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
});