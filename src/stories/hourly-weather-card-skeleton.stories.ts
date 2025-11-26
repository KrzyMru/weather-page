import type { Meta, StoryObj } from '@storybook/react-vite';
import HourlyWeatherCardSkeleton from '../app/components/hourly-weather-card/skeletons/hourly-weather-card-skeleton';

const meta = {
  title: 'Skeletons/HourlyWeatherCardSkeleton',
  component: HourlyWeatherCardSkeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HourlyWeatherCardSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};