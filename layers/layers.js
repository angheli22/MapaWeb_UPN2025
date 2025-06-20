ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([-512321.807870, 7513716.571503, 1619802.174654, 10600522.934261]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DepartamentodelPer_1 = new ol.format.GeoJSON();
var features_DepartamentodelPer_1 = format_DepartamentodelPer_1.readFeatures(json_DepartamentodelPer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_DepartamentodelPer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DepartamentodelPer_1.addFeatures(features_DepartamentodelPer_1);
var lyr_DepartamentodelPer_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DepartamentodelPer_1, 
                style: style_DepartamentodelPer_1,
                popuplayertitle: 'Departamento del Perú',
                interactive: true,
                title: '<img src="styles/legend/DepartamentodelPer_1.png" /> Departamento del Perú'
            });

lyr_OSMStandard_0.setVisible(true);lyr_DepartamentodelPer_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_DepartamentodelPer_1];
lyr_DepartamentodelPer_1.set('fieldAliases', {'NOMBDEP': 'Nombre del departamento:', 'COUNT': 'N° de distritos del departamento:', 'FIRST_IDDP': 'UBIGEO del departamento:', 'HECTARES': 'Superficie en Hectareas:', 'FOTOS': 'Fotos turisticas del departamento:', 'VIDEO': 'Video promocional del departamento:', 'WIKIPEDIA': 'Información del departamento:', });
lyr_DepartamentodelPer_1.set('fieldImages', {'NOMBDEP': 'TextEdit', 'COUNT': 'TextEdit', 'FIRST_IDDP': 'TextEdit', 'HECTARES': 'TextEdit', 'FOTOS': 'ExternalResource', 'VIDEO': 'TextEdit', 'WIKIPEDIA': 'TextEdit', });
lyr_DepartamentodelPer_1.set('fieldLabels', {'NOMBDEP': 'header label - always visible', 'COUNT': 'header label - always visible', 'FIRST_IDDP': 'header label - always visible', 'HECTARES': 'header label - always visible', 'FOTOS': 'header label - always visible', 'VIDEO': 'header label - always visible', 'WIKIPEDIA': 'header label - always visible', });
lyr_DepartamentodelPer_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});