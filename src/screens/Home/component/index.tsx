import GilroyText from "@app/components/text/GilroyText";
import useAnimatedState from "@app/hooks/useAnimatedState";
import {convertMoney} from "@app/utils/format";
import {width} from "@app/utils/scale";
import {Eye, EyeOff, PlusCircle} from "lucide-react-native";
import React from "react";
import {useForm, Controller} from "react-hook-form";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {yupResolver} from "@hookform/resolvers/yup";
import RNPickerSelect from "react-native-picker-select";

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
        marginHorizontal: 10,
        flexDirection: "row",
        backgroundColor: "white",
        // shadowColor: "#000",
        // shadowOffset: {
        //   width: 0,
        //   height: 1,
        // },
        // shadowOpacity: 0.22,
        // shadowRadius: 2.22,
        elevation: 7,
        padding: 10,
        //alignItems: "center",
        //justifyContent: "center",
        borderRadius: 12,
      }}>
      <GilroyText myFontStyle="Medium" style={{fontSize: 16}}>
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

export const OptionsAdd = () => {
  const {
    control,
    formState: {errors},
    handleSubmit,
    setValue,
  } = useForm<any>({
    mode: "onSubmit",
    resolver: yupResolver({}),
    defaultValues: {
      gender: "Nữ",
      // value...
    },
  });
  return (
    <View style={{padding: 20}}>
      <GilroyText myFontStyle="Bold" style={{textAlign: "center", color:"#646464"}}>Thêm chi tiêu</GilroyText>
      <View style={{borderRadius: 20, paddingTop: 10}}>
        <GilroyText
          myFontStyle="Medium"
          style={{color: "#646464", fontSize: 16, marginVertical: 5}}>
          Loại chi tiêu:
        </GilroyText>
        <RNPickerSelect
          style={pickerSelectStyles}
          onValueChange={value => console.log(value)}
          placeholder={{label: "Chọn loại chi tiêu", value: null}}
          items={[
            {label: "Football", value: "football"},
            {label: "Baseball", value: "baseball"},
            {label: "Hockey", value: "hockey"},
          ]}
        />
        <GilroyText
          myFontStyle="Medium"
          style={{
            color: "#646464",
            fontSize: 16,
            marginVertical: 5,
            marginTop: 15,
          }}>
          Số tiền:
        </GilroyText>
        <Controller
          control={control}
          rules={{required: true}}
          name={"Loại chi tiêu"}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput style={pickerSelectStyles.inputIOS} {...{onChange, onBlur, value}} />
          )}
        />
      </View>
    </View>
  );
};
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
