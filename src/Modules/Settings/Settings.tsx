import React, { Component } from "react";
import i18n from "../../i18n";
import { Button, StyleSheet, Text, View } from "react-native";
import { English, German } from "./Settings.lang"
import { Translation } from 'react-i18next';

interface SettingsProps {
    test: string,
} 

class SettingsModule extends Component {

  state = {
    language: 'en',
  }

  constructor(props:SettingsProps) {
    super(props)
    
    const { language } = this.state

    i18n.addResources('en', 'settings', English)
    i18n.addResources('de', 'settings', German)
    i18n.changeLanguage(language)
  
  }

  changeLanguage(lng:string) {
    this.setState({
      language: lng,
      })
    i18n.changeLanguage(lng)
  };

  render(){
    const { language } = this.state;
    return(
      <View>
        <Text style={styles.title} testID="title">
          <Translation>{ (t) => t('settings:title')}</Translation>
        </Text>
        <Text style={styles.title} testID="description">
          <Translation>{ (t) => t('settings:description')}</Translation>
        </Text>
        <Button testID="i18n-german" onPress={() => this.changeLanguage("de")} title="Use German"></Button>
        <Button testID="i18n-english" onPress={() => this.changeLanguage("en")} title="Use English"></Button>
      </View>
    )
  }
 
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 15,
    marginVertical: 10,
    textAlign: "center"
  },
});

export default SettingsModule