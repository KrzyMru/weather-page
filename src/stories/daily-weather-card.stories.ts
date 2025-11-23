import type { Meta, StoryObj } from '@storybook/react-vite';
import DailyWeatherCard from '../app/components/daily-weather-card/daily-weather-card';
import IconSunny from "../app/assets/icon-sunny.webp";
import IconRain from "../app/assets/icon-rain.webp";
import IconSnow from "../app/assets/icon-snow.webp";

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
    day: 'Mon',
    imageSrc: IconSunny,
    imageAlt: 'Sunny',
    maxTemperature: 24,
    minTemperature: 16,
  },
};

export const Rainy: Story = {
  args: {
    day: 'Tue',
    imageSrc: IconRain,
    imageAlt: 'Rain',
    maxTemperature: 13,
    minTemperature: 6,
  },
};

export const Snowy: Story = {
  args: {
    day: 'Fri',
    imageSrc: IconSnow,
    imageAlt: 'Snow',
    maxTemperature: 3,
    minTemperature: -7,
  },
};

export const Loading: Story = {
  args: {
    day: 'Mon',
    imageSrc: IconSunny,
    imageAlt: 'Sunny',
    maxTemperature: 24,
    minTemperature: 16,
    loading: true,
  },
};
