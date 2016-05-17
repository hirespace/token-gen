import { expect } from "chai";
import { Code } from "../src/lib/code.js";

describe('Code generator', () => {
  describe('Constructor', () => {
    it('accepts the number of characters', () => {
      expect(() => new Code('Non valid argument')).to.throw(Error);
    });
  });

  describe('generates a code', () => {
    it('has 10 characters by default', () => {
      let code = new Code();

      expect(code.toString().length).to.equal(10);
    });

    it('accepts code length', () => {
      let code = new Code(5);

      expect(code.toString().length).to.equal(5);
    });

  });

  describe('Code instance', () => {
    it('has a code property', () => {
      let code = new Code();
      
      expect(code.code).to.exist;
    });
  });
});
