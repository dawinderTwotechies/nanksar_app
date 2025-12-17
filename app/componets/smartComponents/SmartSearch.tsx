import React, { useEffect, useRef, useState } from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import { SEARCH } from '../../assets/svgs';
import { useAppContext } from '../../context/AppContext';
import { withOpacity } from '../../utils/helper';
interface SmartSearchProps {
  type?: string;
  style?: StyleProp<ViewStyle>;
  searhIconWidth?: number;
  searchIconHeight?: number;
  onPress?: (event: GestureResponderEvent) => void;
  onChangeText?: (text: string) => void; // ✅ renamed
}

const SmartSearch: React.FC<SmartSearchProps> = ({
  type = 'default',
  style,
  searhIconWidth = 24,
  searchIconHeight = 24,
  onPress,
  onChangeText, // ✅ renamed
}) => {
  const { colors, textScale } = useAppContext();
  const [text, setText] = useState('');
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null); 

  useEffect(() => {
    if (!onChangeText) return;

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      onChangeText(text); // ✅ debounced callback
    }, 300);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [text]);

  return (
    <View>
      <View>
        <SEARCH
          color={colors.primary}
          width={searhIconWidth}
          height={searchIconHeight}
        />
      </View>

      <View
        className="w-[200px] h-[30px] absolute top-0 right-0 rounded-full px-[8px] flex-row items-center"
        style={{ backgroundColor: withOpacity(colors.primary, 0.08) }}
      >
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Search"
          placeholderTextColor={withOpacity(colors.primary, 0.5)}
          className="flex-1 text-[12px]"
          style={{ color: colors.primary }}
        />
      </View>
    </View>
  );
};

export default SmartSearch;
