import React, { useState } from "react";
import colors from "../scss/index.scss";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { MapContainer, LayersControl, TileLayer, WMSTileLayer } from "react-leaflet";
import L from "leaflet";
import { useSelector } from "react-redux";
import OwnMarker from "./Marker.jsx";
import OwnMarkerWithoutPic from "./MarkerWithoutPic.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import LocationMarker from "./LocationMarker.jsx";
import { useMediaQuery } from "react-responsive";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-shadow.png",
});

const Leaflet = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const points = useSelector((state) => state.points);
  const [locationActivate, setLocationActivate] = useState(false);

  //that was for polygons but may be changed to marker design
  const geoJSONstyle = () => {
    return {
      // the fillColor is adapted from a property which can be changed by the user (segment)
      fillColor: colors.primarycolor,
      //stroke-width: to have a constant width on the screen need to adapt with scale
      opacity: 1,
      color: colors.primarycolor,
      fillOpacity: 0.5,
    };
  };

  return (
    <>
      <MapContainer
        center={[4, -74.2]}
        zoom={6}
        zoomControl={false}
        className={isTabletOrMobile ? "pointMap mobile" : "pointMap"}>
        
        <LayersControl position='topright'>
          <LayersControl.BaseLayer name='OpenStreetMap'>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer checked name='OSM Reduced Colors'>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name='Bing Image'>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
            />
          </LayersControl.BaseLayer>
          <LayersControl.Overlay checked name="Rivers">
            <WMSTileLayer
                  url="http://localhost:8080/geoserver/SII/wms?service=WMS"
                  version='1.1.0'
                  layers="SII:Drenaje_Sencillo"
                  srs="EPSG:4326"
                  format="image/png"
                  opacity= "1"
                  transparent
            ></WMSTileLayer>
            </LayersControl.Overlay>
            <LayersControl.Overlay checked name="Buildings">
            <WMSTileLayer
                  url="http://localhost:8080/geoserver/SII/wms?service=WMS"
                  version='1.1.0'
                  layers="SII:Construccion_R"
                  srs="EPSG:4326"
                  format="image/png"
                  opacity= "1"
                  transparent
            ></WMSTileLayer>
            </LayersControl.Overlay>
            <LayersControl.Overlay checked name="Political Boundaries">
            <WMSTileLayer
                  url="http://localhost:8080/geoserver/SII/wms?service=WMS"
                  version='1.1.0'
                  layers="SII:Administrativo_R"
                  srs="EPSG:4326"
                  format="image/png"
                  opacity= "1"
                  transparent
            ></WMSTileLayer>
            </LayersControl.Overlay>
            <LayersControl.Overlay checked name="Flood Hazard">
            <WMSTileLayer
                  url="http://localhost:8080/geoserver/SII/wms?service=WMS"
                  version='1.1.0'
                  layers="SII:Zonas Inundación NIÑA"
                  srs="EPSG:4326"
                  format="image/png"
                  opacity= "1"
                  transparent
            ></WMSTileLayer>
            </LayersControl.Overlay>
            <LayersControl.Overlay checked name="Meteorological Stations">
            <WMSTileLayer
                  url="http://localhost:8080/geoserver/SII/wms?service=WMS"
                  version='1.1.0'
                  layers="SII:CNE_IDEAM"
                  srs="EPSG:4326"
                  format="image/png"
                  opacity= "1"
                  transparent
            ></WMSTileLayer>
            </LayersControl.Overlay>
            <LayersControl.Overlay checked name="LandCover 2010 - 2012">
            <WMSTileLayer
                  url="http://localhost:8080/geoserver/SII/wms?service=WMS"
                  version='1.1.0'
                  layers="top:states"
                  srs="EPSG:4326"
                  format="image/png"
                  opacity= "1"
                  transparent
            ></WMSTileLayer>
        </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
      <div id='positioningDiv' className='location-div'>
        <button
          className={
            locationActivate ? "btn btn-primary" : "btn btn-primary grey"
          }
          onClick={() => {
            setLocationActivate(!locationActivate);
          }}>
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            style={{ fontSize: "1.6em" }}
          />
        </button>
      </div>
    </>
  );
};

export default Leaflet;
