# Esri Projection Engine Database Documentation

The Esri Projection Engine (PE) libraries deal with coordinate reference
systems and their projections and transformations, as well as providing
many support functions such as calculating distances and areas,
converting between lat/lon notations, importing/exporting objects from/to
well-known text (WKT) strings, converting from/to well-known ID (WKID) values, etc.
To perform WKID conversion, the PE contains a comprehensive database of
known coordinate systems, datums, ellipsoids, units, etc. This database is
regularly updated and kept in sync with the EPSG database.

This documentation is based on ArcGIS Pro version 3.6.
Entries taken from EPSG are from the 12.018 version of the EPSG database.

### Contents

Documentation files are found in the following directories:

| Directory | Contents | Filenames |
|:----------|:---------|:----------|
| json      | All factory objects in JSON format      | pe_list_\<objtype\>.json    |
| csv       | All factory objects in CSV format       | pe_list_\<objtype\>.csv     |
| text      | All factory objects in TXT format       | pe_list_\<objtype\>.txt     |
| objedit   | The entire PE factory in objedit format | \<objtype\>_\<rectype\>.txt |
| fgdb      | All factory objects with an area extent in feature class dataset | pe_area_extents.gdb\ </br>pe_list_\<objtype\>|
| shp       | All factory objects with an area extent in shapefile dataset     | pe_list_\<objtype\>.shp, _etc._|
| proj4     | Updated PROJ4 files                     | esri                        |
| gdal      | Updated GDAL files                      | esri_extra.wkt</br>esri_epsg.wkt |
| other     | Other files                             | PE_user_defined_objects.pdf</br>proj4-esri.txt |

### Notes

<ul>
   <li> Each object has a well-known ID (WKID), also called a code or factory code.
        WKIDs are unique within an object type, like a unit of measure, or a set of objects,
        like the coordinate reference systems.

   <li> Some entries have undergone a "code change". A code change can occur because an
        entry was added to the Esri software first and was given an Esri WKID.
        Most Esri WKIDs are in the 1xxxxx range.
        If EPSG adds the entry, we will change the WKID to the EPSG code (range is 1024 - 32767).
        Another reason for a code change is because of an error in the original definition.
        In the tables, the WKID field contains the original code while latest-WKID field
        is the new code.

   <li><p>If an entry comes from the EPSG database, then the authority name
          is "EPSG" and the version value is in the form
          "EPSG-version(Esri-version)".</p>
       <p>The "EPSG-version" is either the EPSG version in which the entry was
          added or the EPSG version in which the entry was last updated
          (with no way to tell which one it is).</p>
       <p>The "Esri-version" is always the Esri version in which the entry was
          added.</p>

   <li> The GDAL file "esri_extra.wkt" should replace the following files in the GDAL
        distribution (http://www.gdal.org):
        <ul>
           <li> data/esri_extra.wkt
           <li> data/esri_StatePlane_extra.wkt
           <li> data/esri_Wisconsin_extra.wkt
        </ul>

   <li> The PROJ4 file "esri" should replace the following files in the PROJ4 distribution
        (http://proj4.org):
        <ul>
           <li> nad/esri
           <li> nad/esri_extra
        </ul>

   <li>Area extents are specified in degrees (from Greenwich).

   <li>Accuracy values in transformation entries are specified in meters.

   <li>Documentation of the objedit files can be found in the file
       "other/PE_user_defined_objects.pdf".
</ul>

### ArcGIS and EPSG versions

ArcGIS software packages use the Esri Projection Engine library, which includes definitions for coordinate reference systems, transformations, and other objects that they rely on like ellipsoids and units. When we add or update an object, it is tagged with the EPSG version. Each ArcGIS software release is linked to a specific EPSG version number. Any new or updated objects since the previous associated EPSG version are included if possible. 

Associating an EPSG version number with a particular ArcGIS release does not guarantee that every object or change in that or previous EPSG versions are included. We do not support all object types within the EPSG registry or we may not update an object because the change will cause issues in interoperability with previously released ArcGIS versions. 


ArcMap\* and/or ArcGIS Enterprise/Server | ArcGIS Pro | Build # | EPSG | Pro Release Date | ArcMap\* or ArcGIS Enterprise Release Date
-- | -- | -- | -- | -- | --
12.0.0 | 3.6.0 | 59527 | 12.018 | 13-Nov-2025 | 18-Nov-2025
11.5.0 | 3.5.0 | 57366 | 12.002 | 13-May-2025 | 22-May-2025
11.4.0 | 3.4.0 | 55405 | 11.015 | 7-Nov-2024 | 7-Nov-2024
11.3.0 | 3.3.0 | 52636 | 11.003 | 7-May-2024 | 23-May-2024
11.2.0 | 3.2.0 | 49743 | 10.094 | 7-Nov-2023 | 9-Nov-2023
11.1.0 | 3.1.0 | 41833 | 10.076 | 23-Feb-2023 | 20-Apr-2023
11.0.0 | 3.0.0 | 36056 | 10.054 | 23-Jun-2022 | 22-July-2022
10.9.1 (10.8.2\*) | 2.9.0 | 32739 | 10.032 | 11-Nov-2021 | 9-Dec-2021
10.9.0 | 2.8.0 | 29751 | 10.014 | 13-May-2021 | 7-May-2021
  | 2.7.0 | 28628 | 9.8.6 | 16-Dec-2020 |  
10.8.1 | 2.6.0 | 24783 | 9.8.6 | 28-Jul-2020 | 28-Jul-2020
10.8.0 | 2.5.0 | 12790 | 9.8.2 | 6-Feb-2020 | 2-Feb-2020
10.7.1 | 2.4.0 | 11595 | 9.1.2 | 27-June-2019 | 27-Jun-2019
10.7.0 | 2.3.0 | 10450 | 9.1.2 | 24-Jan-2019 | 21-Mar-2019
10.6.1 | 2.2.0 | 9270 | 9.1.2 | 26-Jun-2018 | 17-Jul-2018
10.6.0 | 2.1.0 | 8321 | 9.1.2 | 17-Jan-2018 | 17-Jan-2018
10.5.1 | 2.0.0 | 7333 | 9.0.0 | 27-Jun-2017 | 29-Jun-2017
10.5.0 | 1.4.0 | 6489 | 8.9.4 | 11-Jan-2017 | 15-Dec-2016
10.4.1 |   | 5635 | 8.8.0 |   | 31-May-2016
10.4.0 |   | 5524 | 8.7.2 |   | 18-Feb-2016

**\*** Version 10.8.2 is the final ArcMap / ArcGIS Desktop release. Versions 10.9.0 and later are ArcGIS Enterprise/Server releases

### Issues

Find a bug or want to request additional documentation? Please let us know by submitting
an issue.

### Licensing

Copyright &copy; 2010-2025 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's
[license.txt](license.txt) file.
