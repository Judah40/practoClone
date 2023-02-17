import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Categories = ({day,time,Name,title,Location,color,dayNum,dayAbb, book,view}) => {
  return (
    <TouchableOpacity style={{backgroundColor:color}} className='mx-2 my-4 pt-6 pb-6 pl-20 pr-20 relative rounded-xl'>

        <View className='absolute items-start bg-gray-500 left-4 top-2 h-24 rounded-full w-14'>
            <Text className='text-white text-4xl font-extrabold top-4 left-2'>{dayNum}</Text>
            <Text className='text-white font-extrabold top-4 left-4'>{dayAbb}</Text>
        </View>

        <View className='flex-row'>
        <Text className='text-white'>{time}</Text>
        <Text className='text-white'>{day}</Text>
        </View>
        
        <Text className='text-white text-lg font-bold'>{Name}</Text>

        <View className='flex-row'>
        <Text className='text-white'>{title}</Text>
        <Text className='text-white'>{Location}</Text>
        </View>
       
        
       
    </TouchableOpacity>
  )
}

export default Categories