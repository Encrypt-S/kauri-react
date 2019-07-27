import React, { Component } from "react";
import { connect } from 'react-redux'
import i18n from "../../i18n";
import { Button, StyleSheet, Text, View } from "react-native";
import { English, German } from "./Settings.lang"
import { Translation } from 'react-i18next';
import { DisplayUnits, DisplayCurrencies } from '../../Store/Types'
import { SettingsState } from "../../Store/Types"
import { updateDisplayCurrency, updateDisplayUnits } from "../../Store/Actions"
import { AppState } from '../../Store'

interface SettingsProps {
  settings: SettingsState,
  updateDisplayCurrency: typeof updateDisplayCurrency,
  updateDisplayUnits: typeof updateDisplayUnits,
}

class SettingsModule extends Component<SettingsProps> {

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

  changeCurrency(currency:DisplayCurrencies) {
    console.log(`currency ${currency}`)
    updateDisplayCurrency(currency)
  };

  render(){

    const { displayCurrency, displayUnits } = this.props.settings

    return(
      <View>
        <Text style={styles.title} testID="title">
          <Translation>{ (t) => t('settings:title')}</Translation>
        </Text>
        <Text style={styles.title} testID="description">
          <Translation>{ (t) => t('settings:description')}</Translation>
        </Text>
        <View>
          <Text style={styles.title} testID="displayCurrency">
            <Translation>{ (t) => t('settings:displayCurrency')}</Translation>
          </Text>
          <Button testID="currency-nav" onPress={() => this.changeCurrency(DisplayCurrencies.NAV)} title="Use NAV"></Button>
          <Button testID="currency-btc" onPress={() => this.changeCurrency(DisplayCurrencies.BTC)} title="Use BTC"></Button>
          <Text>Using {displayCurrency}</Text>
        </View>
        
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

const mapStateToProps = (state: AppState) => ({
  settings: state.settings,
})


export default connect(mapStateToProps)(SettingsModule)