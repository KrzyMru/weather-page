import type { Meta, StoryObj } from '@storybook/react-vite';
import DailyWeatherCardSkeleton from '../app/components/daily-weather-card/skeletons/daily-weather-card-skeleton';

const meta = {
  title: 'Skeletons/DailyWeatherCardSkeleton',
  component: DailyWeatherCardSkeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DailyWeatherCardSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};