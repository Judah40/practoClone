import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context'
import HospitalProps from './HospitalProps'

export default function Pharmacy() {

const navigation = useNavigation({navigation})


useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
})

})
  return (
    <SafeAreaView style={styles.AndroidSafeAre}>
     {/*header */}
        <View className='mx-4 flex-row space-x-2 px-4 pt-4'>
            <TouchableOpacity onPress={()=>{
                            navigation.navigate('homePage')
                }}
               className='bg-transparent'>
        <Ionicons name='chevron-back' style={{color:'gray', fontSize:20}}/>
            </TouchableOpacity>
            <Image
                source={require('../assets/hi.jpg')}    
            className = 'h-7 w-7 p-4 rounded-full'      
            />

            <View className='flex-1 left-2 top-2'>
            <Text  className='font-bold'>Prescription</Text>
            </View>

        
        <AntDesign  name='search1' style={{color:'black', fontSize:20, paddingTop:10}} />
        <Ionicons name='notifications' style={{color:'black', fontSize:20, paddingTop:10}}/>
        </View>

            <ScrollView>
             <View className='p-6 '>
        <Text className='font-bold text-lg'>Upload Prescrition</Text> 
        <Text>We help you find your medicine at which pharmacy available</Text>
        </View>


        <View className='flex-row space-x-12 pl-4 items-center'>
            <TouchableOpacity className='items-center bg-gray-200 p-4 rounded-2xl'>
        <AntDesign  name='upload' style={{color:'black', fontSize:20, paddingTop:10}} />
            <Text>Upload</Text>
            </TouchableOpacity>
            <TouchableOpacity className='items-center bg-gray-200 p-4  rounded-2xl'>
        <MaterialCommunityIcons  name='rename-box' style={{color:'black', fontSize:20, paddingTop:10}} />
            <Text>With Name</Text>
            </TouchableOpacity>
            <TouchableOpacity className='items-center bg-gray-200 p-4  rounded-2xl'>
        <Feather  name='link-2' style={{color:'black', fontSize:20, paddingTop:10}} />
            <Text>Upload</Text>
            </TouchableOpacity>
        </View>

            <View className='items-center top-4'>
              <TouchableOpacity className='items-center w-80 h-10  justify-center rounded-2xl  top-6 bg-blue-600'>
                <Text>Continue</Text>
                </TouchableOpacity>

            </View>

                 
            <View className='mx-4 flex-row space-x-2 px-4 pt-14 '>
            <Text className='font-bold'>Nearby Pharmacy</Text>
                
           <TouchableOpacity >
             <Text className='text-gray-400 font-bold mx-36 w-20'>See All</Text>
            </TouchableOpacity>
            </View>


                {/*hospital direction */}

                <View>
                <HospitalProps
                       Hospital={'Connaught '} 
                        distance={'45'}
                        icon={'star'}
                        icon2={'direction'}
                        rating ={'4.5'}
                        review={'22'}
                        />
                <HospitalProps
                       Hospital={'Connaught '} 
                        distance={'45'}
                        icon={'star'}
                        icon2={'direction'}
                        rating ={'4.5'}
                        review={'22'}
                        />
                </View>
            </ScrollView>
       
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({

AndroidSafeAre: {
paddingTop: Platform.OS =='android'?StatusBar.currentHeight:0}
})