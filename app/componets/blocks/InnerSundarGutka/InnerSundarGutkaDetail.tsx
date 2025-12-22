import React, { useEffect, useState } from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native';
import AudioListingHeader from '../../headers/AudioListingHeader';
import { SIZES } from '../../../utils/theme';
import PaathList from '../../lists/PaathList';
import PaathCard from '../../cards/PaathCard';
import BottomSheet from '../../BottomSheets/BottomSheet';
import GradientBg from '../../backgrounds/GradientBg';
import { formatScriptureData, withOpacity } from '../../../utils/helper';
import { Explanation, PaathCardData } from '../../../utils/type';
import { PAATH_DATA } from '../../../utils/constant';
import AppText from '../../elements/AppText/AppText';
import { useAppContext } from '../../../context/AppContext';
import BrieflyExplainText from '../../elements/AppText/BrieflyExplainText';



const InnerSundarGutkaDetail = () => {
    const { colors } = useAppContext();
    const [openBottomSheet, setOpenBottomSheet] = useState(false);
    const [bottomSheetContent, setBottomSheetContent] = useState<React.ReactNode | null>(null);
    useEffect(()=>{
        if(!bottomSheetContent) return;
        setOpenBottomSheet(true);

    }, [bottomSheetContent])


    const handleReadMorePress = (textObj: Explanation) => {
        // Handle the read more press action here
        // setOpen(true);
        console.log("Read more pressed:", textObj);
        setBottomSheetContent(
            <BrieflyExplainText textObj={textObj} textSize={14} />
        )
    }
    return (
        <>
            <GradientBg colorsList={["#ffffff", "#ffffff"]}>
                <View className='flex-1' style={{ flex: 1, }}>
                    <View>

                        <AudioListingHeader />
                    </View>

                    <ScrollView style={{ flex: 1, }}>
                        <View style={{ paddingHorizontal: SIZES.screenDefaultPadding, paddingVertical: SIZES.screenDefaultPadding, gap: SIZES.xsSmall }}>
                            {PAATH_DATA?.map((item: any, index: number) => {
                                const pathCardData = formatScriptureData(item);
                                return (
                                    <View key={index}>
                                        <PaathCard handleReadMorePress={handleReadMorePress} data={pathCardData} />
                                    </View>
                                )
                            })}
                            {/* <PaathCard data={{ title: "ਸੁੰਦਰ ਗੁਟਕਾ", engVersion: "Sundar Gutka", explanations: [{ text: "Sundar Gutka is a beautiful collection of hymns and prayers from the Sikh scriptures, designed for daily recitation and spiritual upliftment.", lang: "English" }] }} /> */}
                        </View>
                    </ScrollView>

                </View>
            </GradientBg>
            <BottomSheet isOpen={openBottomSheet} onClose={() => setOpenBottomSheet(false)}>
                <View style={{ paddingHorizontal: SIZES.screenDefaultPadding, backgroundColor: '#FFFF2200' }}>
                   {bottomSheetContent}
                </View>
            </BottomSheet>
        </>
    )
}

export default InnerSundarGutkaDetail;
