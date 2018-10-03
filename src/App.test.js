import App from '@/App';
import router from '@/router/router';
import store from '@/store/store';
import { mount } from '@vue/test-utils';

describe('App.vue', () => {
  it('should match snapshot', () => {
    const wrapper = mount(App, {
      router,
      store,
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
