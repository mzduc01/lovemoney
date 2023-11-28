import GilroyText from "@app/components/text/GilroyText";
import useAnimatedState from "@app/hooks/useAnimatedState";
import {convertMoney} from "@app/utils/format";
import { width } from "@app/utils/scale";
import {Eye, EyeOff} from "lucide-react-native";
import React from "react";
import {Text, TouchableOpacity, View} from "react-native";

export const FloatingButton = (props: any) => {
  const {onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 60,
        height: 60,
        borderRadius: 21,
        justifyContent: "center",
        backgroundColor: "#E4F7E5",
        position: "absolute",
        bottom: 30,
        right: 30,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
      }}>
      <Text
        style={{
          fontSize: 40,
          color: "#000",
          position: "absolute",
          alignSelf: "center",
        }}>
        +
      </Text>
    </TouchableOpacity>
  );
};

export const CurrentBalence = () => {
  const [isOpen, setIsOpen] = useAnimatedState({});
  return (
    <View
      style={{
        marginHorizontal: 20,
        flexDirection: "row",
        marginTop: 10,
        // width: width - 20,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 7,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
      }}>
      <GilroyText myFontStyle="Medium" style={{fontSize: 18}}>
        Số dư hiện tại:{" "}
      </GilroyText>
      <GilroyText myFontStyle="SemiBold" style={{marginRight: 5, fontSize: 20}}>
        {isOpen ? "******" : convertMoney(10000000)}
      </GilroyText>
      <TouchableOpacity
        onPress={() => setIsOpen(!isOpen)}
        style={{justifyContent: "center"}}>
        {isOpen ? (
          <Eye size={23} color="#1C1C1C" />
        ) : (
          <EyeOff size={23} color="#1C1C1C" />
        )}
      </TouchableOpacity>
    </View>
  );
};
