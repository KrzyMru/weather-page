import type { Meta, StoryObj } from '@storybook/react-vite';
import DailyForecast from '../app/components/daily-forecast/daily-forecast';

const meta = {
  title: 'Components/DailyForecast',
  component: DailyForecast,
  tags: ['autodocs'],
} satisfies Meta<typeof DailyForecast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleForecast: Story = {
  args: {
    forecastData: [
      { time: "2025-11-26", weather_code: 0, temperature_2m_max: 10.1, temperature_2m_min: 3.1 },
      { time: "2025-11-27", weather_code: 3, temperature_2m_max: 3.2, temperature_2m_min: -0.4 },
      { time: "2025-11-28", weather_code: 45, temperature_2m_max: 4.1, temperature_2m_min: -1.1 },
      { time: "2025-11-29", weather_code: 63, temperature_2m_max: 6.1, temperature_2m_min: 1.8 },
      { time: "2025-11-30", weather_code: 71, temperature_2m_max: -1.6, temperature_2m_min: -8.9 },
      { time: "2025-12-01", weather_code: 95, temperature_2m_max: 3.2, temperature_2m_min: -1.2 },
      { time: "2025-12-02", weather_code: 2, temperature_2m_max: 2.8, temperature_2m_min: -1.6 },
    ],
  },
};

export const Loading: Story = {
  args: {
    forecastData: [],
    loading: true,
  },
};
