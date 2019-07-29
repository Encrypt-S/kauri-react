//framework
import React, { Component } from "react";
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from "react-native";

//language
import i18n from "../../i18n";
import { English, German } from "./Wizard.lang"
import { Translation } from 'react-i18next';

//state
import { SettingsState } from "../../Store/Types"
import { AppState } from '../../Store'

//modules & components
// @TODO

//interfaces
interface WizardProps {
  settings: SettingsState,
} 

export class WizardModule extends Component<WizardProps> {

  constructor(props:WizardProps) {
    super(props)
    
    i18n.addResources('en', 'home', English)
    i18n.addResources('de', 'home', German)
  }

  render(){
    const { displayCurrency, displayUnits } = this.props.settings
    return(
      <View>
        <Text testID="title" style={styles.title}>
          <Translation>{ (t) => t('home:title')}</Translation>
        </Text>
        <Text testID="description" style={styles.title}>
          <Translation>{ (t) => t('home:description')}</Translation>
        </Text>
        <View>
          <Text>Using {displayUnits} {displayCurrency} Units</Text>
        </View>
      </View>
    )
  }
}//render

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

export default connect(mapStateToProps)(WizardModule)