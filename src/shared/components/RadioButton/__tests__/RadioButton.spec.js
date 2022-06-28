import { mount } from '@vue/test-utils';
import { render, fireEvent, screen } from '@testing-library/vue';
import RadioButton from "../RadioButton.vue";

const PROPS = {
  label: 'My Label'
};
const ATTRS = { id: 'id' };
const ID_SELECTOR = '#id';
const LABEL = 'label';

describe('RadioButton.vue', () => {
  it('should render the component', () => {
    const container = mount(RadioButton);

    expect(container.exists()).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  it('should change value of radio button by clicking label', async () => {
    const container = mount(RadioButton, {
      propsData: PROPS,
      attrs: ATTRS
    });
    const label = container.find(LABEL);

    await label.trigger('click');
    const input = container.find(ID_SELECTOR);

    expect((input.element).checked).toBeTruthy();
  });

  it('should change value when radio button checked is true', () => {
    render(RadioButton);
    const radio = screen.getByRole('radio');

    fireEvent.change(radio, { target: { checked: true } });

    expect(radio).toHaveProperty('checked', true);
  });

  it('should change value when radio button checked is false', () => {
    render(RadioButton);
    const radio = screen.getByRole('radio');

    fireEvent.change(radio, { target: { checked: false } });

    expect(radio).toHaveProperty('checked', false);
  });
});
