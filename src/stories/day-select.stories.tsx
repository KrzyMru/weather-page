import type { Meta, StoryObj } from '@storybook/react-vite';
import DaySelect from '../app/components/day-select/day-select';
import { useArgs } from 'storybook/preview-api';

const meta = {
  title: 'Components/DaySelect',
  component: DaySelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DaySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    days: ['2025-11-27', '2025-11-28', '2025-11-29', '2025-11-30', '2025-12-01', '2025-12-02', '2025-12-03'],
    value: '2025-11-27',
  },
  render: (args) => {
    const [{ value }, updateArgs] = useArgs();
    const onChange = (newValue: string) => updateArgs({ value: newValue });
    
    return <DaySelect {...args} value={value} onChange={onChange} />;
  },
};

export const MissingData: Story = {
  args: {
    days: [],
  },
};

export const Loading: Story = {
  args: {
    days: [],
    loading: true,
  },
};


