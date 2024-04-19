import React from 'react';
import { StoryFn as Story, Meta } from '@storybook/react';
import Title from './Title';

export default {
  title: 'Resume/Title',
  component: Title,
} as Meta;

const Template: Story<typeof Title> = (args) => {
  console.log(args, 'args');
  return <Title {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: 'Jedi Knight',
  subtitle: 'Defender of the Republic',
};

export const WithLongTitle = Template.bind({});
WithLongTitle.args = {
  title: 'Jedi Master and Senior Member of the Jedi High Council',
  subtitle: 'Guardian of Peace and Justice in the Galaxy',
};

export const WithNoSubtitle = Template.bind({});
WithNoSubtitle.args = {
  title: 'Padawan Learner',
};

export const Empty = Template.bind({});
Empty.args = {
  title: '',
  subtitle: '',
};
