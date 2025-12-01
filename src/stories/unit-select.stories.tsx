import type { Meta, StoryObj } from '@storybook/react-vite';
import UnitSelect from '../app/components/unit-select/unit-select';
import store from '../app/redux/store';
import { Provider } from 'react-redux';

const meta = {
  title: 'Components/UnitSelect',
  component: UnitSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UnitSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (story) => <Provider store={store}>{story()}</Provider>,
  ],
};


