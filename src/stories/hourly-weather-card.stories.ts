import type { Meta, StoryObj } from '@storybook/react-vite';
import HourlyWeatherCard from '../app/components/hourly-weather-card/hourly-weather-card';
import IconSunny from "../app/assets/icon-sunny.webp";
import IconRain from "../app/assets/icon-rain.webp";
import IconSnow from "../app/assets/icon-snow.webp";

const meta = {
  title: 'Components/HourlyWeatherCard',
  component: HourlyWeatherCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HourlyWeatherCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sunny: Story = {
  args: {
    imageSrc: IconSunny,
    imageAlt: 'Sunny',
    time: '9 AM',
    temperature: 16,
  },
};

export const Rainy: Story = {
  args: {
    imageSrc: IconRain,
    imageAlt: 'Rain',
    time: '2 PM',
    temperature: 11,
  },
};

export const Snowy: Story = {
  args: {
    imageSrc: IconSnow,
    imageAlt: 'Snow',
    time: '8 PM',
    temperature: -5,
  },
};

export const MissingData: Story = {};

export const Loading: Story = {
  args: {
    loading: true,
  }
};
