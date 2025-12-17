import React from 'react'
import { Text } from 'react-native'
import { useAppContext } from '../../../context/AppContext';

interface Props {
    children: React.ReactNode;
    style?: any;
    size?: number;
}

export default function AppText({
    children,
    style,
    size = 14,
    ...props
}: Props) {

    const { textScale, isDarkMode } = useAppContext();
    return (
        <Text
            {...props}
            style={[
                { fontSize: size * textScale, color: isDarkMode ? 'white' : 'black' },
                style,
            ]}
        >
            {children}
        </Text>
    )
}
