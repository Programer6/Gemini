import { StyleSheet, Text, View } from "react-native";
export default function Index() {

  return (
    <View style={style.container}>
      <Text style={style.heading}>pika will be a crow</Text>
      </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "darkblue",
  },
});

