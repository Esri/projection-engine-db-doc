# Esri Projection Engine Database Documentation

The Esri Projection Engine (PE) libraries deal with coordinate reference
systems and their projections and transformations, as well as providing
many support functions such as calculating distances and areas,
converting between lat/lon notations, importing/exporting objects from/to
well-known text (WKT) strings, converting from/to well-known ID (WKID) values, etc.

To perform WKID conversion, the PE contains a comprehensive database of
known coordinate systems, datums, ellipsoids, units, etc. This database is
regularly updated and kept in sync with the EPSG database.

This documentation is based on ArcGIS Desktop version 10.6.1 (ArcGIS Pro version 2.2).
Entries taken from EPSG are from the 9.1.2 version of the EPSG database.

### Contents

Documentation files are found in the following directories:

| Directory | Contents | Filenames |
|:----------|:---------|:----------|
| json      | All factory objects in JSON format      | pe_list_\<objtype\>.json    |
| csv       | All factory objects in CSV format       | pe_list_\<objtype\>.csv     |
| text      | All factory objects in TXT format       | pe_list_\<objtype\>.txt     |
| objedit   | The entire PE factory in objedit format | \<objtype\>_\<rectype\>.txt |
| proj4     | Updated PROJ4 files                     | esri                        |
| gdal      | Updated GDAL files                      | <p>esri_extra.wkt</p>esri_epsg.wkt |
| other     | Other files                             | <p>PE_user_defined_objects.pdf</p>proj4-esri.txt |

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

### Issues

Find a bug or want to request additional documentation? Please let us know by submitting
an issue.

### Licensing

Copyright &copy; 2010-2018 Esri

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
