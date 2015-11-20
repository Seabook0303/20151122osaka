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

var Polygon = viewer.entities;

Polygon.add({
    name : 'Polygon',
    polygon : {
        hierarchy : Cesium.Cartesian3.fromDegreesArray([135.074695, 34.280084,
                                                        130.512834, 30.345116,
                                                        142.192407, 27.094318]),
        extrudedHeight: 500000.0,
	material : Cesium.Color.GREEN
    }
});
viewer.camera.flyTo({ destination : Cesium.Cartesian3.fromDegrees(135.502101, 34.693684, 15000.0)});