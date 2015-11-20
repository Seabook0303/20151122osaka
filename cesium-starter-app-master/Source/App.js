var viewer = new Cesium.Viewer('cesiumContainer');
var point = viewer.entities;

point.add({
        position : Cesium.Cartesian3.fromDegrees(135.502101, 34.693684),
        point : {
            pixelSize : 10,
            color : Cesium.Color.YELLOW
    }
});


var line1 = viewer.entities;

line1.add({
    name : 'Red line on the surface',
    polyline : {
        positions : Cesium.Cartesian3.fromDegreesArray([135.502101, 34.693684,
                                                                                  139.692130, 35.689667]),
        width : 5,
        material : Cesium.Color.RED
    }
});

