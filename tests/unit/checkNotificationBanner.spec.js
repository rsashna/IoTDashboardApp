import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import { mount } from "@vue/test-utils";
import notification from "@/components/notification.vue";

describe("notification.vue", () => {

  it('Test: Toggle alert message', async () => {
    const wrapper = mount(notification)
    await wrapper.setData({
      alertMessage: 'Alert: Door is Unlocked! Check the livestream.',
      showAlert: true
    })

    expect(wrapper.text()).match(/Alert: Door is Unlocked! Check the livestream./)

    await wrapper.setData({
      showAlert: false
    })

    expect(wrapper.text()).not.match(/Alert: Door is Unlocked! Check the livestream./)
  });
});
