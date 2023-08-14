import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { Catalog } from '../pages/Catalog';
import { MyProduct } from '../pages/MyProduct';

type AppRoutes = {
    catalog: undefined;
    myproduct: undefined;
  }
  
  export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;
  
  const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function ProductRoutes() {
  return (
    <Navigator screenOptions={
        {
            headerShown : false,
            tabBarShowLabel : false

        }
        }>
      <Screen 
        name='catalog'
        component={Catalog}
      />

      <Screen 
        name='myproduct'
        component={MyProduct}
        
      />
    </Navigator>
  );
}