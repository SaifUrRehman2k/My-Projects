import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

// Custom component to handle RapidAPI headers on tile requests
const RapidApiWeatherTileLayer = ({ time = 30, unit = 'metric', opacity = 0.7 }) => {
    const map = useMap();
    const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;

    useEffect(() => {
        // Create a custom Leaflet TileLayer
        const CustomTileLayer = L.TileLayer.extend({
            createTile(coords, done) {
                const tile = document.createElement('img');

                // Construct the dynamic tile URL using current coords
                const url = `https://weather-forecast-map-tiles.p.rapidapi.com/tile/${coords.z}/${coords.x}/${coords.y}?time=${time}&unit=${unit}`;

                // Fetch image with required RapidAPI headers
                fetch(url, {
                    headers: {
                        'x-rapidapi-key': apiKey,
                        'x-rapidapi-host': 'weather-forecast-map-tiles.p.rapidapi.com',
                    },
                })
                    .then((response) => {
                        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                        return response.blob();
                    })
                    .then((blob) => {
                        tile.src = URL.createObjectURL(blob);
                        done(null, tile);
                    })
                    .catch((err) => {
                        done(err, tile);
                    });

                return tile;
            },
        });

        const layer = new CustomTileLayer('', {
            opacity: opacity,
            minZoom: 2,
            maxZoom: 10,
        });

        layer.addTo(map);

        // Cleanup layer when unmounted
        return () => {
            map.removeLayer(layer);
        };
    }, [map, apiKey, time, unit, opacity]);

    return null;
}

export default RapidApiWeatherTileLayer