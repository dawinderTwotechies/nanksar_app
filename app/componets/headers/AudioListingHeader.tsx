import React from 'react'
import { StyleSheet, View } from 'react-native'
import GoBack from '../smartComponents/GoBack'
import { useAppContext } from '../../context/AppContext';
import { withOpacity } from '../../utils/helper';
import { SETTINGS } from '../../assets/svgs';
import SmartSearch from '../smartComponents/SmartSearch';


const AudioListingHeader = () => {
  const { textScale, colors, setTheme } = useAppContext();
//   setTheme('primary');
  return (
    <>
        <View style={[{backgroundColor:withOpacity(colors.primary,0.08)},styles.mainHeaderContainer]} className={`w-full flex flex-row items-center justify-between px-[20px] py-[10px]`}>
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

    }
})
export default AudioListingHeader
