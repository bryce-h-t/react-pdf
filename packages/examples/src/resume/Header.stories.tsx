import React from 'react';
import { StoryFn as Story, Meta } from '@storybook/react';
import Header from './Header';

export default {
  title: 'Resume/Header',
  component: Header,
} as Meta;

const Template: Story<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Luke Skywalker',
  subtitle: 'Jedi Knight',
  contact: {
    email: 'luke@theforce.net',
  },
};
