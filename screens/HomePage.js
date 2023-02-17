import { View, Text, Platform, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Categories from './Categories'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
export default function HomePage() {

const navigation = useNavigation({navigation})


useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
})

})
  return (
    <SafeAreaView style ={styles.AndroidSafeAre} className='bg-gray-200 pt-5 flex-1 '>

         
  {/*header */}
        <View className='mx-4 flex-row space-x-2 px-4 pt-4'>
            <Image
                source={require('../assets/hi.jpg')}    
            className = 'h-7 w-7 p-4 rounded-full'      
            />

            <View className='flex-1'>
           <View className='flex-row'> 
                <Text className='font-bold'>Hi</Text> 
                <Text className='font-bold text-blue-600'> ,Johnson</Text> 
                </View>
                 <View className='flex-row'> 
                <Text className='font-bold text-gray-400'>Today</Text> 
                <Text className='font-bold '> 11 Dec 2022</Text> 
                </View>
            </View>

        
        <AntDesign  name='search1' style={{color:'black', fontSize:20, paddingTop:10}} />
        <Ionicons name='notifications' style={{color:'black', fontSize:20, paddingTop:10}}/>
        </View>

        <View  className='flex-row items-center mx-4 my-4'>
        {/*Categories */}

           <TouchableOpacity
          onPress={()=>{
                    navigation.navigate('Prescribe')
              }}    
         className='p-4 h-50 items-center bg-white'>
                <FontAwesome  name='user' style={{color:'blue', fontSize:20, paddingTop:10}} />
            <Text>Doctor</Text>
            </TouchableOpacity>

           <TouchableOpacity className='p-4 items-center  bg-white'>
         <MaterialIcons  name='local-pharmacy' style={{color:'orange', fontSize:20, paddingTop:10}} />
         <Text>Pharmacy</Text>
            </TouchableOpacity>


           <TouchableOpacity 
            onPress={()=>{

                  navigation.navigate('pharmacy')
                  }}    

      
           className='p-4 items-center bg-white'>
         <FontAwesome  name='hospital-o' style={{color:'green', fontSize:20, paddingTop:10}} />
         <Text>hospital</Text>
            </TouchableOpacity>


           <TouchableOpacity className='p-4 items-center bg-white'>
         <FontAwesome  name='ambulance' style={{color:'red', fontSize:20, paddingTop:10}} />
             <Text>ambulance</Text>
            </TouchableOpacity>
        </View>

            {/*Appointment */}
        <ScrollView>
        <View >
            <View className='mx-4 flex-row space-x-2 px-4 pt-4 '>
            <Text className='font-bold'>Upcoming Appointment</Text>
                
           <TouchableOpacity >
             <Text className='text-gray-400 font-bold mx-24'>See All</Text>
            </TouchableOpacity>
            </View>
                
            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
                className='mx-4'
>
                <Categories
                    
                        dayAbb='Sun'
                        dayNum='11'
                        day=', Sunday'
                        time='10:30 AM'
                        Name='Judah Alvin Dore'
                        title='Heart Surgeon,'
                        Location=' Freetown'
                        color='#35455D'
                        />
                <Categories
                        dayAbb='Sun'
                        dayNum='11'
                        day=', Sunday'
                        time='10:30 AM'
                        Name='Judah Alvin Dore'
                        title='Heart Surgeon,'
                        Location=' Freetown'
                        color='#2f52a4'
                        />
                <Categories
                        dayAbb='Sun'
                        dayNum='11'
                        day=', Sunday'
                        time='10:30 AM'
                        Name='Judah Alvin Dore'
                        title='Heart Surgeon,'
                        Location=' Freetown'
                        color='#B5B682'
                        />
                <Categories
                        dayAbb='Sun'
                        dayNum='11'
                        day=', Sunday'
                        time='10:30 AM'
                        Name='Judah Alvin Dore'
                        title='Heart Surgeon,'
                        Location=' Freetown'
                        color='#219EBC'
                        />
            </ScrollView>

                
        </View>

             {/*Top Doctor */}
                
           
                    <View className='mx-4 flex-row space-x-20 px-4 pt-4 pr-16 '>
            <Text className='font-bold'>Top Doctors</Text>
                
           <TouchableOpacity >
             <Text className='text-gray-400  w-14 font-bold mx-24'>See All</Text>
            </TouchableOpacity>
            </View>

            

                <TouchableOpacity className='mx-4 my-4 pt-6 pb-6 bg-white  relative rounded-xl'>

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
            </View>
           
            
    </TouchableOpacity>


            {/*Doc2 */}
            

                <TouchableOpacity className='mx-4 my-4 pt-6 pb-6 bg-white  relative rounded-xl'>

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
            </View>
           
            
    </TouchableOpacity>



                <TouchableOpacity className='mx-4 my-4 pt-6 pb-6 bg-white  relative rounded-xl'>

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
            </View>
           
            
    </TouchableOpacity>
            
           




            </ScrollView>
    </SafeAreaView>
  )
}





const styles = StyleSheet.create({

AndroidSafeAre: {
paddingTop: Platform.OS =='android'?StatusBar.currentHeight:0}
})