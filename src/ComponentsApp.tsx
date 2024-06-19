import 'react-native-gesture-handler'

import { StackNavigator } from "./presentation/navigator/StackNavigator"
import { ThemeProvider } from "./presentation/context/ThemeContext";


export const App = () => {
  return (
    <ThemeProvider>
        <StackNavigator />
    </ThemeProvider>
  )
}