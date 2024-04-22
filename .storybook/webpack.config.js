const path = require('path');

module.exports = ({ config }) => {
  const newConfig = {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@react-pdf/renderer': path.resolve(
          __dirname,
          '..',
          'node_modules',
          '@react-pdf',
          'renderer',
        ),
      },
    },
  };

  return newConfig;
};
