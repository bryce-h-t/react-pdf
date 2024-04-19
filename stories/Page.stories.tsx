/** @jsxImportSource react */
import React from 'react';
import Page from './Page';

export default {
  title: 'Example/Page',
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const UserLoggedIn = Template.bind({});
UserLoggedIn.args = {
  user: 'Jane Doe',
};

export const UserLoggedOut = Template.bind({});
UserLoggedOut.args = {
  user: undefined,
};

export const UserCreatingAccount = Template.bind({});
UserCreatingAccount.args = {
  // Removed the user property to indicate that the user is not logged in yet
};

export const PageWithCustomHeader = Template.bind({});
PageWithCustomHeader.args = {
  header: 'Custom Header Title',
};

export const PageWithCustomContent = Template.bind({});
PageWithCustomContent.args = {
  content: 'Custom content here',
};

export const PageWithLinks = Template.bind({});
PageWithLinks.args = {
  links: true,
};

export const PageWithList = Template.bind({});
PageWithList.args = {
  list: true,
};

export const PageWithDifferentSections = Template.bind({});
PageWithDifferentSections.args = {
  sections: 3,
};

export const PageWithTips = Template.bind({});
PageWithTips.args = {
  tips: true,
};

// Note: Since the Page component does not directly take props, these stories simulate different states of the Page component
