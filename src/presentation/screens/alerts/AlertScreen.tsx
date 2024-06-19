import prompt from 'react-native-prompt-android';

import { Alert, View } from "react-native"
import { CustomView } from "../../components/ui/CustomView"
import { Title } from "../../components/ui/Title"
import { Button } from "../../components/ui/Button"
import { showPrompt } from '../../../config/adapters/prompt.adapter';

export const AlertScreen = () => {

    const createTwoButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'destructive',

          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
    
      const createThreeButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
          {
            text: 'Ask me later',
            onPress: () => console.log('Ask me later pressed'),
          },
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'destructive',
          },
        ], {
            cancelable: true,
            onDismiss() {
                console.log('onDismiss');
            },
        });

        const onShowPrompt = () => {

            showPrompt({
                title: 'Enim commodo ut amet esse aliqua',
                subTitle: 'commodo ut amet esse aliqua',
                buttons:[ 
                    {text:'Ok', onPress: () => console.log("Ok")}
                ],
                placeholder: 'Placeholder'
            })

            //Alert.prompt(
            //    'Correo electronico',
            //    'Enim commodo ut amet esse aliqua',
            //    (valor: string) => console.log({valor}),
            //    'secure-text',
            //    'Soy el valor por defecto',
            //    'number-pad'
            //);
        };

  return (
    <CustomView margin>
        <Title safe text="Alertas"/>

        <Button
            text="Alerta - 2 Botones"
            onPress={createTwoButtonAlert}
        />

        <View style={{height:10}} />

        <Button
            text="Alerta - 3 Botones"
            onPress={createThreeButtonAlert}
        />

        <View style={{height:10}} />

        <Button
            text="Prompt - Input"
            onPress={onShowPrompt}
        />

    </CustomView>
  )
}