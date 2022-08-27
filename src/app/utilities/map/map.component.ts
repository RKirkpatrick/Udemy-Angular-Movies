import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { latLng, LeafletMouseEvent, Marker, tileLayer } from 'leaflet';
import {
  coordinatesMap,
  coordinatesMapWithMessage,
  markerIcon,
} from './coordinate';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Angular Movies',
      }),
    ],
    zoom: 11,
    center: latLng(45.505113, -122.794876),
  };

  layers: Marker<any>[] = [];

  @Input()
  initialCoordinates: coordinatesMapWithMessage[] = [];

  @Input()
  editMode: boolean = true;

  @Output()
  onSelectedLocation = new EventEmitter<coordinatesMap>();

  constructor() {}

  ngOnInit(): void {
    this.layers = this.initialCoordinates.map((value) => {
      const m = markerIcon([value.latitude, value.longitude]);
      if (value.message) {
        m.bindPopup(value.message, { autoClose: false, autoPan: false });
      }
      return m;
    });
  }

  handleMapClick(event: LeafletMouseEvent) {
    if (this.editMode) {
      const latitude = event.latlng.lat;
      const longitude = event.latlng.lng;
      console.log({ latitude, longitude });
      this.layers = [];
      this.layers.push(markerIcon([latitude, longitude]));
      this.onSelectedLocation.emit({ latitude, longitude });
    }
  }
}
