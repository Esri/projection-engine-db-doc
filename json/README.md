# @esri/proj-codes

[![npm version](https://img.shields.io/npm/v/@esri/proj-codes.svg?style=flat-square)](https://www.npmjs.com/package/@esri/proj-codes)
[![build status](https://img.shields.io/travis/Esri/proj-codes/master.svg?style=flat-square)](https://travis-ci.org/Esri/proj-codes)

This module provides a method for looking up information about the Coordinate Reference Systems (CRS) shipped with ArcGIS.

Provide a Well Known ID (WKID) to the `lookup()` method and the CRS Name, Well Known Text (WKT) and other metadata will be returned.

##  Usage

```console
npm install @esri/proj-codes
```

Then require the module, call the `lookup` method and pass in your well known id of choice.

```js
const codes = require('@esri/proj-codes')

const crs = codes.lookup(3857)

crs.name
> 'WGS_1984_Web_Mercator_Auxiliary_Sphere'

crs.wkt
> 'PROJCS["WGS_1984_Web_Mercator_Auxiliary_Sphere",GEOGCS["GCS_WGS_1984"...'

crs.description
> 'WGS 1984 Web Mercator Major Auxiliary Sphere'

crs.authority
> 'EPSG'

crs.deprecated
> 'no'

crs.extent
> { "slat": -85.06, "nlat": 85.06, "llon": -180.0, "rlon": 180.0 }

// this works too
codes.lookup(3857).name
> 'WGS_1984_Web_Mercator_Auxiliary_Sphere'
```

## Resources

* [Using spatial references](http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Using_spatial_references/02r3000000qq000000/)
* [ArcGIS for Developers](http://developers.arcgis.com)

## Issues

Find a bug or want to request a new feature? Please let us know by submitting an [issue](https://github.com/Esri/projection-engine-db-doc/issues).

## Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/Esri/contributing).

## [Changelog](https://github.com/Esri/projection-engine-db-doc/blob/master/CHANGELOG.md)

## Licensing

Copyright &copy; 2010-2022 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [LICENSE](../LICENSE) file.
