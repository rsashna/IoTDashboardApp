import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import trendLine from "@/components/trendLine.vue";

describe("trendLine.vue", () => {

  let component;
  beforeEach(() => {
    component = shallowMount(trendLine);
  });

    it("Test: Device Usage Trends prompt text should be visible", () => {
      // expect(component.find().exists()).to.be.true;
      expect(component.text()).to.have.string('Device Usage Trends');
    });
});
