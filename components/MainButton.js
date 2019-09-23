//Can also create MainButton.android.js and MainButton.ios.js to save platfrom specific code on both platforms. RN internally identifies the separate files and runs on respective platforms. Import only MainButton.js where the component needs to be used
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";
import Colors from "../constants/colors";

const MainButton = props => {
  let ButtonComponent = TouchableNativeFeedback;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    ButtonComponent = TouchableOpacity;
  }

  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 18
  },
  buttonContainer: {
    borderRadius: 25,
    overflow: "hidden"
  }
});

export default MainButton;
