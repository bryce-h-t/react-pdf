import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

import Title from './Title';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  school: {
    fontFamily: 'Lato Bold',
    fontSize: 10,
  },
  degree: {
    fontFamily: 'Lato',
    fontSize: 10,
  },
  candidate: {
    fontFamily: 'Lato Italic',
    fontSize: 10,
  },
});

const Education = ({ school, degree, candidate }) => (
  <View style={styles.container}>
    <Title>Education</Title>
    <Text style={styles.school}>{school}</Text>
    <Text style={styles.degree}>{degree}</Text>
    <Text style={styles.candidate}>{candidate}</Text>
  </View>
);

Education.defaultProps = {
  school: 'Jedi Academy',
  degree: 'Jedi Master',
  candidate: 'A long, long time ago',
};

export default Education;
