import React from 'react';
import { StoryFn as Story, Meta } from '@storybook/react';
import Experience from './Experience';

export default {
  title: 'Resume/Experience',
  component: Experience,
} as Meta;

const Template: Story<typeof Experience> = (args) => <Experience {...args} />;

export const Default = Template.bind({});
Default.args = {
  experienceData: [
    {
      company: 'Jedi Temple, Coruscant',
      date: 'A long time ago...',
      details: [
        'Started a new Jedi Temple to train the next generation of Jedi Masters',
        'Recruited and trained a new generation of Jedi Knights from within the New Republic',
        'Communicated with deceased Jedi Masters to learn the secrets of the Jedi Order',
      ],
      position: 'Head Jedi Master',
    },
    {
      company: 'Rebel Alliance',
      date: 'A long time ago...',
      details: [
        'Lead legions of troops into battle while demonstrating bravery, competence and honor',
        'Created complicated battle plans in conjunction with other Rebel leaders to ensure the greatest chance of success',
        'Defeated Darth Vader in single-combat, and convinced him to betray his mentor, the Emperor',
      ],
      position: 'General',
    },
    {
      company: 'Rebel Alliance',
      date: 'A long time ago...',
      details: [
        'Destroyed the Death Star by using the force to find its only weakness and delivering a torpedo into the center of the ship',
        'Commanded a squadron of X-Wings into battle',
        'Defeated an enemy AT-AT single-handedly after his ship was destroyed',
        'Awarded a medal for valor and bravery in battle for his successful destruction of the Death Star',
      ],
      position: 'Lieutenant Commander',
    },
    {
      company: 'Tatooine Moisture Refinery',
      date: 'A long time ago...',
      details: [
        'Replaced damaged power converters',
        'Performed menial labor throughout the farm to ensure its continued operation',
      ],
      position: 'Moisture Farmer',
    },
  ],
};

export const JediAcademy = Template.bind({});
JediAcademy.args = {
  experienceData: [
    {
      company: 'Jedi Temple, Coruscant',
      date: 'A long time ago...',
      details: [
        'Oversaw the training of young Jedi initiates in the ways of the Force',
        'Managed temple resources and coordinated with the Jedi Council',
        'Led diplomatic missions to maintain peace across the galaxy',
      ],
      position: 'Jedi Master',
    },
  ],
};

export const RebelAllianceGeneral = Template.bind({});
RebelAllianceGeneral.args = {
  experienceData: [
    {
      company: 'Rebel Alliance',
      date: 'A long time ago...',
      details: [
        'Strategized and executed major operations against the Galactic Empire',
        'Negotiated alliances with other systems and organizations',
        'Trained and led a diverse team of pilots and soldiers',
      ],
      position: 'General',
    },
  ],
};

export const StarshipCommander = Template.bind({});
StarshipCommander.args = {
  experienceData: [
    {
      company: 'Rebel Alliance Fleet',
      date: 'A long time ago...',
      details: [
        'Commanded a Mon Calamari star cruiser in pivotal battles',
        'Coordinated with squadron leaders to execute combat strategies',
        'Managed ship operations and crew welfare during extended missions',
      ],
      position: 'Starship Commander',
    },
  ],
};

export const MoistureFarmHand = Template.bind({});
MoistureFarmHand.args = {
  experienceData: [
    {
      company: 'Lars Homestead, Tatooine',
      date: 'A long time ago...',
      details: [
        'Maintained vaporators and other essential farm equipment',
        'Assisted in the harvest of moisture for trade and sustenance',
        'Performed general maintenance and repairs around the homestead',
      ],
      position: 'Farm Hand',
    },
  ],
};

// New story added for testing different experience data
export const DroidTechnician = Template.bind({});
DroidTechnician.args = {
  experienceData: [
    {
      company: 'Droid Repair Bay, Mos Eisley',
      date: 'A long time ago...',
      details: [
        'Diagnosed and repaired a wide range of droid models',
        'Managed inventory of spare parts and placed orders for new supplies',
        'Trained junior technicians in droid maintenance protocols',
      ],
      position: 'Lead Droid Technician',
    },
  ],
};
