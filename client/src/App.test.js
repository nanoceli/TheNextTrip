const { expect } = require("chai")
import { configure, shallow } from "enzyme"
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Home from "./components/Home/Home"
import App from "../src/App"

configure({adapter: new Adapter()});

describe('Home', () => {
  let wrapper = shallow(<Home/>)
    it("it should be a function", () => {
      expect(Home).to.be.a("function")
    })
    it("should render a div", () => {
      expect(wrapper.find('div'));
    }) 
})

describe('App', () => {
  let wrapper = shallow(<App/>)
    it("it should be a function", () => {
      expect(App).to.be.a("function")
    })
    it("should render a div", () => {
      expect(wrapper.find('div'));
    }) 
    it("should render a div", () => {
      expect(wrapper.find('route'));
    }) 
})

