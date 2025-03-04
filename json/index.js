// just geographic, projected, and vertical coordinate systems until someone asks for more...
const geogcs = require('./pe_list_geogcs.json')
const projcs = require('./pe_list_projcs.json')
const vertcs = require('./pe_list_vertcs.json')

exports.lookup = function (code) {
  return projcs.ProjectedCoordinateSystems.find(function (crs) {
    // accept both integers and strings
    return (+code === crs['wkid'] || +code === crs['latestWkid'])
  }) ||
  geogcs.GeographicCoordinateSystems.find(function (crs) {
    return (+code === crs['wkid'] || +code === crs['latestWkid'])
  }) ||
  vertcs.VerticalCoordinateSystems.find(function (crs) {
    return (+code === crs['wkid'] || +code === crs['latestWkid'])
  })
}
