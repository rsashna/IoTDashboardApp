import { expect, assert } from "chai";
import { shallowMount } from "@vue/test-utils";
import { mount } from "@vue/test-utils";
import estimatedCosts from "@/components/estimatedCosts.vue";



let component;
beforeEach(() => {
  component = shallowMount(estimatedCosts);
});



describe("estimatedCosts.vue", () => {

  it("Test: Estimated Costs prompt text should be visible", () => {
    // expect(component.find().exists()).to.be.true;
    expect(component.text()).to.have.string('Estimated Costs');
  });

  it("Test: weekly text should be visible", () => {
    // expect(component.find().exists()).to.be.true;
    expect(component.text()).to.have.string('Weekly');
  });

  // it("Test: weekly cost should be visible", () => {
  //   // expect(component.find().exists()).to.be.true;
  //   // expect(component.text()).to.have.string('$ 320');.isNumber
  //
  //
  //   assert.isNumber(component.$weeklyval, 'Weekly cost');
  // });

  it("Test: Monthly text should be visible", () => {
    // expect(component.find().exists()).to.be.true;
    expect(component.text()).to.have.string('Monthly');
  });

  it("Test: $ 820 text should be visible", () => {
    // expect(component.find().exists()).to.be.true;
    expect(component.text()).to.have.string('$ 820');
  });

  it("Test: Yearly text should be visible", () => {
    // expect(component.find().exists()).to.be.true;
    expect(component.text()).to.have.string('Yearly');
  });

  it("Test: $ 13,720 should be visible", () => {
    // expect(component.find().exists()).to.be.true;
    expect(component.text()).to.contain.string('13720');
  });


});
