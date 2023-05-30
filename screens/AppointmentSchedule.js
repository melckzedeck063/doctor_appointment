import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { Calendar } from 'react-native-calendars';

import { responsiveHeight,responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

export default function AppointmentSchedule() {

    const [selectedDate, setSelectedDate] = useState('');

    
    const handleDateSelect = (date) => {
        setSelectedDate(date.dateString);
      };

  return (
    <View className="">
        <View>
          <Text style={{fontSize : responsiveFontSize(2.3)}} className={'py-6 text-center font-medium text-slate-700'}>Choose Appointment Date</Text>
        </View>
      

      <View style={[styles.card, styles.dateContainer]} className='rounded-xl p-1 my-12'>
          <Calendar onDayPress={handleDateSelect} />
        {selectedDate !== '' && (
          <View  className={"pt-12"}>
            <Text className={`text-center text-sky-500 font-bold text-lg ${Platform.select({android  : 'text-sm'})}`}>
              Selected Date: {selectedDate}
            </Text>
          </View>
        )}
        </View>

    </View>
  )
}


const styles = StyleSheet.create({
    card: {
      elevation : 4,
      backgroundColor: 'white',
      shadowColor: 'black',
      shadowOffset :{width : 0, height : 2} ,
      shadowOpacity: 0.25,
      shadowRadius : 8,
      width  : '92%',
      alignSelf  : 'center',
     },
  
    chartContainer: {
      height : responsiveHeight(30)
    },
    dateContainer  : {
      height : responsiveHeight(55)
    },
    
    selectedDateText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  });