import React, {useState} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import Picker from 'react-native-picker';

import {CaretDownIcon} from '../../../assets/svgs';
import Colors from '../../../constants/Color';

const localData = [
  {
    서울시: [
      '강남구',
      '강동구',
      '강북구',
      '강서구',
      '관악구',
      '광진구',
      '구로구',
      '금천구',
      '노원구',
      '도봉구',
      '동대문구',
      '동작구',
      '마포구',
      '서대문구',
      '서초구',
      '성동구',
      '성북구',
      '송파구',
      '양천구',
      '영등포구',
      '용산구',
      '은평구',
      '종로구',
      '중구',
      '중랑구',
    ],
  },
  {
    인천시: [
      '강화군',
      '옹진군',
      '중구',
      '동구',
      '미추홀구',
      '연수구',
      '남동구',
      '부평구',
      '계양구',
      '서구',
    ],
  },
  {
    경기도: [
      '수원시',
      '용인시',
      '성남시',
      '부천시',
      '화성시',
      '안산시',
      '안양시',
      '평택시',
      '시흥시',
      '김포시',
      '광주시',
      '광명시',
      '군포시',
      '하남시',
      '오산시',
      '이천시',
      '안성시',
      '의왕시',
      '양평군',
      '여주시',
      '과천시',
      '고양시',
      '남양주시',
      '파주시',
      '의정부시',
      '양주시',
      '구리시',
      '포천시',
      '동두천시',
      '가평군',
      '연천군',
    ],
  },
  {
    강원도: [
      '춘천시',
      '원주시',
      '강릉시',
      '동해시',
      '태백시',
      '속초시',
      '삼척시',
      '홍천군',
      '횡성군',
      '영월군',
      '평창군',
      '정선군',
      '철원군',
      '화천군',
      '양구군',
      '인제군',
      '고성군',
      '양양군',
    ],
  },
  {
    충청남도: [
      '천안시',
      '공주시',
      '보령시',
      '아산시',
      '서산시',
      '논산시',
      '계룡시',
      '당진시',
      '금산군',
      '부여군',
      '서천군',
      '청양군',
      '홍성군',
      '예산군',
      '태안군',
    ],
  },
  {
    충청북도: [
      '청주시',
      '상당구',
      '서원구',
      '흥덕구',
      '청원구',
      '충주시',
      '제천시',
      '보은군',
      '옥천군',
      '영동군',
      '증평군',
      '진천군',
      '괴산군',
      '음성군',
      '단양군',
    ],
  },
  {
    전라남도: [
      '목포시',
      '여수시',
      '순천시',
      '나주시',
      '광양시',
      '담양군',
      '곡성군',
      '구례군',
      '고흥군',
      '보성군',
      '화순군',
      '장흥군',
      '강진군',
      '해남군',
      '염암군',
      '무안군',
      '함평군',
      '영광군',
      '장성군',
      '완도군',
      '진도군',
      '신안군',
    ],
  },
  {
    전라북도: [
      '전주시',
      '익산시',
      '군산시',
      '정읍시',
      '김제시',
      '남원시',
      '완주군',
      '고창군',
      '부안군',
      '임실군',
      '순창군',
      '진안군',
      '무주군',
      '장수군',
    ],
  },
  {
    제주도: [
      '제주시',
      '서귀포시',
      '한경면',
      '안덕면',
      '표선면',
      '한립읍',
      '애월읍',
      '조천읍',
      '구좌읍',
      '선산읍',
      '남원읍',
      '대정읍',
    ],
  },
];
const AddressPicker = () => {
  const [region, setRegion] = useState('');
  const [city, setCity] = useState('');

  return (
    <Pressable
      style={styles.button}
      onPress={() => {
        Picker.init({
          pickerData: localData,
          selectedValue: [region, city],
          pickerTitleText: '거주지를 선택해주세요.',
          pickerConfirmBtnText: '확인',
          pickerCancelBtnText: '취소',
          onPickerConfirm: address => {
            setRegion(address[0]);
            setCity(address[1]);
          },
        });
        Picker.show();
      }}>
      <Text style={styles.text}>
        {region && city ? `${region} ${city}` : '거주지를 선택해주세요'}
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

export default AddressPicker;
