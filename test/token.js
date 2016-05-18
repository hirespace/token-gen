import { expect } from "chai";
import { Token } from "../src/lib/token.js";

describe('Token generator', () => {
  describe('Constructor', () => {
    it('accepts the number of characters', () => {
      expect(() => new Token('Non valid argument')).to.throw(Error);
    });
  });

  describe('generates a token', () => {
    it('has 5 characters by default', () => {
      let token = new Token();

      expect(token.toString().length).to.equal(5);
    });

    it('accepts token length', () => {
      let token = new Token(3);

      expect(token.toString().length).to.equal(3);
    });
  });

  describe('Token instance', () => {
    it('has a token property', () => {
      let token = new Token();

      expect(token.token).to.exist;
    });
  });
});
