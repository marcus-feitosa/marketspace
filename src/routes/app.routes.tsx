import {createNativeStackNavigator, NativeStackNavigationProp}from '@react-navigation/native-stack'
import { Product } from '../pages/Product';
import { CreateProduct } from '../pages/CreateProduct';
import { EditProduct } from '../pages/EditProduct';

import { MyProductDetails } from '../pages/MyProductDetails';
import { Text } from 'native-base';
import { ProductPreview } from '../pages/ProductPreview';
import { ProductRoutes } from './product.routes';


type AuthRoutes ={
    home: undefined,
    product: undefined;
    createproduct : undefined;
    editproduct : undefined;
    myproductdetails : undefined;
    productpreview : undefined;

}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const {Navigator, Screen} = createNativeStackNavigator<AuthRoutes>();
export function AppRoutes(){
return(
    <Navigator screenOptions={{headerShown:false}}>
       <Screen 
        name='home'
        component={ProductRoutes}
      />
        <Screen 
        name='product'
        component={Product}
      />

      <Screen 
        name='createproduct'
        component={CreateProduct}

      />
      <Screen 
        name='editproduct'
        component={EditProduct}
      />
       <Screen 
        name='myproductdetails'
        component={MyProductDetails}
      />
       <Screen 
        name='productpreview'
        component={ProductPreview}
      />
    </Navigator>
)
}