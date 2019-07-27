import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface WidgetProps {
  text: string,
} 


export default function Widget(props:WidgetProps) {
  return(
    <View>
      <Text style={styles.widget} testID="widget-text">{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  widget: {
    color: "#1B95E0",
    width: "100%",
    textAlign: "center",
  },
});