import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import { mount } from "@vue/test-utils";
import accordion from "@/components/accordion.vue";


let component;
beforeEach(() => {
  component = shallowMount(accordion);
});

describe("accordion.vue", () => {

  it("Test:Door menu item should be visible", () => {
    expect(component.text()).to.have.string('Door');
  });
  it("Test:Air Conditioner menu item should be visible", () => {
    expect(component.text()).to.have.string('Air Conditioner');
  });
  it("Test:Smart Fridge menu item should be visible", () => {
    expect(component.text()).to.have.string('Smart Fridge');
  });
  it("Test:Smart Bulb menu item should be visible", () => {
    expect(component.text()).to.have.string('Smart Bulb');
  });

  it("Test:Peak hours text for Door item", () => {
    expect(component.text()).to.have.string('Peak hours used:');
  });

  it("Test:Peak hours text for Door item", () => {
    expect(component.text()).to.have.string('Estimated annual cost of appliance:');
  });


});
