import { mount } from '@vue/test-utils'
import SbcSignout from '@/components/SbcSignout.vue'
import vuetify, { createVueRouter } from './setup'
import { createStore } from 'vuex'
import AccountModule from '@/store/modules/account'
import AuthModule from '@/store/modules/auth'

window.ResizeObserver =
    window.ResizeObserver ||
    jest.fn().mockImplementation(() => ({
      disconnect: jest.fn(),
      observe: jest.fn(),
      unobserve: jest.fn()
    }))

describe('SbcSignout', () => {
  let store: any
  let router: any
  beforeEach(() => {
    // Create a new Vuex store instance with the required modules
    store = createStore({
      modules: {
        aith: AuthModule,
        account: AccountModule
      }
    })
    router = createVueRouter()
  })

  it('renders loading screen when SBC Signout is loaded', () => {
    const wrapper = mount(SbcSignout, {
      global: {
        plugins: [store, vuetify, router]
      }
    })

    const loadingScreen = wrapper.findComponent({ name: 'loading-screen' })
    expect(loadingScreen.exists()).toBe(true)
  })

  // Add more unit tests for the remaining functionality of the component
})
