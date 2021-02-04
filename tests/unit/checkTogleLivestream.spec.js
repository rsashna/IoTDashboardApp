import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import { mount } from "@vue/test-utils";
import livestream from "@/components/livestream.vue";

describe("livestream.vue", () => {

  it('Test: should render prompt when show=true, else hide it', async () => {
    const wrapper = mount(livestream)
    expect(wrapper.text()).match(/View Livestream of Door/)

    await wrapper.setData({
      show: false
    })

    expect(wrapper.text()).not.match(/View Livestream of Door/)
  });
});
