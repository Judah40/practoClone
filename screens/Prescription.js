import { View, Text, StyleSheet, SafeAreaView, StatusBar, TextInput, TouchableOpacity,Image, ScrollView} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Categories from './Categories'

export default function Prescription({navigation}) {

const nav = useNavigation();

useLayoutEffect(()=>{

    nav.setOptions({
            headerShown:false
})
}, [])
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>


        {/*Search bar */}
        <View className='flex-row items-center space-x-2 pb-2 mx-4'>

        <TouchableOpacity onPress={()=>{
                            navigation.navigate('homePage')
                }}
               className='bg-transparent'>
        <Ionicons name='chevron-back' style={{color:'gray', fontSize:20}}/>
            </TouchableOpacity>

                

            <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
                <AntDesign name='search1' style={{color:'gray', fontSize:20,top:4}}/>
                
                <TextInput placeholder='Search'
                            keyboardType='default'/>
              
            </View>
             <Feather name='mic'  style={{color:'gray', fontSize:20}}/>
               
        </View>


        {/*Popular Doctor */}

         
            <View className='mx-4 flex-row space-x-2 px-4 pt-4 '>
            <Text className='font-bold'>Upcoming Appointment</Text>
                
                <MaterialCommunityIcons name='filter-variant-plus' style={{color:'gray', fontSize:20, left:90}}/>
           <TouchableOpacity >
             <Text className='text-gray-400 font-bold mx-24'>Filter </Text>
            </TouchableOpacity>
            </View>



            <ScrollView>
        
                
            <TouchableOpacity className='mx-4 my-4 pt-6 pb-12 bg-white  relative rounded-xl'>

            <View className='flex-row'>
            <View>
             <Image  source={require('../assets/doc3.png')}
              className='h-28 w-20 rounded'
                />
            </View>

            <View>
                
            <Text className='text-xl font-bold '> Dr. Judah Alvin Dore </Text>

                <Text className='top-1 left-2'>otolarygologist Specialist-Austria</Text>

            <View className='flex-row top-3 left-2'>
            <AntDesign  name="star" style={{color:'orange', fontSize:20}} />
            <Text>  4.5</Text>  
            <Text>  .  197 Reviews</Text>

            </View>

           
            
            </View>
            <View className='flex-row top-24'>
             <TouchableOpacity className='justify-center rounded-2xl bg-blue-600 w-28 h-12 items-center right-48'>
                <Text >book</Text>
            </TouchableOpacity>
             <TouchableOpacity className='justify-center rounded-2xl  w-28 h-12 items-center right-48'>
                <Text className='text-blue-500'>View</Text>
            </TouchableOpacity>
            </View>
            </View>
           
            
    </TouchableOpacity>


            {/*Doc2 */}
            

                <TouchableOpacity className='mx-4 my-4 pt-6 pb-12 bg-white  relative rounded-xl'>

            <View className='flex-row'>
            <View>
             <Image  source={require('../assets/doc4.png')}
              className='h-28 w-20 rounded'
            />
            </View>

            <View>
                
            <Text className='text-xl font-bold '> Dr. Menard Jesse Saffa</Text>

                <Text className='top-1 left-2'>otolarygologist Specialist-Austria</Text>
            <View className='flex-row top-3 left-2'>
            <AntDesign  name="star" style={{color:'orange', fontSize:20}} />
            <Text>  4.0</Text>  
            <Text>  .  167 Reviews</Text>
            </View>
            
            </View>
 <View className='flex-row top-24'>
             <TouchableOpacity className='justify-center rounded-2xl bg-blue-600 w-28 h-12 items-center right-48'>
                <Text >book</Text>
            </TouchableOpacity>
             <TouchableOpacity className='justify-center rounded-2xl  w-28 h-12 items-center right-48'>
                <Text className='text-blue-500'>View</Text>
            </TouchableOpacity>
            </View>
            </View>
           
            
    </TouchableOpacity>



                <TouchableOpacity className='mx-4 my-4 pt-6 pb-12 bg-white  relative rounded-xl'>

            <View className='flex-row'>
            <View>
             <Image  source={require('../assets/doc5.png')}
              className='h-28 w-20 rounded left-1'
            />
            </View>

            <View>
                
            <Text className='text-xl font-bold '> Dr. Saffiatu Sannoh</Text>

                <Text className='top-1 left-2'>otolarygologist Specialist-Austria</Text>
            <View className='flex-row top-3 left-2'>
            <AntDesign  name="star" style={{color:'orange', fontSize:20}} />
            <Text>  1.0</Text>  
            <Text>  .  2 Reviews</Text>
            </View>
            
            </View>
                 <View className='flex-row top-24'>
             <TouchableOpacity className='justify-center rounded-2xl bg-blue-600 w-28 h-12 items-center right-48'>
                <Text >book</Text>
            </TouchableOpacity>
             <TouchableOpacity className='justify-center rounded-2xl  w-28 h-12 items-center right-48'>
                <Text className='text-blue-500'>View</Text>
            </TouchableOpacity>
            </View>
            </View>
           
            
    </TouchableOpacity>


                <TouchableOpacity className='mx-4 my-4 pt-6 pb-12 mb-32 bg-white  relative rounded-xl'>

            <View className='flex-row'>
            <View>
             <Image  source={require('../assets/doc5.png')}
              className='h-28 w-20 rounded left-1'
            />
            </View>

            <View>
                
            <Text className='text-xl font-bold '> Dr. Saffiatu Sannoh</Text>

                <Text className='top-1 left-2'>otolarygologist Specialist-Austria</Text>
            <View className='flex-row top-3 left-2'>
            <AntDesign  name="star" style={{color:'orange', fontSize:20}} />
            <Text>  1.0</Text>  
            <Text>  .  2 Reviews</Text>
            </View>
            
            </View>
                 <View className='flex-row top-24'>
             <TouchableOpacity className='justify-center rounded-2xl bg-blue-600 w-28 h-12 items-center right-48'>
                <Text >book</Text>
            </TouchableOpacity>
             <TouchableOpacity className='justify-center rounded-2xl  w-28 h-12 items-center right-48'>
                <Text className='text-blue-500'>View</Text>
            </TouchableOpacity>
            </View>
            </View>
           
            
    </TouchableOpacity>
                </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});