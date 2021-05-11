import { Component, OnInit, Input, OnChanges} from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_continentsLow from '@amcharts/amcharts4-geodata/continentsLow';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-world-cases-comparison',
  templateUrl: './world-cases-comparison.component.html',
  styleUrls: ['./world-cases-comparison.component.css']
})
export class WorldCasesComparisonComponent implements OnInit, OnChanges {

  @Input() worldsummary: any;
  india = '';
  summaryCode = '';
  summaryTotalConfirmed = '';
  alldatacatagory = '';
  term: string;

  constructor() { }

  ngOnInit() {

    const deathschart = am4core.create('deathscase', am4maps.MapChart);
    const deathsinterfaceColors = new am4core.InterfaceColorSet();

    try {
      deathschart.geodata = am4geodata_worldLow;
    } catch (e) {
      deathschart.raiseCriticalError(new Error('Map geodata could not be loaded.'));
    }

    // Set projection
    deathschart.projection = new am4maps.projections.Orthographic();
    deathschart.panBehavior = 'rotateLongLat';
    deathschart.padding(20, 20, 20, 20);

    // Add zoom control
    deathschart.zoomControl = new am4maps.ZoomControl();

    const deathshomeButton = new am4core.Button();
    deathshomeButton.events.on('hit', function() {
      deathschart.goHome();
    });

    deathshomeButton.icon = new am4core.Sprite();
    deathshomeButton.padding(7, 5, 7, 5);
    deathshomeButton.width = 30;
    deathshomeButton.icon.path = 'M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8';
    deathshomeButton.marginBottom = 10;
    deathshomeButton.parent = deathschart.zoomControl;
    deathshomeButton.insertBefore(deathschart.zoomControl.plusButton);

    deathschart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color('#bfa58d');
    deathschart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 1;
    deathschart.deltaLongitude = 20;
    deathschart.deltaLatitude = -20;

    // limits vertical rotation
    deathschart.adapter.add('deltaLatitude', function(delatLatitude){
        return am4core.math.fitToRange(delatLatitude, -90, 90);
    });

  // Create map polygon series
    const deathsshadowPolygonSeries = deathschart.series.push(new am4maps.MapPolygonSeries());
    deathsshadowPolygonSeries.geodata = am4geodata_continentsLow;

    try {
      deathsshadowPolygonSeries.geodata = am4geodata_continentsLow;
    } catch (e) {
      deathsshadowPolygonSeries.raiseCriticalError(new Error('Map geodata could not be loaded.'));
    }

    deathsshadowPolygonSeries.useGeodata = true;
    deathsshadowPolygonSeries.dx = 2;
    deathsshadowPolygonSeries.dy = 2;
    deathsshadowPolygonSeries.mapPolygons.template.fill = am4core.color('#000');
    deathsshadowPolygonSeries.mapPolygons.template.fillOpacity = 0.2;
    deathsshadowPolygonSeries.mapPolygons.template.strokeOpacity = 0;
    deathsshadowPolygonSeries.fillOpacity = 0.1;
    deathsshadowPolygonSeries.fill = am4core.color('#000');

  // Create map polygon series
    const deathspolygonSeries = deathschart.series.push(new am4maps.MapPolygonSeries());
    deathspolygonSeries.useGeodata = true;

    deathspolygonSeries.calculateVisualCenter = true;
    deathspolygonSeries.tooltip.background.fillOpacity = 0.2;
    deathspolygonSeries.tooltip.background.cornerRadius = 20;

    const deathstemplate = deathspolygonSeries.mapPolygons.template;
    deathstemplate.nonScalingStroke = true;
    deathstemplate.fill = am4core.color('#f9e3ce');
    deathstemplate.stroke = am4core.color('#e2c9b0');

    deathspolygonSeries.calculateVisualCenter = true;
    deathstemplate.propertyFields.id = 'id';
    deathstemplate.tooltipPosition = 'fixed';
    deathstemplate.fillOpacity = 1;

    deathstemplate.events.on('over', function (event) {
      if (event.target.dummyData) {
        event.target.dummyData.isHover = true;
      }
    });
    deathstemplate.events.on('out', function (event) {
      if (event.target.dummyData) {
        event.target.dummyData.isHover = false;
      }
    });

    const deathshs = deathspolygonSeries.mapPolygons.template.states.create('hover');
    deathshs.properties.fillOpacity = 1;
    deathshs.properties.fill = am4core.color('#ff073a');

    const deathsgraticuleSeries = deathschart.series.push(new am4maps.GraticuleSeries());
    deathsgraticuleSeries.mapLines.template.stroke = am4core.color('#fff');
    deathsgraticuleSeries.fitExtent = false;
    deathsgraticuleSeries.mapLines.template.strokeOpacity = 0.2;
    deathsgraticuleSeries.mapLines.template.stroke = am4core.color('#fff');

    const deathsmeaselsSeries = deathschart.series.push(new am4maps.MapPolygonSeries());
    deathsmeaselsSeries.tooltip.background.fillOpacity = 0;
    deathsmeaselsSeries.tooltip.background.cornerRadius = 20;
    deathsmeaselsSeries.tooltip.autoTextColor = false;
    deathsmeaselsSeries.tooltip.label.fill = am4core.color('#000');
    deathsmeaselsSeries.tooltip.dy = -5;

    const deathsmeaselTemplate = deathsmeaselsSeries.mapPolygons.template;
    deathsmeaselTemplate.fill = am4core.color('#ff073a');
    deathsmeaselTemplate.strokeOpacity = 0;
    deathsmeaselTemplate.fillOpacity = 0.75;
    deathsmeaselTemplate.tooltipPosition = 'fixed';

    const deathshs2 = deathsmeaselsSeries.mapPolygons.template.states.create('hover');
    deathshs2.properties.fillOpacity = 1;
    deathshs2.properties.fill = am4core.color('#ff073a');

    deathspolygonSeries.events.on('inited', function () {
      deathspolygonSeries.mapPolygons.each(function (mapPolygon) {
        const count = data[mapPolygon.id];

        if (count > 0) {
          const deathspolygon = deathsmeaselsSeries.mapPolygons.create();
          deathspolygon.multiPolygon = am4maps.getCircle(mapPolygon.visualLongitude, mapPolygon.visualLatitude, Math.max(0.2, Math.log(count) * Math.LN10 / 10));
          // console.log(mapPolygon.dataItem);
          // console.log(mapPolygon.dataItem.dataContext);
          if (mapPolygon.dataItem.dataContext['name']) {
            deathspolygon.tooltipText = mapPolygon.dataItem.dataContext['name'] + ': ' + count;
          } else {
            deathspolygon.tooltipText = 'No Name: ' + count;
          }
          mapPolygon.dummyData = deathspolygon;
          deathspolygon.events.on('over', function() {
            mapPolygon.isHover = true;
          });
          deathspolygon.events.on('out', function() {
            mapPolygon.isHover = false;
          });
        } else {
          if (mapPolygon.dataItem.dataContext['name']) {
            mapPolygon.tooltipText = mapPolygon.dataItem.dataContext['name'] + ': ' + count;
          } else {
            mapPolygon.tooltipText = 'No Name: ' + count;
          }
          mapPolygon.fillOpacity = 0.9;
        }
      });
    });

    const data = {};

    const summarydata = this.worldsummary;
    for (const data1 of summarydata) {
      // console.log(data1);
      // console.log(data1.CountryCode);
      // console.log(data1.TotalConfirmed);
      // console.log(data1.TotalDeaths);
      data[data1.CountryCode] = data1.TotalDeaths;
    }
  }


  ngOnChanges() {
    try {
      console.log(this.worldsummary);
      // this.india = this.worldsummary.CountryCode;
      this.alldatacatagory = this.worldsummary;
    } catch (ex) {
      // window.alert(ex);
    }
  }

}
