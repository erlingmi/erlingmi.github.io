var wms_layers = [];

var lyr_Topografisknorgeskart_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.geonorge.no/skwms1/wms.topo",
                              attributions: ' ',
                              params: {
                                "LAYERS": "topo",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Topografisk norgeskart',
                            popuplayertitle: 'Topografisk norgeskart',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Topografisknorgeskart_0, 0]);
var lyr_MatrikkelWMS_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.geonorge.no/skwms1/wms.matrikkel",
                              attributions: ' ',
                              params: {
                                "LAYERS": "matrikkel_WMS",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Matrikkel WMS',
                            popuplayertitle: 'Matrikkel WMS',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MatrikkelWMS_1, 0]);
var format_punkter_2 = new ol.format.GeoJSON();
var features_punkter_2 = format_punkter_2.readFeatures(json_punkter_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_punkter_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_punkter_2.addFeatures(features_punkter_2);
var lyr_punkter_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_punkter_2, 
                style: style_punkter_2,
                popuplayertitle: 'punkter',
                interactive: true,
                title: '<img src="styles/legend/punkter_2.png" /> punkter'
            });
var format_hytter_punkt_3 = new ol.format.GeoJSON();
var features_hytter_punkt_3 = format_hytter_punkt_3.readFeatures(json_hytter_punkt_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hytter_punkt_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hytter_punkt_3.addFeatures(features_hytter_punkt_3);
var lyr_hytter_punkt_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hytter_punkt_3, 
                style: style_hytter_punkt_3,
                popuplayertitle: 'hytter_punkt',
                interactive: true,
                title: '<img src="styles/legend/hytter_punkt_3.png" /> hytter_punkt'
            });

lyr_Topografisknorgeskart_0.setVisible(true);lyr_MatrikkelWMS_1.setVisible(true);lyr_punkter_2.setVisible(true);lyr_hytter_punkt_3.setVisible(true);
var layersList = [lyr_Topografisknorgeskart_0,lyr_MatrikkelWMS_1,lyr_punkter_2,lyr_hytter_punkt_3];
lyr_punkter_2.set('fieldAliases', {'fid': 'fid', 'type': 'type', 'kommentar': 'kommentar', });
lyr_hytter_punkt_3.set('fieldAliases', {'fid': 'fid', 'hytter': 'hytter', });
lyr_punkter_2.set('fieldImages', {'fid': 'TextEdit', 'type': 'TextEdit', 'kommentar': 'TextEdit', });
lyr_hytter_punkt_3.set('fieldImages', {'fid': 'TextEdit', 'hytter': 'TextEdit', });
lyr_punkter_2.set('fieldLabels', {'fid': 'no label', 'type': 'no label', 'kommentar': 'no label', });
lyr_hytter_punkt_3.set('fieldLabels', {'fid': 'no label', 'hytter': 'no label', });
lyr_hytter_punkt_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});