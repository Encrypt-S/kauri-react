import React, { Component } from "react";
import i18n from "../../i18n";
import { Button, StyleSheet, Text, View } from "react-native";
import { English, German } from "./Home.lang"
import { Translation } from 'react-i18next';

interface HomeProps {
    test: string,
} 

class HomeModule extends Component {

  state = {
    language: 'en',
  }

  constructor(props:HomeProps) {
    super(props)
    
    const { language } = this.state

    i18n.addResources('en', 'home', English)
    i18n.addResources('de', 'home', German)
    i18n.changeLanguage(language)
  
  }

  changeLanguage(lng:string) {
    this.setState({
      language: lng,
      })
    i18n.changeLanguage(lng);
  };

  render(){
    return(
      <View>
        <Text testID="title" style={styles.title}>
          <Translation>{ (t) => t('home:title')}</Translation>
        </Text>
        <Text testID="description" style={styles.title}>
          <Translation>{ (t) => t('home:description')}</Translation>
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

export default HomeModule