import type { Meta, StoryObj } from '@storybook/react-vite';
import CurrentWeatherSkeleton from '../app/components/current-weather/skeletons/current-weather-skeleton';

const meta = {
  title: 'Skeletons/CurrentWeatherSkeleton',
  component: CurrentWeatherSkeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof CurrentWeatherSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};