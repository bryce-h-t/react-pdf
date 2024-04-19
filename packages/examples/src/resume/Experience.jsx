import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

import Title from './Title';
import List, { Item } from './List';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 15,
    '@media max-width: 400': {
      paddingTop: 10,
      paddingLeft: 0,
    },
  },
  entryContainer: {
    marginBottom: 10,
  },
  date: {
    fontSize: 11,
    fontFamily: 'Lato Italic',
  },
  detailLeftColumn: {
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
  },
  detailRightColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  bulletPoint: {
    fontSize: 10,
  },
  details: {
    fontSize: 10,
    fontFamily: 'Lato',
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  rightColumn: {
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'flex-end',
    justifySelf: 'flex-end',
  },
  title: {
    fontSize: 11,
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Lato Bold',
  },
});

const ExperienceEntry = ({ company, details, position, date }) => {
  const title = `${company} | ${position}`;
  return (
    <View style={styles.entryContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <List>
        {details.map((detail) => (
          <Item key={detail}>{detail}</Item>
        ))}
      </List>
    </View>
  );
};

ExperienceEntry.propTypes = {
  company: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(PropTypes.string).isRequired,
  position: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

const Experience = ({ experienceData }) => (
  <View style={styles.container}>
    <Title>Experience</Title>
    {experienceData.map((entry) => (
      <ExperienceEntry
        key={entry.company + entry.position}
        company={entry.company}
        date={entry.date}
        details={entry.details}
        position={entry.position}
      />
    ))}
  </View>
);

Experience.propTypes = {
  experienceData: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      details: PropTypes.arrayOf(PropTypes.string).isRequired,
      position: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Experience;
