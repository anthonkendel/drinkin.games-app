import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import router from '@/router/router';

describe('App.vue', () => {
  it('should match snapshot', () => {
    const wrapper = mount(App, {
      router,
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
