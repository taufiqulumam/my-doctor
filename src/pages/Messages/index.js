import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyDoctor1, DummyDoctor2, DummyDoctor3} from '../../assets';
import {ListMessage} from '../../components';
import {colors, fonts} from '../../utils';

const Messages = () => {
  const [messages] = useState([
    {
      id: 1,
      profile: DummyDoctor1,
      name: 'Alexander jannie',
      desc: 'Baik dok, terima kasih atas wakt...',
    },
    {
      id: 2,
      profile: DummyDoctor2,
      name: 'Nairobi Putri Hayza',
      desc: 'Oh tentu saja tidak, karen jeruk it...',
    },
    {
      id: 3,
      profile: DummyDoctor3,
      name: 'John Steve',
      desc: 'Oke menurut pak dokter bagaimana unt...',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {messages.map((message) => {
          return (
            <ListMessage
              key={message.id}
              profile={message.profile}
              name={message.name}
              desc={message.desc}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.secondary, flex: 1},
  content: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
