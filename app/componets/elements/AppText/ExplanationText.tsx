import { Pressable, StyleProp, TextStyle, View } from "react-native";
import { memo, useRef, useState } from "react";
import AppText from "./AppText";
import { useAppContext } from "../../../context/AppContext";

type ExplanationTextProps = {
  text: string;
  textSize?: number;
  readMoreTextSize?: number;
  textStyle?: StyleProp<TextStyle>;
  readMoreTextStyle?: StyleProp<TextStyle>;
  maxLines?: number;
  onReadMorePress?: () => void;
};

const ExplanationText = (
  ({ text, textSize = 14, readMoreTextSize = 12, textStyle, readMoreTextStyle, maxLines = 2, onReadMorePress }: ExplanationTextProps) => {
    const [measured, setMeasured] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const {colors} = useAppContext();

    return (
      <View>
        <AppText
          size={textSize}
          numberOfLines={measured ? maxLines : undefined}
          ellipsizeMode="tail"
          style={[{ textAlign: "center", color: colors.plhTextColor }, textStyle]}
          onTextLayout={(e) => {
            if (!measured) {
            const lines = e.nativeEvent.lines.length;
            // console.log("actual lines:", lines);

            if (lines > maxLines) {
                setIsOverflowing(true);
            }
            setMeasured(true);
            }
            }}
        >
          {text}
        </AppText>

        {isOverflowing && (
          <Pressable onPress={onReadMorePress}>
            <AppText
              size={readMoreTextSize}
              style={[{ textAlign: "center", color: colors.primary }, readMoreTextStyle]}
            >
              Read more
            </AppText>
          </Pressable>
        )}
      </View>
    );
  }
);

export default ExplanationText;
