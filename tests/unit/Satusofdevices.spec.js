import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import { mount } from "@vue/test-utils";
import statusofdevices from "@/components/statusofdevices.vue";


let component;
beforeEach(() => {
  component = shallowMount(statusofdevices);
});

describe("statusofdevices.vue", () => {

it("Test: Status of devices prompt text should be visible", () => {
  // expect(component.find().exists()).to.be.true;
  expect(component.text()).to.have.string('Status of Devices');
});

//ON and OFF, should i duplicate that, since we have each of the two?
//also what about the
it("Test: ON should be visible", () => {
  // expect(component.find().exists()).to.be.true;
  expect(component.text()).to.have.string('ON');
});

it("Test: OFF should be visible", () => {
  // expect(component.find().exists()).to.be.true;
  expect(component.text()).to.have.string('OFF');
});


});
