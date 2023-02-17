import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'

const HospitalProps = ({imgUrl, Hospital, distance,icon,icon2,rating,review,btn}) => {
  return (
    <View className='flex-row p-6 space-x-2  right-1 items-center'>
      <View className='items-center h-72 rounded-2xl bg-gray-200 p-6'>
      
    <Image
            source={require('../assets/hospital1.jpg')}
              className='w-32 h-24 rounded-2xl'
            />

        <Text className='font-bold'>{Hospital}</Text>

        <Text>{distance}km away</Text>
            <View className='flex-row top-3 left-2'>
            <AntDesign  name={icon} style={{color:'orange', fontSize:20}} />
            <Text>{rating}</Text>  
            <Text>  .  {review} Reviews</Text>

            </View>

            <TouchableOpacity className='flex-row w-32 h-12 top-8 justify-center items-center border-2 border-blue-600 rounded-2xl'>

            <Entypo  name={icon2} style={{color:'blue', fontSize:20}} />
            <Text className='text-blue-600'>Get Direction</Text>
            </TouchableOpacity>
      </View>

        {/**hospital2 */}
      
      <View className='items-center  h-72 p-6 rounded-2xl bg-gray-200'>
      <Image
            source={require('../assets/hospital2.jpg')}
              className='w-32 h-24 rounded-2xl'
            />

        <Text>{Hospital}</Text>

        <Text>{distance}km away</Text>
            <View className='flex-row top-3 left-2'>
            <AntDesign  name={icon} style={{color:'orange', fontSize:20}} />
            <Text>{rating}</Text>  
            <Text>  .  {review} Reviews</Text>

            </View>

             <TouchableOpacity className='flex-row w-32 h-12 top-8 justify-center items-center border-2 border-blue-600 rounded-2xl'>

            <Entypo  name={icon2} style={{color:'blue', fontSize:20}} />
            <Text className='text-blue-600'>Get Direction</Text>
            </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default HospitalProps