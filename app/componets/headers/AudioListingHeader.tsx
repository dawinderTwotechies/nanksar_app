import React from 'react'
import { GestureResponderEvent, StyleSheet, View } from 'react-native'
import GoBack from '../smartComponents/GoBack'
import { useAppContext } from '../../context/AppContext';
import { withOpacity } from '../../utils/helper';
import { SETTINGS } from '../../assets/svgs';
import SmartSearch from '../smartComponents/SmartSearch';
import PaathList from '../lists/PaathList';
import { SIZES } from '../../utils/theme';
import { navigate } from '../../utils/NavigationUtils';


const AudioListingHeader = () => {
  const { textScale, colors, setTheme } = useAppContext();
//   setTheme('primary');
  return (
    <>
        <View style={[{backgroundColor:colors.secondary},styles.mainHeaderContainer]} className={`w-full flex flex-row items-center justify-between py-[10px]`}>
            <View>
                <GoBack />
            </View>
            <View className="flex flex-row items-center justify-center gap-[3px]">
                <View>
                    <SmartSearch searhIconWidth={30} searchIconHeight={30} />
                </View>
                <SETTINGS color={colors.primary} height={30} width={30} />
            </View>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    mainHeaderContainer:{
      paddingHorizontal: SIZES.screenDefaultPadding,
    }
})
export default AudioListingHeader
