import React from 'react';

const Link = ({ style, children, src }) => {
  return <a style={style} href={src}>{children}</a>;
};

export default Link;
