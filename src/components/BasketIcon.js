import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import {
  selectBasketItems,
  selectBasketTotal,
} from '../../features/basketSlice';
import Currency from 'react-currency-formatter';

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length === 0) return null;

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate('Basket')}
        className="mx-5 bg-[#00CCBB] p-4 rounded-lg  flex-row items-center justify-between"
      >
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
          {items.length}
        </Text>
        <Text className="text-white font-extrabold text-lg">View Basket</Text>
        <Text className="text-white font-extrabold text-lg">
          <Currency quantity={basketTotal} currency="INR" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default BasketIcon;
