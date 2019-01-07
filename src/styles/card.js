import { StyleSheet } from 'react-native';
import { material, robotoWeights } from 'react-native-typography';

export default StyleSheet.create({
  title: {
    ...material.titleObject,
    ...robotoWeights.regular,
    fontSize: 24,
    paddingLeft:16,
    paddingTop: 16
  }
});