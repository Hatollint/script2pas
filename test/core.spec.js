const chai = require('chai');
const mocha = require('mocha');
const cases = require('./compile.test');
const core = require('../src/core');

describe('core', () => {
    it('can compile', () => cases.map(([pas, pon]) => chai.assert.equal(core.compile(pon, "pon"), pon)));
    it('can decompile', () => cases.map(([pas, pon]) => chai.assert.equal(core.compile(pas, "pas"), pas)));
});
