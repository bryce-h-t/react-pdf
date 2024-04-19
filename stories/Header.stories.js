import { fn } from '@storybook/test';
import Header from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
  argTypes: {
    user: {
      control: 'text',
      description: 'User name for logged in state',
    },
    onLogin: { action: 'onLogin' },
    onLogout: { action: 'onLogout' },
    onCreateAccount: { action: 'onCreateAccount' },
  },
};

export const LoggedIn = {
  args: {
    user: 'Jane Doe',
  },
};

export const LoggedOut = {
  args: {
    user: '',
  },
};
