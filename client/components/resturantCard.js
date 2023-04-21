import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/outline';
import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { themeColors } from '../theme';
import * as Icon from "react-native-feather";

export default function ResturantCard({
    id, 
    title,
    imgUrl,
    rating,
    type,
    address, 
    description,
    dishes,
    lng,
    lat
}) {
  // console.log(urlFor(imgUrl).url());
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={()=>{
      navigation.navigate('Resturant', {
        id, 
        title,
        imgUrl,
        rating,
        type,
        address, 
        description,
        dishes,
        lng,
        lat
      })
    }}>
      <View style={{shadowColor: themeColors.bgColor(0.2), shadowRadius: 7}} className="mr-6 bg-white rounded-3xl shadow-lg">
          <Image  className="h-36 w-64 rounded-t-3xl" source={{ uri: urlFor(imgUrl).url()}} />
        
        <View className="px-3 pb-4 space-y-2">
         
          <Text className="text-lg font-bold pt-2">{title}</Text>
          <View className="flex-row items-center space-x-1">
              <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4" />
              <Text className="text-xs">
                  <Text className="text-green-700">{rating}</Text>
                  <Text className="text-gray-700"> (4.6k review)</Text> · <Text className="font-semibold text-gray-700">{type}</Text>
              </Text>
          </View>
          <View className="flex-row items-center space-x-1">
              <Icon.MapPin color="gray" width={15} height={15} />
              <Text className="text-gray-700 text-xs"> Nearby · {address}</Text>
          </View>
        </View>
      </View>
      
      
      
    </TouchableWithoutFeedback>
    
  )
}


{/* <View className="mr-4">
      <TouchableWithoutFeedback onPress={()=>{
        navigation.navigate('Resturant', {
          id, 
          title,
          imgUrl,
          rating,
          type,
          address, 
          description,
          dishes,
          lng,
          lat
        })
      }}>
      
      <View>
        <Image  className="h-60 w-80 rounded-3xl" source={{ uri: urlFor(imgUrl).url()}} />
        <LinearGradient
          className="relative rounded-b-3xl"
          colors={['transparent', 'rgba(0, 0, 0, 0.8)']}
          style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 140 }}
        >
          <View className="flex-row justify-between items-center absolute bottom-0 left-0 right-0 px-3 py-7">
              <View className="space-y-1">
                <Text className="text-2xl font-extrabold text-white pt-2">{title}</Text>
                <View className="flex-row items-center space-x-1">
                    <Image style={{marginBottom: 3}} source={require('../assets/fullStar.png')} className="h-4 w-4" />
                    <Text className="text-xs text-white font-bold">
                        {rating} (4.6k review)
                    </Text>
                </View>
              </View>
              <View className="p-3 rounded-full" style={{backgroundColor: 'rgba(255,255,255,0.4)'}}>
                <Icon.Heart height={25} width={25} stroke="white" />
              </View>
          </View>
          
        </LinearGradient>
      </View>

      </TouchableWithoutFeedback> 
    </View> */}

   

{/* <TouchableWithoutFeedback onPress={()=>{
      navigation.navigate('Resturant', {
        id, 
        title,
        imgUrl,
        rating,
        type,
        address, 
        description,
        dishes,
        lng,
        lat
      })
    }}>
      <View className="mr-5 bg-white rounded-3xl shadow-md">
          <Image  className="h-36 w-64 rounded-t-3xl" source={{ uri: urlFor(imgUrl).url()}} />
        
        <View className="px-3 pb-4 space-y-2">
         
          <Text className="text-lg font-bold pt-2">{title}</Text>
          <View className="flex-row items-center space-x-1">
              <Image source={require('../assets/fullStar.png')} className="h-4 w-4" />
              <Text className="text-xs">
                  <Text className="text-green-700">{rating}</Text>
                  <Text className="text-gray-700"> (4.6k review)</Text> · <Text className="font-semibold text-gray-700">{type}</Text>
              </Text>
          </View>
          <View className="flex-row items-center space-x-1">
              <Icon.MapPin color="gray" width={15} height={15} />
              <Text className="text-gray-700 text-xs"> Nearby · {address}</Text>
          </View>
        </View>
      </View>
      
      
      
    </TouchableWithoutFeedback> */}