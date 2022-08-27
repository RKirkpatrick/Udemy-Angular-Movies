import { Icon, icon, Marker, marker } from 'leaflet';

export interface coordinatesMap {
  latitude: number;
  longitude: number;
}

export interface coordinatesMapWithMessage extends coordinatesMap {
  message: string;
}

export function markerIcon([latitude, longitude]: number[]): Marker<any> {
  return marker([latitude, longitude], {
    icon: icon({
      ...Icon.Default.prototype.options,
      iconUrl: 'src/assets/marker-icon.png',
      iconRetinaUrl: 'src/assets/marker-icon-2x.png',
      shadowUrl: 'src/assets/marker-shadow.png',
    }),
  });
}
