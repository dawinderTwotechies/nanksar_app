import React from 'react'
import { GestureResponderEvent, Text, TouchableOpacity, View } from 'react-native';
import { PaathlistItem } from '../../utils/type';
import { useAppContext } from '../../context/AppContext';
import { ARROW_RIGHT } from '../../assets/svgs';
import AppText from '../elements/AppText/AppText';
import { withOpacity } from '../../utils/helper';


const PaathList: React.FC<PaathlistItem> = ({ punjabiText, hindiText, englishText, pageInfo, containerStyle, punjabiTextStyle, hindiTextStyle, englishTextStyle, pageInfoStyle, onPress }) => {
  const { textScale, colors, setTheme } = useAppContext();
  const handlePress = (event: GestureResponderEvent) => {
     if (onPress)
        onPress(event);
    };
  
  return (

    <TouchableOpacity activeOpacity={0.7} onPress={handlePress}>
      <View className='flex-row justify-between items-center py-1 w-full' style={[{ borderColor: withOpacity(colors.primary, 0.7), borderBottomWidth: 1, borderStyle: 'solid' },containerStyle]}>
        <View className='w-[95%]'>
          <View>
            <AppText size={16} style={[{ color: colors.plpTextColor,  },punjabiTextStyle]} numberOfLines={1} ellipsizeMode='tail'>
              {punjabiText}
            </AppText>
          </View>
          {hindiText && (
          <View>
            <AppText size={14} style={[{ color: colors.plhTextColor},hindiTextStyle]} numberOfLines={1} ellipsizeMode='tail'>
              {hindiText}
            </AppText>
          </View>

          )}
          {englishText && (
            <View>
              <AppText size={14} style={[{ color: colors.pleTextColor }, englishTextStyle]} numberOfLines={1} ellipsizeMode='tail'>
                {englishText}
              </AppText>
            </View>
          )}
          <View>
            <AppText size={12} style={[{ color: colors.plpiTextColor },pageInfoStyle]} numberOfLines={1} ellipsizeMode='tail'>
              {pageInfo}
            </AppText>
          </View>
        </View>
        <View className='w-[5%]'>
          <ARROW_RIGHT color={withOpacity(colors.primary, 0.7)} width={24} height={24} />
        </View>
      </View>
    </TouchableOpacity>
  )
}
export default PaathList;
