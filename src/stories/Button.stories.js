/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    color: {control: 'color'},
    background: {control: 'color'},
    label: {control: 'text'},
    borderRadius: {control: 'number'}
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button handleClick={action("click")} {...args}>{args.label}</Button>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  backgroundColor: "#DA1212",
  color: "#ffffff",
  background: "#DA1212",
  label: "Default Button",
  borderRadius: 4
};

export const Secondary = Template.bind({});
Secondary.args = {
  backgroundColor: "#0AA1DD",
  color: "#ffffff",
  background: "#0AA1DD",
  label: "Secondary Button",
  borderRadius: 4
};

export const Disabled = Template.bind({});
Disabled.args = {
  backgroundColor: "#F4F9F9",
  color: "#AAAAAA",
  background: "#F4F9F9",
  label: "Disabled Button",
  borderRadius: 4
};


