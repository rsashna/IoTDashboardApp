import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import livestream from "@/components/livestream.vue";

describe("livestream.vue", () => {

  let component;
  beforeEach(() => {
    component = shallowMount(livestream);
  });

    it("Test: livestream prompt text should be visible", () => {
      expect(component.text()).to.have.string('View Livestream of Door');
    });
});
