import type { Meta, StoryObj } from '@storybook/react-vite';
import CurrentWeather from '../app/components/current-weather/current-weather';
import IconSunny from "../app/assets/icons/weather/icon-sunny.webp";
import IconRain from "../app/assets/icons/weather/icon-rain.webp";

const meta = {
  title: 'Components/CurrentWeather',
  component: CurrentWeather,
  tags: ['autodocs'],
} satisfies Meta<typeof CurrentWeather>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sunny: Story = {
  args: {
    place: 'Berlin, Germany',
    date: new Date(),
    imageSrc: IconSunny,
    imageAlt: 'Sunny',
    temperature: 20,
  },
};

export const Rainy: Story = {
  args: {
    place: 'Paris, France',
    date: new Date(),
    imageSrc: IconRain,
    imageAlt: 'Rain',
    temperature: 11,
  },
};
