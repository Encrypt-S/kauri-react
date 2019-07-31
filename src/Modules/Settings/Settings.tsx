//framework
import React, { Component } from "react"
import { connect } from 'react-redux'
import { Button, StyleSheet, Text, View } from "react-native"

//language
import i18n from "../../Components/Language/i18n"
import { English, German } from "./Settings.lang"
import { Translation } from 'react-i18next';

//state
import { AppState } from '../../Store'
import { DisplayUnits, DisplayCurrencies, DisplayLanguage } from '../../Store/Types/Settings.types'
import { SettingsState } from "../../Store/Types/Settings.types"
import { updateDisplayCurrency, updateDisplayUnits, updateDisplayLanguage } from "../../Store/Actions/Settings.actions"

//modules & components
// @TODO

//interfaces
interface SettingsProps {
  settings: SettingsState,
  updateDisplayCurrency: typeof updateDisplayCurrency,
  updateDisplayUnits: typeof updateDisplayUnits,
  updateDisplayLanguage: typeof updateDisplayLanguage,
}


export class SettingsModule extends Component<SettingsProps> {

  constructor(props:SettingsProps) {
    super(props)
    
    i18n.addResources('en', 'settings', English)
    i18n.addResources('de', 'settings', German)
  
  }

  render(){

    const { displayCurrency, displayUnits, displayLanguage } = this.props.settings
    const { updateDisplayCurrency, updateDisplayUnits, updateDisplayLanguage } = this.props

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
          <Button testID="currency-nav" onPress={() => updateDisplayCurrency(DisplayCurrencies.NAV)} title="Use NAV"></Button>
          <Button testID="currency-btc" onPress={() => updateDisplayCurrency(DisplayCurrencies.BTC)} title="Use BTC"></Button>
          <Text testID="current-currency">Using {displayCurrency}</Text>
        </View>

        <View>
          <Text style={styles.title} testID="displayUnits">
            <Translation>{ (t) => t('settings:displayUnits')}</Translation>
          </Text>
          <Button testID="units-whole" onPress={() => updateDisplayUnits(DisplayUnits.WHOLE)} title="Use Whole Units"></Button>
          <Button testID="units-micro" onPress={() => updateDisplayUnits(DisplayUnits.MICRO)} title="Use Micro Units"></Button>
          <Button testID="units-milli" onPress={() => updateDisplayUnits(DisplayUnits.MILLI)} title="Use Milli Units"></Button>
          <Text testID="current-units">Using {displayUnits} Units</Text>
        </View>
        
        <View>
          <Button testID="i18n-german" onPress={() => updateDisplayLanguage(DisplayLanguage.GERMAN)} title="Use German"></Button>
          <Button testID="i18n-english" onPress={() => updateDisplayLanguage(DisplayLanguage.ENGLISH)} title="Use English"></Button>
          <Text testID="current-language">Using {displayLanguage}</Text>
        </View>
        
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

const mapDispatchToProps = (dispatch:any) => ({
  updateDisplayCurrency: (currency:DisplayCurrencies) => dispatch(updateDisplayCurrency(currency)),
  updateDisplayUnits: (units:DisplayUnits) => dispatch(updateDisplayUnits(units)),
  updateDisplayLanguage: (language:DisplayLanguage) => dispatch(updateDisplayLanguage(language))
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsModule)