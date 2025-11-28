import type { Meta, StoryObj } from '@storybook/react-vite';
import DailyWeatherCard from '../app/components/daily-weather-card/daily-weather-card';
import IconSunny from "../app/assets/icons/weather/icon-sunny.webp";
import IconRain from "../app/assets/icons/weather/icon-rain.webp";
import IconSnow from "../app/assets/icons/weather/icon-snow.webp";

const meta = {
  title: 'Components/DailyWeatherCard',
  component: DailyWeatherCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DailyWeatherCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sunny: Story = {
  args: {
    date: new Date(),
    imageSrc: IconSunny,
    imageAlt: 'Sunny',
    maxTemperature: 24,
    minTemperature: 16,
  },
};

export const Rainy: Story = {
  args: {
    date: new Date(Date.now() + 24 * 60 * 60 * 1000),
    imageSrc: IconRain,
    imageAlt: 'Rain',
    maxTemperature: 13,
    minTemperature: 6,
  },
};

export const Snowy: Story = {
  args: {
    date: new Date(Date.now() + 48 * 60 * 60 * 1000),
    imageSrc: IconSnow,
    imageAlt: 'Snow',
    maxTemperature: 3,
    minTemperature: -7,
  },
};
