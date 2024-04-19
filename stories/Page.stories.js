import Page from './Page';

export default {
  title: 'Example/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
};

export const LoggedOut = {
  args: {},
};

export const LoggedIn = {
  args: {
    user: 'Jane Doe',
  },
};
