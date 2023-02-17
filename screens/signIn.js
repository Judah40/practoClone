import { View, Text, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function SignIn({navigation}) {


const nav = useNavigation()
useLayoutEffect(()=>{

nav.setOptions({
headerShown:false
})
})


const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
  return (
    <View className='bg-blue-500 flex-1 items-center justify-center'>
      <Text className='px-5 pt-7 font-bold text-white text-3xl bottom-10'>
             practo
            </Text>

            <StatusBar style="auto"/>

            <View  className='bottom-4'>
            <TextInput 
            placeholder='Enter Your Email'
            placeholderTextColor={"black"}
            onChangeText={(email)=>setEmail(email)}
            className='bg-white rounded-lg h-10 w-60 pl-2 font-bold'
                />
            </View>
            <View className=''>
            <TextInput 
            placeholder='Enter Your Password'
            placeholderTextColor={"black"}
            secureTextEntry={true}
            onChangeText={(password)=>setPassword(password)}
            className='bg-white rounded-lg h-10 w-60 pl-2 font-bold'
                />
            </View>

            <View>
            <TouchableOpacity className='relative items-center'>
                <Text className='h-5 top-3 font-bold absolute text-gray-600'>Forget Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                    navigation.navigate('homePage')

                }}
                 className='justify-center rounded-full bg-blue-600 w-80 h-12 items-center top-20'>
                <Text >LOGIN</Text>
            </TouchableOpacity>
            </View>

            <View className='flex-row top-24'>
                <Text className='font-bold'>Don't Have an account?</Text>
                 <TouchableOpacity className='relative items-center'>
                <Text className='h-5  font-bold  text-yellow-300'>Register</Text>
            </TouchableOpacity>
            </View>
    </View>
  )
}