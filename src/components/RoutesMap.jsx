import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { useEffect, useState } from "react";

const RouteMap = ({ start, end }) => {
    const [route, setRoute] = useState([]);

    useEffect(() => {
        const fetchRoute = async () => {
            try {
                const apiKey = "YOUR_OPENROUTESERVICE_API_KEY";
                const url = "https://api.openrouteservice.org/v2/directions/driving-car/geojson";

                const response = await axios.post(url, {
                    coordinates: [start, end],
                }, {
                    headers: {
                        "Authorization": apiKey,
                        "Content-Type": "application/json",
                    }
                });

                const coordinates = response.data.features[0].geometry.coordinates.map(coord => [coord[1], coord[0]]);
                setRoute(coordinates);
            } catch (error) {
                console.error("Error fetching route:", error);
            }
        };

        if (start && end) fetchRoute();
    }, [start, end]);

    return (
        <MapContainer center={start} zoom={13} style={{ height: "400px", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {route.length > 0 && <Polyline positions={route} color="blue" />}
            <Marker position={start} />
            <Marker position={end} />
        </MapContainer>
    );
};

export default RouteMap;
