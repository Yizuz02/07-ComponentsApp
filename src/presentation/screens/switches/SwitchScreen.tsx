import { useState } from "react";
import { CustomView } from "../../components/ui/CustomView"
import { Card } from "../../components/ui/Card";
import { Switch, View } from "react-native";
import { CustomSwitch } from "../../components/ui/CustomSwitch";
import { Separator } from "../../components/ui/Separator";


export const SwitchScreen = () => {

    //const [isEnabled, setIsEnabled] = useState(false);
    //const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [state, setState] = useState({
      isActive: true,
      isHungry: false,
      isHappy: true,
    })

  return (
    <CustomView margin>
        <View style={{height:100}} />
        <Card>
            <CustomSwitch
              isOn={state.isActive}
              onChange={(value)=>setState({...state, isActive:value})}
              text="¿Está activo?"
            />

            <Separator/>

            <CustomSwitch
              isOn={state.isHungry}
              onChange={(value)=>setState({...state, isHungry:value})}
              text="¿Tiene hambre?"
            />

            <Separator/>

            <CustomSwitch
              isOn={state.isHappy}
              onChange={(value)=>setState({...state, isHappy:value})}
              text="¿Es feliz?"
            />

        </Card>
    </CustomView>
  )
}