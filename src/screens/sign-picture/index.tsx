import * as React from "react";
import {Image, Text, StyleSheet, View} from "react-native";

export const IMAGE =
  "https://postimg.cc/7CX5QtM2";
export const OVERLAY =
  "https://postimg.cc/7CX5QtM2";

export const SignImage = () => {
  const [image, setImage] = React.useState<string | null>(null);
  const [imagePng, setImagePng] = React.useState<string | null>(null);

//   React.useEffect(() => {
//     const operation = async () => {
//       setImage(
//         await PhotoManipulator.overlayImage(IMAGE, OVERLAY, {x: 30, y: 65}),
//       );
//       setImagePng(
//         await PhotoManipulator.overlayImage(
//           IMAGE,
//           OVERLAY,
//           {x: 30, y: 65},
//           MimeType.PNG,
//         ),
//       );
//     };

//     operation()
//       .then(() => {})
//       .catch(console.log);
//   }, []);
  console.log("vvv", image);

  return (
    <View style={{flex: 1, backgroundColor: "white"}}>
      {typeof image === "string" ? (
        <Text style={styles.exampleDescription}>JPEG</Text>
      ) : null}
      {typeof image === "string" ? (
        <Image
          testID="overlayImageResult"
          style={styles.image}
          source={{uri: image}}
        />
      ) : null}
      {typeof imagePng === "string" ? (
        <Text style={styles.exampleDescription}>PNG</Text>
      ) : null}
      {typeof imagePng === "string" ? (
        <Image
          testID="overlayImagePngResult"
          style={styles.image}
          source={{uri: imagePng}}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  sectionTitle: {
    fontSize: 24,
    marginHorizontal: 8,
    marginTop: 24,
  },
  exampleContainer: {
    padding: 16,
    marginVertical: 4,
    backgroundColor: "#FFF",
    borderColor: "#EEE",
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  exampleTitle: {
    fontSize: 18,
  },
  exampleDescription: {
    color: "#333333",
    marginBottom: 16,
  },
  exampleInnerContainer: {
    borderColor: "#EEE",
    borderTopWidth: 1,
    paddingTop: 16,
  },
  image: {
    width: "100%",
    aspectRatio: 1120 / 800,
    paddingHorizontal: 20,
  },
});
