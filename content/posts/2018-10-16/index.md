---
path: '/post-two'
cover: './speed.jpg'
date: '2018-10-16'
title: 'Make a raster mask for a vector geometry'
published: true
tags: ['QGIS', 'numpy', 'rasterio']
---

### Create a raster mask for a vector geometry using rasterio

the commands needed to burn a mask into a split...

```python
import subprocess
subprocess.call(["rio","mask","mask_raster2.tif","bologna3.tif","--geojson-mask","split.geojson"])
```

split.geojson would have to be the JSON of the current full split geometry.

I will have to test this out with some real masks and see if it returns the split raster
with only the bounds from the geometry.

![allybabba](.speed.jpg)
