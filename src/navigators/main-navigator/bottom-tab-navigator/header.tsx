import {images} from "@app/assets/images";
import GilroyText from "@app/components/text/GilroyText";
import AppActions from "@app/redux/app/actions";
import LottieView from "lottie-react-native";
import {Image, TouchableOpacity, View} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {useDispatch} from "react-redux";
import {convertMoney} from "@app/utils/format";
import useAnimatedState from "@app/hooks/useAnimatedState";
import {Eye, EyeOff} from "lucide-react-native";

export const Header = (props: any) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useAnimatedState({});
  const onClick = () => {
    dispatch(AppActions.toggleMenu(true));
  };
  return (
    <LinearGradient
      style={{
        //height: 60,
        paddingTop: 20,
      }}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={["#FFFF", "#FFFF"]}>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 20,
          alignItems: "center",
          marginTop: 5,
        }}>
        <Image
          source={images.close}
          style={{width: 30, height: 30, backgroundColor: "red"}}
        />
        <View style={{flexDirection: "column", marginLeft: 15}}>
          <GilroyText myFontStyle="Bold" style={{fontSize: 20}}>
            {props.route.name === "HOME" ? "Chào buổi sáng" : props.route.name}
          </GilroyText>
          <View style={{ flexDirection:'row'}}>
            <GilroyText
              myFontStyle="SemiBold"
              style={{marginRight: 5, fontSize: 16, marginLeft: 2, color:"#646464"}}>
              Số dư: {isOpen ? "******" : convertMoney(10000000)}
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
        </View>
        <TouchableOpacity
          onPress={onClick}
          style={{position: "absolute", right: 0}}>
          <LottieView
            style={{
              width: 60,
              height: 60,
            }}
            source={require("@app/assets/lottie/menu.json")}
            autoPlay
            speed={1}
            duration={2000}
            loop
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
