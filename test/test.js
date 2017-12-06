
const expect = require('chai').expect
const kg2lb = require('..').convertToKg
const kg2lb2 = require('..').convertToLb

describe('#kg2lb', function(){

  it('Utilizando la funcion convertToKg(lb) vas a poder realizar las conversiones de Kg a Lb.', function(){
    const translation = kg2lb(25)
    expect(translation).to.equal(11.3398)
  })
  it('Utilizando la funcion convertToLb(kg) vas a poder realizar las conversiones de Lb a Kg.', function(){
    const translation = kg2lb2(47)
    expect(translation).to.equal(103.6171)
  })
})
