import React from 'react';
import Text from './__mocks__/Text';
import View from './__mocks__/View';
import StyleSheet from './__mocks__/StyleSheet';
import Link from './__mocks__/Link';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#112131',
    borderBottomStyle: 'solid',
    alignItems: 'stretch',
  },
  detailColumn: {
    flexDirection: 'column',
    flexGrow: 9,
    textTransform: 'uppercase',
  },
  linkColumn: {
    flexDirection: 'column',
    flexGrow: 2,
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
  name: {
    fontSize: 24,
    fontFamily: 'Lato Bold',
  },
  subtitle: {
    fontSize: 10,
    justifySelf: 'flex-end',
    fontFamily: 'Lato',
  },
  link: {
    fontFamily: 'Lato',
    fontSize: 10,
    color: 'black',
    textDecoration: 'none',
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
});

const Header = ({ name, subtitle, contact }) => (
  <View style={styles.container}>
    <View style={styles.detailColumn}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
    <View style={styles.linkColumn}>
      <Link href={`mailto:${contact.email}`} style={styles.link}>
        {contact.email}
      </Link>
    </View>
  </View>
);

Header.defaultProps = {
  name: 'Luke Skywalker',
  subtitle: 'Jedi Master',
  contact: {
    email: 'luke@theforce.com',
  },
};

export default Header;
