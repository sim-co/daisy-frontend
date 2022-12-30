import React, {useState} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import Picker from 'react-native-picker';

import {CaretDownIcon} from '../../../assets/svgs';
import Colors from '../../../constants/Color';
import {getYearArray} from '../../../util/date';

const dateData = [
  [...getYearArray()],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ],
];
const BirthPicker = () => {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [date, setDate] = useState('');

  return (
    <Pressable
      style={styles.button}
      onPress={() => {
        Picker.init({
          pickerData: dateData,
          selectedValue: [year, month, date],
          pickerTitleText: '생년월일을 선택해주세요',
          pickerConfirmBtnText: '확인',
          pickerCancelBtnText: '취소',
          onPickerConfirm: birth => {
            setYear(birth[0]);
            setMonth(birth[1]);
            setDate(birth[2]);
          },
        });
        Picker.show();
      }}>
      <Text style={styles.text}>
        {year && month && date
          ? `${year}.${month}.${date}`
          : '생년월일을 선택해주세요'}
      </Text>
      <CaretDownIcon style={styles.caret} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    borderBottomColor: Colors.GREY_QUATERNARY,
    borderBottomWidth: 1,
    color: Colors.GREY_QUATERNARY,
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
  caret: {
    bottom: 18,
    position: 'absolute',
    right: 0,
  },
  text: {
    color: Colors.GREY_QUATERNARY,
    fontFamily: 'Pretendard',
    fontSize: 16,
  },
});

export default BirthPicker;
