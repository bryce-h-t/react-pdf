import React from 'react';
import Education from './Education';

export default {
  title: 'Resume/Education',
  component: Education,
};

const Template = (args) => <Education {...args} />;

export const Default = Template.bind({});
Default.args = {
  school: 'Jedi Academy',
  degree: 'Jedi Master',
  candidate: '1977-05-25',
};

export const SithAcademy = Template.bind({});
SithAcademy.args = {
  school: 'Sith Academy',
  degree: 'Sith Lord',
  candidate: '1977-05-25',
};

export const Hogwarts = Template.bind({});
Hogwarts.args = {
  school: 'Hogwarts School of Witchcraft and Wizardry',
  degree: 'Master of Magic',
  candidate: '1991-09-01',
};

export const StarfleetAcademy = Template.bind({});
StarfleetAcademy.args = {
  school: 'Starfleet Academy',
  degree: 'Starfleet Officer',
  candidate: '2364-09-01',
};

export const XavierInstitute = Template.bind({});
XavierInstitute.args = {
  school: 'Xavier\'s Institute for Higher Learning',
  degree: 'Mutant Hero',
  candidate: '1963-09-01',
};

export const UnseenUniversity = Template.bind({});
UnseenUniversity.args = {
  school: 'Unseen University',
  degree: 'Wizard',
  candidate: '1983-11-24',
};

export const Brakebills = Template.bind({});
Brakebills.args = {
  school: 'Brakebills College for Magical Pedagogy',
  degree: 'Magician',
  candidate: '2009-04-01',
};

export const MiskatonicUniversity = Template.bind({});
MiskatonicUniversity.args = {
  school: 'Miskatonic University',
  degree: 'Scholar of the Unknown',
  candidate: '1922-03-15',
};

export const GreendaleCommunityCollege = Template.bind({});
GreendaleCommunityCollege.args = {
  school: 'Greendale Community College',
  degree: 'Associate of Arts',
  candidate: '2009-09-17',
};
