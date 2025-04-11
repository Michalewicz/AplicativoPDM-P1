import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/home/index';
import PaginaProduto from './src/pages/produtos/index';
import Carrinho from './src/pages/carrinho/index';
import Login from './src/pages/login/index';
import Registro from './src/pages/registro/index';
import Pagamento from './src/pages/pagamento/index';
import Perfil from './src/pages/perfil/index';

//produtos
import PizzaMarguerita from './src/pages/produtos/produto_page';
import Pizza5Queijos from './src/pages/produtos/produto_page';
import PizzachocolateMorango from './src/pages/produtos/produto_page';
import EsfihaCarne from './src/pages/produtos/produto_page';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Produtos" component={PaginaProduto} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Carrinho" component={Carrinho} />
        <Stack.Screen name="Pagamento" component={Pagamento} />     
        <Stack.Screen name="Perfil" component={Perfil} />    
        
        <Stack.Screen name="Pizza Marguerita" component={PizzaMarguerita} />
        <Stack.Screen name="Pizza 5 Queijos" component={Pizza5Queijos} />
        <Stack.Screen name="Pizza Chocolate e Morango" component={PizzachocolateMorango} />
        <Stack.Screen name="Esfiha de Carne" component={EsfihaCarne} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
