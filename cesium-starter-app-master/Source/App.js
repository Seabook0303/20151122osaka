var viewer = new Cesium.Viewer('cesiumContainer');
var point = viewer.entities;
point.add({
position : Cesium.Cartesian3.fromDegrees(135.502101, 34.693684),
point : {
pixelSize : 10,
color : Cesium.Color.YELLOW
}
});

viewer.dataSources.add(Cesium.KmlDataSource.load('http://seabook0303.github.io/
20151122osaka/cesium-starter-app-master/foss4gosakakml/foss4gosaka.kml'));