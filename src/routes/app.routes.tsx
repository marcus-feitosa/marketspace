import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { Catalog } from '../pages/Catalog';
import { Product } from '../pages/Product';
import { CreateProduct } from '../pages/CreateProduct';
import { EditProduct } from '../pages/EditProduct';
import { MyProduct } from '../pages/MyProduct';
import { MyProductDetails } from '../pages/MyProductDetails';

import { ProductPreview } from '../pages/ProductPreview';

type AppRoutes = {
    catalog: undefined;
    myproduct: undefined;
    product: undefined;
    createproduct: undefined;
    editproduct:undefined;
    myproductdetails: undefined;
    productpreview: undefined;
  }
  
  export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;
  
  const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen 
        name='catalog'
        component={Catalog}
      />

      <Screen 
        name='myproduct'
        component={MyProduct}
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
  );
}