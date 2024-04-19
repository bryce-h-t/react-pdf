import React from 'react';
import { StoryFn as Story, Meta } from '@storybook/react';
import Skills from './Skills';

export default {
  title: 'Resume/Skills',
  component: Skills,
} as Meta;

const Template: Story<typeof Skills> = (args) => {
  // Log the args to the console
  console.log(args, 'args');
  return <Skills {...args} />;
};

export const Default = Template.bind({});
Default.args = {
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

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  skills: [
    {
      name: "Core Competencies",
      skills: [
        'Strategic Planning',
        'Project Management',
        'Time Management',
        'Analytical Thinking',
      ]
    }
  ]
};

export const Empty = Template.bind({});
Empty.args = {
  skills: []
};
