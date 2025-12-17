import { Pressable, Text, View } from "react-native";
import AppText from "../elements/AppText/AppText";
import { useAppContext } from "../../context/AppContext";
import BackArrow from "../elements/BackArrow/BackArrow";
import { App_Name_In_Punjabi } from "../../utils/constant";

export default function ScreenHeaders() {
    const { setAppTextScale, textScale,colors } = useAppContext();
    return (
        <>
            <View className="h-16 bg-slate-50  flex-row items-center justify-between p-3">
                <View>
                    <BackArrow />
                </View>
                <AppText size={17} style={{ color: colors.primary }}>{App_Name_In_Punjabi}</AppText>
                <View className="flex-row justify-between">
                    <Pressable onPress={() => setAppTextScale(textScale - 0.1)}
                        className="bg-blue-200  rounded-full mr-4 w-12 flex-row items-center justify-center"
                    >
                        <Text style={{ fontSize: 20 }}>-</Text>
                    </Pressable>
                    <Pressable onPress={() => setAppTextScale(textScale + 0.1)}
                        className="bg-blue-200 rounded-full w-12 flex-row items-center justify-center" >
                        <Text style={{ fontSize: 20 }}>+</Text>
                    </Pressable>
                </View>
            </View>
        </>
    )
}
