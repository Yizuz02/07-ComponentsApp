
import { Text, TextInput, View } from "react-native"
import { CustomView } from "../../components/ui/CustomView"
import { Title } from "../../components/ui/Title"
import { globalStyles, colors } from '../../../config/theme/theme';
import { Card } from "../../components/ui/Card"
import { useContext, useState } from "react"
import { ScrollView } from "react-native-gesture-handler"
import { ThemeContext } from "../../context/ThemeContext"

export const TextInputScreen = () => {

    const [form, setForm] = useState({
        name: '',
        email : '',
        phone: '',

    })
    const {colors} = useContext(ThemeContext)

  return (
    <ScrollView>
        <CustomView margin>
            <Title text="Text Inputs" safe/>
            <Card>
                <TextInput
                    style={[globalStyles.input,{borderColor: colors.text, color:colors.text}]}
                    placeholderTextColor={colors.text}
                    placeholder="Nombre completo"
                    autoCapitalize="words"
                    autoCorrect={false}
                    onChangeText={value => setForm({...form, name: value})}
                />

                <TextInput
                    style={[globalStyles.input,{borderColor: colors.text, color:colors.text}]}
                    placeholderTextColor={colors.text}
                    placeholder="Correo electrónico"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    onChangeText={value => setForm({...form, email: value})}
                />

                <TextInput
                    style={[globalStyles.input,{borderColor: colors.text, color:colors.text}]}
                    placeholderTextColor={colors.text}
                    placeholder="Teléfono"
                    autoCapitalize="none"
                    keyboardType="phone-pad"
                    onChangeText={value => setForm({...form, phone: value})}
                />
            </Card>

            <View style={{height: 20}} />

            <Card>
                <Text style={{color:colors.text}}>{JSON.stringify(form, null, 2)} </Text>
                <Text style={{color:colors.text}}>{JSON.stringify(form, null, 2)} </Text>
                <Text style={{color:colors.text}}>{JSON.stringify(form, null, 2)} </Text>
                <Text style={{color:colors.text}}>{JSON.stringify(form, null, 2)} </Text>
                <Text style={{color:colors.text}}>{JSON.stringify(form, null, 2)} </Text>
                <Text style={{color:colors.text}}>{JSON.stringify(form, null, 2)} </Text>
                <Text style={{color:colors.text}}>{JSON.stringify(form, null, 2)} </Text>
                <Text style={{color:colors.text}}>{JSON.stringify(form, null, 2)} </Text>
                <Text style={{color:colors.text}}>{JSON.stringify(form, null, 2)} </Text>
                <Text style={{color:colors.text}}>{JSON.stringify(form, null, 2)} </Text>
            </Card>

            <View style={{height: 20}} />

            <Card>
                <TextInput
                    style={[globalStyles.input,{borderColor: colors.text, color:colors.text}]}
                    placeholderTextColor={colors.text}
                    placeholder="Teléfono"
                    autoCapitalize="none"
                    keyboardType="phone-pad"
                    onChangeText={value => setForm({...form, phone: value})}
                />
            </Card>
        </CustomView>
        <View style={{height: 20}} />
    </ScrollView>
    
  )
}