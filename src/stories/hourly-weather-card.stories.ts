import type { Meta, StoryObj } from '@storybook/react-vite';
import HourlyWeatherCard from '../app/components/hourly-weather-card/hourly-weather-card';
import IconSunny from "../app/assets/icons/weather/icon-sunny.webp";
import IconRain from "../app/assets/icons/weather/icon-rain.webp";
import IconSnow from "../app/assets/icons/weather/icon-snow.webp";

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
    date: new Date(),
    temperature: 16,
  },
};

export const Rainy: Story = {
  args: {
    imageSrc: IconRain,
    imageAlt: 'Rain',
    date: new Date(Date.now() + 5 * 60 * 60 * 1000),
    temperature: 11,
  },
};

export const Snowy: Story = {
  args: {
    imageSrc: IconSnow,
    imageAlt: 'Snow',
    date: new Date(Date.now() + 9 * 60 * 60 * 1000),
    temperature: -5,
  },
};
