import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  YellowBox,
} from 'react-native';
import {IconNext, ILNullPhoto} from '../../../assets';
import {colors, fonts, getData} from '../../../utils';

const HomeProfile = ({onPress}) => {
  const [profile, setProfile] = useState({
    photo: ILNullPhoto,
    fullName: '',
    profession: '',
  });

  useEffect(() => {
    getData('user').then((res) => {
      // console.log('data user: ', res);
      const data = res;
      data.photo = {uri: res.photo};
      console.log('new profile: ', data);
      setProfile(res);
    });
  }, []);

  return (
    <View style={styles.page}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image source={profile.photo} style={styles.avatar} />
        <View style={styles.content}>
          <Text style={styles.name}>{profile.fullName}</Text>
          <Text style={styles.profession}>{profile.profession}</Text>
        </View>
        <IconNext />
      </TouchableOpacity>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.cardLight,
    borderRadius: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {flex: 1},
  avatar: {width: 46, height: 46, borderRadius: 46 / 2, marginRight: 12},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  profession: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
});
