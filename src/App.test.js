import App from '@/App';
import router from '@/router/router';
import store from '@/store/store';
import Buefy from 'buefy';
import { mount, createLocalVue } from '@vue/test-utils';

describe('App.vue', () => {
  it('should match snapshot', () => {
    const localVue = createLocalVue();
    localVue.use(Buefy, { defaultIconPack: 'fa' });
    const wrapper = mount(App, {
      router,
      store,
      localVue,
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
