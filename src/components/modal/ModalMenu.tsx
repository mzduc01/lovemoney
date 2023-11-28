import Colors from "@app/assets/colors/Colors";
import {images} from "@app/assets/images";
import AppActions from "@app/redux/app/actions";
import {RootState} from "@app/redux/store";
import {moderateScale, scale} from "@app/utils/scale";
import {useNavigation} from "@react-navigation/native";
import React from "react";
import {
  Image,
  ModalProps,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Modal from "react-native-modal/dist/modal";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {useDispatch, useSelector} from "react-redux";

interface IProps extends ModalProps {}

const ModalMenu = (props: IProps) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const visible = useSelector(
    (state: RootState) => state.appReducer?.visibleMenu,
  );

  const onClose = () => {
    dispatch(AppActions.toggleMenu(false));
  };
  const insets = useSafeAreaInsets();

  return (
    <Modal
      isVisible={visible}
      animationIn={"slideInRight"}
      animationOut={"slideOutRight"}
      backdropOpacity={0}
      style={{margin: 0}}
      statusBarTranslucent>
      <View
        // onPress={onClose}
        style={[styles.viewContain, ,]}>
        <LinearGradient
          style={{
            width: scale(116),
            height: "100%",
            backgroundColor: "#2CCAC5",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={["#FFFF", "#E4F7E5"]}>
          <TouchableWithoutFeedback onPress={onClose}>
            <Image
              tintColor={"#1C1C1C"}
              source={images.close}
              style={{
                width: scale(19.79) * 1.4,
                height: scale(18) * 1.4,
                marginTop: scale(29) + (insets.top - 10),
              }}
            />
          </TouchableWithoutFeedback>
          {/* <View style={{alignItems: "center"}}>
            <TouchableOpacity
              onPress={() => {
                navigate(Routes.MAIN_BOTTOM_TAB);
                onClose();
              }}
              style={{alignItems: "center"}}>
              <Image
                source={images.heart}
                style={{
                  width: scale(29.18),
                  height: scale(27.58),
                  marginBottom: scale(7),
                }}
              />
              <NotoSanText
                style={{
                  fontSize: moderateScale(12),
                  color: "white",
                  marginBottom: scale(42.6),
                }}>
                マッチング
              </NotoSanText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigate(Routes.RC_BOTTOM_TAB);
                onClose();
              }}
              style={{alignItems: "center"}}>
              <Image
                source={images.work}
                style={{
                  width: scale(32.14),
                  height: scale(27.98),
                  marginBottom: scale(7),
                }}
              />
              <NotoSanText
                style={{
                  fontSize: moderateScale(12),
                  color: "white",
                  marginBottom: scale(42.6),
                }}>
                求人
              </NotoSanText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigate(Routes.COMMUNITY_BOTTOM_TAB);
                onClose();
              }}
              style={{alignItems: "center"}}>
              <Image
                source={images.comunication}
                style={{
                  width: scale(36.55),
                  height: scale(37.77),
                  marginBottom: scale(7),
                }}
              />
              <NotoSanText
                style={{
                  fontSize: moderateScale(12),
                  color: "white",
                  marginBottom: scale(42.6),
                }}>
                コミュニティ
              </NotoSanText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigate(Routes.SETTINGS);
                onClose();
              }}
              style={{alignItems: "center"}}>
              <Image
                source={images.setting}
                style={{
                  width: scale(30.19),
                  height: scale(30.19),
                  marginBottom: scale(7),
                }}
              />
              <NotoSanText
                style={{
                  fontSize: moderateScale(12),
                  color: "white",
                  marginBottom: scale(42.6) + insets.bottom,
                }}>
                各種設定
              </NotoSanText>
            </TouchableOpacity>
          </View> */}
        </LinearGradient>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textItem: {
    fontSize: moderateScale(12),
    fontWeight: "bold",
    color: Colors.black1,
    marginBottom: scale(13),
  },
  viewModal: {
    backgroundColor: "white",
    width: scale(155),
    position: "absolute",
    // paddingVertical: 7,
    paddingHorizontal: 10,
    right: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  viewContain: {
    flex: 1,
    // backgroundColor: "#000000" + hexTransparencies[63],
    alignItems: "flex-end",
  },
});
export default ModalMenu;
