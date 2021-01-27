import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

import {Header} from '../../components';
import {colors, fonts} from '../../utils';

const NewsContent = ({navigation, route}) => {
  const dataNews = route.params;
  return (
    <View style={styles.page}>
      <Header title="News" onPress={() => navigation.goBack()} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.wrapperContent}>
        <Text style={styles.title}>{dataNews.title}</Text>
        <Text style={styles.date}>{dataNews.date}</Text>
        <Image source={{uri: dataNews.image}} style={styles.image} />
        <Text style={styles.news}>{dataNews.body}</Text>
      </ScrollView>
    </View>
  );
};

export default NewsContent;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  wrapperContent: {paddingHorizontal: 16},
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  date: {fontSize: 14, fontFamily: fonts.primary[300], marginTop: 4},
  image: {
    width: 300,
    height: 200,
    borderRadius: 30,
    marginTop: 16,
    marginBottom: 16,
    alignSelf: 'center',
  },
  news: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    paddingBottom: 16,
    textAlign: 'justify',
  },
});
