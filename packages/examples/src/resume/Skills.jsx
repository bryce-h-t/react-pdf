import React from 'react';
import Text from './__mocks__/Text';
import View from './__mocks__/View';
import StyleSheet from './__mocks__/StyleSheet';

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
      {skills.map((skill) => (
        <Item key={skill}>{skill}</Item>
      ))}
    </List>
  </View>
);

const Skills = ({ skills }) => (
  <View>
    <Title>Skills</Title>
    {skills.map((skillSet) => (
      <SkillEntry key={skillSet.name} name={skillSet.name} skills={skillSet.skills} />
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
