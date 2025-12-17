import React, { useEffect, useRef } from "react";
import { View, Animated, Image } from "react-native";

export default function SplashScreen({ navigation }: any) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loopAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 700,
          useNativeDriver: true,
        }),
      ])
    );

    loopAnimation.start();

    const timeout = setTimeout(() => {
      loopAnimation.stop();
      navigation.replace("Home");
    }, 5000);

    return () => {
      clearTimeout(timeout);
      loopAnimation.stop();
    };
  }, [fadeAnim, navigation]);

  return (
    <View
      className="flex-1 bg-blue_whitish justify-center items-center relative">
      <Animated.View style={{ opacity: fadeAnim }}>
        <Image
          source={require("../../assets/images/logo.jpeg")}
          className="w-60"
          resizeMode="contain"
        />
      </Animated.View>
    </View>
  );
}
