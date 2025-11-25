import type { Meta, StoryObj } from '@storybook/react-vite';
import InfoWeatherCard from '../app/components/info-weather-card/info-weather-card';

const meta = {
  title: 'Components/InfoWeatherCard',
  component: InfoWeatherCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InfoWeatherCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Wind: Story = {
  args: {
    title: "Wind",
    data: "14 km/h",
  },
};

export const Precipitation: Story = {
  args: {
    title: "Precipitation",
    data: "0 mm",
  },
};

export const MissingData: Story = {
  args: {
    title: "Precipitation",
  },
};

export const Loading: Story = {
  args: {
    title: "Wind",
    loading: true,
  },
};
