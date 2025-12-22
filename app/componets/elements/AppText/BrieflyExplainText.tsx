import { useAppContext } from "../../../context/AppContext";
import { Explanation } from "../../../utils/type";
import AppText from "./AppText"

type BrieflyExplainTextProps = {
  textObj: Explanation;
  textSize?: number;
};
const BrieflyExplainText: React.FC<BrieflyExplainTextProps> = ({ textObj, textSize = 14 }) => {
  const {colors} = useAppContext();
  return (
    <AppText
      size={textSize}
      style={[{ textAlign: "center", color: colors.plhTextColor }]}

    >
      {textObj?.text}
    </AppText>
  )

}

export default BrieflyExplainText;