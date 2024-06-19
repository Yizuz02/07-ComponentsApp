
import { Animated, Easing, Pressable, StyleSheet, Text, View } from "react-native"
import { colors } from "../../../config/theme/theme"
import { useAnimation } from "../../hooks/useAnimation"
import { CustomView } from "../../components/ui/CustomView";
import { Button } from "../../components/ui/Button";

export const Animation101Screen = () => {

    const {fadeIn,fadeOut,animatedOpacity,animatedTop,startMovingTopPosition} = useAnimation();

  return (
    <CustomView style={styles.container}>
        <Animated.View style={[
            styles.purpleBox,
            {
                opacity:animatedOpacity,
                transform: [{
                    translateY: animatedTop
                }]
            }
        ]}/>
        <Button
            text="FadeIn"
            onPress={()=>{
                fadeIn({});
                startMovingTopPosition({
                    initialPosition: -100,
                    easing: Easing.bounce,
                    duration: 750
                });
            }}
            styles={{marginTop: 10}}
        />
        <Button
            text="FadeOut"
            onPress={()=>fadeOut({})}
            styles={{marginTop: 10}}
        />
        {/*<Pressable onPress={} style={{marginTop: 10}}>
            <Text>FadeIn</Text>
        </Pressable>
        <Pressable onPress={()=>fadeOut({})} style={{marginTop: 10}}>
            <Text>FadeOut</Text>
        </Pressable>*/}
    </CustomView>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    purpleBox:{
        backgroundColor: colors.primary,
        width: 150,
        height: 150,
    }
})