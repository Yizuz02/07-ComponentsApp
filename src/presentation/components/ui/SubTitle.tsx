
import { Text } from "react-native"
import { globalStyles } from "../../../config/theme/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

interface Props {
    text: string;
    safe?: boolean;
    backgroundColor: string;
}


export const SubTitle = ({text,safe=false,backgroundColor}:Props) => {
  
    const {colors} = useContext(ThemeContext)
    const {top} = useSafeAreaInsets();
  
    return (
        <Text style={{
            ...globalStyles.subTitle,
            marginTop: safe ? top : 0,
            marginBottom: 10,
            backgroundColor: backgroundColor,
            color: colors.text
        }}>
            {text}
        </Text>
  )
}