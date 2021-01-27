import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const NewsItem = ({title, date, image, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Image source={{uri: image}} style={styles.image} />
    </TouchableOpacity>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 12,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  textWrapper: {flex: 1},
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    maxWidth: '90%',
  },
  date: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 4,
  },
  image: {width: 80, height: 60, borderRadius: 11},
});
