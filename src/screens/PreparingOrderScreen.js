import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // After 3 seconds navigate to the Next screen
    setTimeout(() => {
      navigation.navigate('Delivery');
    }, 3000);
  }, []);

  return (
    <SafeAreaView className="bg-[#331b63] flex-1 justify-center items-center">
      <Animatable.Image
        source={require('../../assets/orderLoading.gif')}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg text-white font-bold text-center my-10 mx-4"
      >
        Waiting for the Restaurant to accept your Order!
      </Animatable.Text>

      <Progress.Circle size={60} color="white" indeterminate={true} />
    </SafeAreaView>
  );
};
export default PreparingOrderScreen;
