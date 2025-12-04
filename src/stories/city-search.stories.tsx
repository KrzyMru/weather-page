import type { Meta, StoryObj } from '@storybook/react-vite';
import CitySearch from '../app/components/city-search/city-search';
import store from '../app/redux/store';
import { Provider } from 'react-redux';

const meta = {
  title: 'Components/CitySearch',
  component: CitySearch,
  tags: ['autodocs'],
} satisfies Meta<typeof CitySearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (story) => <Provider store={store}>{story()}</Provider>,
  ],
};
