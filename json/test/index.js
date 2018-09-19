const test = require('tape')
const codes = require('../')

test('lookup project codes', function (t) {
  t.plan(5)

  // projected codes
  let proj = codes.lookup(3857)
  t.equal(proj.name, 'WGS_1984_Web_Mercator_Auxiliary_Sphere')

  // geographic codes
  proj = codes.lookup(3819)
  t.equal(proj.name, 'GCS_HD1909')

  // undefined proj code
  proj = codes.lookup(3333333)
  t.equal(proj, undefined)

  // just the name
  let name = codes.lookup('3857').name
  t.equal(name, 'WGS_1984_Web_Mercator_Auxiliary_Sphere')

  // try the old one
  name = codes.lookup('102100').name
  t.equal(name, 'WGS_1984_Web_Mercator_Auxiliary_Sphere')
})
