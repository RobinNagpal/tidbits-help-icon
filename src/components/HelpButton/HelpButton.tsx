import React from 'react';

export interface ButtonProps {
  label: string;
}

const HelpButton = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default HelpButton;
