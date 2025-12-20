import React, { useState } from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native';
import AudioListingHeader from '../../headers/AudioListingHeader';
import { SIZES } from '../../../utils/theme';
import PaathList from '../../lists/PaathList';
import PaathCard from '../../cards/PaathCard';
import BottomSheet from '../../BottomSheets/BottomSheet';
import GradientBg from '../../backgrounds/GradientBg';
import { withOpacity } from '../../../utils/helper';

const InnerSundarGutkaDetail = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
        <GradientBg colorsList={["#ffffff", "#ffffff"]}>
            <View className='flex-1' style={{ flex: 1, }}>
                <View >
                    <Pressable onPress={() => setOpen(true)}>
                        <Text>Open Bottom Sheet</Text>
                    </Pressable>
                </View>
                <View>

                    <AudioListingHeader />
                </View>

                <ScrollView style={{ flex: 1, }}>
                    <View style={{ paddingHorizontal: SIZES.screenDefaultPadding, paddingVertical: SIZES.screenDefaultPadding, gap: SIZES.xsSmall }}>
                        <PaathCard punjabiText="ੴ ਸਤਿ ਨਾਮੁ ਕਰਤਾ ਪੁਰਖੁ ਨਿਰਭਉ ਨਿਰਵੈਰੁ ਅਕਾਲ ਮੂਰਤਿ ਅਜੂਨੀ ਸੈਭੰ ਗੁਰ ਪ੍ਰਸਾਦਿ ॥"  englishText="One Universal Creator God. The Name Is Truth. Creative Being Personified. No Fear. No Hatred. Image Of The Undying, Beyond Birth, Self-Existent. By Guru's Grace ~ "/>
                        <PaathCard punjabiText="ੴ ਸਤਿ ਨਾਮੁ ਕਰਤਾ ਪੁਰਖੁ ਨਿਰਭਉ ਨਿਰਵੈਰੁ ਅਕਾਲ ਮੂਰਤਿ ਅਜੂਨੀ ਸੈਭੰ ਗੁਰ ਪ੍ਰਸਾਦਿ ॥" hindiText="हिंदी हिंदी हिंदी हिंदी हिंदी हिंदी हिंदी हिंदी हिंदी " />
                    </View>
                </ScrollView>

            </View>
        </GradientBg>
        <BottomSheet isOpen={open} onClose={() => setOpen(false)}>
            <View style={{ paddingHorizontal: SIZES.screenDefaultPadding, backgroundColor: '#FFFF2200' }}>
                <Text style={{ paddingVertical: 12 }}>List Item Title</Text>
                <Text style={{ paddingVertical: 12 }}>List Item Title</Text>
                <Text style={{ paddingVertical: 12 }}>List Item Title</Text>
                <Text style={{ paddingVertical: 12 }}>List Item Title</Text>
                <Text style={{ paddingVertical: 12 }}>List Item Title</Text>
                <Text style={{ paddingVertical: 12 }}>List Item Title5</Text>
            </View>
        </BottomSheet>
        </>
    )
}

export default InnerSundarGutkaDetail;
