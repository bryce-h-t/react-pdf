const path = require('path');

module.exports = ({ config }) => {
  const newConfig = {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@react-pdf/renderer': path.join(__dirname, '..', 'packages', 'examples', 'src', 'resume', '__mocks__'),
      },
    },
  };

  return newConfig;
};
