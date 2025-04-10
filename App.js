import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/home/index';
import PaginaProduto from './src/pages/produtos/index';
import Carrinho from './src/pages/carrinho/index';
import PizzaMarguerita from './src/pages/produtos/pizza_marguerita';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Produtos" component={PaginaProduto} />
        <Stack.Screen name="Pizza Marguerita" component={PizzaMarguerita} />
        <Stack.Screen name="Carrinho" component={Carrinho} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
