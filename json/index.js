// just geographic and projected coordinate systems until someone asks for more...
const geogcs = require('./pe_list_geogcs.json')
const projcs = require('./pe_list_projcs.json')

exports.lookup = function (code) {
  return projcs.ProjectedCoordinateSystems.find(function (crs) {
    // accept both integers and strings
    return (+code === crs['wkid'] || +code === crs['latestWkid'])
  }) ||
  geogcs.GeographicCoordinateSystems.find(function (crs) {
    return (+code === crs['wkid'] || +code === crs['latestWkid'])
  })
}
