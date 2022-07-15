import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { XIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import * as Progress from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps';

import { selectRestaurant } from '../../features/restaurantSlice';

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row items-center p-5 justify-between">
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <XIcon size={30} color={'white'} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help?</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Extimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 Minutes</Text>
            </View>
            <Image
              source={{
                uri: 'https://links.papareact.com/fls',
              }}
              className="h-20 w-20"
            />
          </View>

          <Progress.Bar indeterminate={true} color={'#00CCBB'} />

          <Text className="mt-3 text-gray-500">
            Your order at{' '}
            <Text className="text-[#00CCBB]">{restaurant.title}</Text> is being
            prepared
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>

      <SafeAreaView className="bg-white  h-28">
        <View className="flex-row items-center space-x-5">
          <Image
            source={{
              uri: 'https://avatars.githubusercontent.com/u/29519495',
            }}
            className="h-12 w-12 bg-gray-300 rounded-full ml-5 p-4"
          />
          <View className="flex-1">
            <Text className="text-lg">Shivam Vijaywargi</Text>
            <Text className="text-gray-400">I am a Rider, Provider 😂</Text>
          </View>
          <Text className="text-[#00CCBB] text-xl mr-5 font-bold">Call</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};
export default DeliveryScreen;
