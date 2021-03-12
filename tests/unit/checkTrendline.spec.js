import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import trendLine from "@/components/trendLine.vue";

describe("trendLine.vue", () => {

  let component;
  beforeEach(() => {
    component = shallowMount(trendLine);
  });

    it("Test: Device Usage Trends prompt text should be visible", () => {
      expect(component.text()).to.have.string('Device Usage Trends');
    });
    it("Test: Button 1 visible", () => {
      expect(component.text()).to.have.string('Weekly Trend');
    });
    it("Test: Button 2 visible", () => {
      expect(component.text()).to.have.string('Monthly Trend');
    });
    it("Test: Button 3 visible", () => {
      expect(component.text()).to.have.string('Yearly Trend');
    });
});
