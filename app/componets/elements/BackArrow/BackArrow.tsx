import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';

import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useAppContext } from '../../../context/AppContext';
import { ArrowLeft } from '../../../assets';

type BackArrowProps = {
    size?: number;
    color?: string;
    style?: ViewStyle;
    onPress?: () => void;
};

const BackArrow: React.FC<BackArrowProps> = ({
    size = 24,
    color = '#000',
    style,
    onPress,
}) => {
    const navigation = useNavigation<NavigationProp<any>>();
    const { textScale } = useAppContext();

    const handlePress = () => {
        if (onPress) {
            onPress();
        } else if (navigation.canGoBack()) {
            navigation.goBack();
        }
    };

    return (
        <TouchableOpacity
            onPress={handlePress}
            style={[styles.container, style]}
            activeOpacity={0.7}
        >
            <ArrowLeft width={size * textScale} height={size * textScale} color={color} />
        </TouchableOpacity>
    );
};

export default BackArrow;

const styles = StyleSheet.create({
    container: {
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
