import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { useLayoutEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LocationMarkerIcon,
  StarIcon,
} from 'react-native-heroicons/solid';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../../features/restaurantSlice';
import { urlFor } from '../../sanity';
import BasketIcon from '../components/BasketIcon';
import DishRow from '../components/DishRow';

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
      })
    );
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-5 bg-white rounded-full p-2"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon size={22} color="green" opacity={0.5} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{rating}</Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <LocationMarkerIcon size={22} color="gray" opacity={0.4} />
                <Text className="text-xs text-gray-500">
                  Nearby · {address}
                </Text>
              </View>
            </View>

            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>

          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color={'gray'} opacity={0.6} size={20} />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food Allergy?
            </Text>
            <ChevronRightIcon color={'#00CCBB'} />
          </TouchableOpacity>
        </View>

        <View className="pb-32">
          <Text className="pt-6 mb-3 font-bold text-xl px-4">Menu</Text>

          {/* Dishrows */}
          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              price={dish.price}
              description={dish.short_description}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};
export default RestaurantScreen;
