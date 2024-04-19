import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

import Title from './Title';
import List, { Item } from './List';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 11,
    marginBottom: 10,
  },
  skills: {
    fontFamily: 'Lato',
    fontSize: 10,
    marginBottom: 10,
  },
});

const SkillEntry = ({ name, skills }) => (
  <View>
    <Text style={styles.title}>{name}</Text>
    <List>
      {skills.map((skill, index) => (
        <Item key={index}>{skill}</Item>
      ))}
    </List>
  </View>
);

const Skills = ({ skills }) => (
  <View>
    <Title>Skills</Title>
    {skills.map((skillSet, index) => (
      <SkillEntry key={index} name={skillSet.name} skills={skillSet.skills} />
    ))}
  </View>
);

Skills.defaultProps = {
  skills: [
    {
      name: "Combat Abilities",
      skills: [
        'Completed Jedi Master training and built a lightsaber from scratch in order to do battle against the Empire',
        'Defeated the Rancor and rescued Princess Leia from Jabba the Hutt',
        'Competent fighter pilot as well as an excellent shot with nearly any weapon',
      ]
    }
  ]
};

export default Skills;
