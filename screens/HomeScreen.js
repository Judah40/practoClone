import { View, Text, StyleSheet, Platform, StatusBar, SafeAreaView, ScrollView, TouchableOpacity, Button, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'


const HomeScreen = ({navigation}) => {

const nav =useNavigation();

useLayoutEffect(()=>{

nav.setOptions({
headerShown:false,
})

}, [])

  return (
  <View className=" bg-blue-500 flex-1 pt-5">
    <View className="pt-10">
    <View className=' relative'>
         <Text className='px-5 pt-7 font-bold text-white text-3xl'>
             practo
            </Text>

              </View>
   

            <ScrollView horizontal={true} className=' top-30 right-12' >
            <Image
            source={
           require('../assets/pic.png')
                }
                className=' '
            />
             </ScrollView>
               
    </View>
   

    <View className='items-center'>
                <TouchableOpacity onPress={()=>{
                        navigation.navigate('login')
                    }}  

 className='bg-blue-600 items-center rounded-lg p-2 relative top-6  w-20'>
             <Text className='text-white'>Sign In</Text>
        </TouchableOpacity>
    </View>

    <View className='relative top-20 items-center'>

    <Text className='text-gray-700'>Designed By Judah</Text>
</View>

</View>
  )
}



const styles = StyleSheet.create({
AndroidSafeArea:{
paddingTop:Platform.OS=='android'? StatusBar.currentHeight:0
}
,
top:{


}
});

export default HomeScreen