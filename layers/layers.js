var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_75_1 = new ol.format.GeoJSON();
var features_75_1 = format_75_1.readFeatures(json_75_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_75_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_75_1.addFeatures(features_75_1);
var lyr_75_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_75_1, 
                style: style_75_1,
                popuplayertitle: "丁目75人口",
                interactive: true,
    title: '丁目75人口<br />\
    <img src="styles/legend/75_1_0.png" /> 0 - 500<br />\
    <img src="styles/legend/75_1_1.png" /> 500 - 1000<br />\
    <img src="styles/legend/75_1_2.png" /> 1000 - 1500<br />\
    <img src="styles/legend/75_1_3.png" /> 1500 - 2000<br />\
    <img src="styles/legend/75_1_4.png" /> 2000 - 2500<br />\
    <img src="styles/legend/75_1_5.png" /> 2500 - 3000<br />\
    <img src="styles/legend/75_1_6.png" /> 3000 - 3246<br />'
        });
var format_1375_2 = new ol.format.GeoJSON();
var features_1375_2 = format_1375_2.readFeatures(json_1375_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1375_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1375_2.addFeatures(features_1375_2);
var lyr_1375_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1375_2, 
                style: style_1375_2,
                popuplayertitle: "13東京食品アクセス困難75歳",
                interactive: true,
    title: '13東京食品アクセス困難75歳<br />\
    <img src="styles/legend/1375_2_0.png" /> 0 - 20<br />\
    <img src="styles/legend/1375_2_1.png" /> 20 - 40<br />\
    <img src="styles/legend/1375_2_2.png" /> 40 - 60<br />\
    <img src="styles/legend/1375_2_3.png" /> 60 - 80<br />\
    <img src="styles/legend/1375_2_4.png" /> 80 - 87<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_75_1.setVisible(true);lyr_1375_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_75_1,lyr_1375_2];
lyr_75_1.set('fieldAliases', {'KEY_CODE': 'KEY_CODE', 'PREF': 'PREF', 'CITY': 'CITY', 'S_AREA': 'S_AREA', 'PREF_NAME': 'PREF_NAME', 'CITY_NAME': 'CITY_NAME', 'S_NAME': 'S_NAME', 'X_CODE': 'X_CODE', 'Y_CODE': 'Y_CODE', 'KCODE1': 'KCODE1', '総数７５歳以上': '総数７５歳以上', });
lyr_1375_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', '割合': '割合', '年齢': '年齢', '割合2': '割合2', });
lyr_75_1.set('fieldImages', {'KEY_CODE': 'TextEdit', 'PREF': 'TextEdit', 'CITY': 'TextEdit', 'S_AREA': 'TextEdit', 'PREF_NAME': 'TextEdit', 'CITY_NAME': 'TextEdit', 'S_NAME': 'TextEdit', 'X_CODE': 'TextEdit', 'Y_CODE': 'TextEdit', 'KCODE1': 'TextEdit', '総数７５歳以上': 'Range', });
lyr_1375_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'snippet': 'TextEdit', '割合': 'TextEdit', '年齢': 'TextEdit', '割合2': 'Range', });
lyr_75_1.set('fieldLabels', {'KEY_CODE': 'no label', 'PREF': 'no label', 'CITY': 'no label', 'S_AREA': 'no label', 'PREF_NAME': 'no label', 'CITY_NAME': 'no label', 'S_NAME': 'no label', 'X_CODE': 'no label', 'Y_CODE': 'no label', 'KCODE1': 'no label', '総数７５歳以上': 'no label', });
lyr_1375_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', '割合': 'no label', '年齢': 'no label', '割合2': 'no label', });
lyr_1375_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});