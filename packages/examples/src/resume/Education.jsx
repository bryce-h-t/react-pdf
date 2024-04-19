import React from 'react';
import Title from './Title';
import Text from './__mocks__/Text';
import View from './__mocks__/View';
import StyleSheet from './__mocks__/StyleSheet';

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
