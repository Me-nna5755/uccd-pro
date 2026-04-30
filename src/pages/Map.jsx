





import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

export default function MapPage() {
  const [position, setPosition] = useState([29.0661, 31.0994]);
  const [query, setQuery] = useState("");

  const searchLocation = async () => {
    if (!query.trim()) return;

    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
    );

    const data = await res.json();

    if (data?.length > 0) {
      setPosition([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
    }
  };

  return (
    <div className="h-screen flex flex-col">

      {/* 🔝 Search */}
      <div className="shrink-0 p-4 bg-white shadow flex gap-2">

        <input
          className="flex-1 border p-2 rounded"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ابحث..."
        />

        <button
          onClick={searchLocation}
          className="bg-blue-600 text-white px-4 rounded"
        >
          بحث
        </button>

      </div>

      {/* 🗺️ MAP (مهم جدًا: flex-1 + relative) */}
      <div className="flex-1 relative">

        <MapContainer
          center={position}
          zoom={13}
          className="absolute inset-0 w-full h-full"
        >

          <TileLayer
            attribution="&copy; OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={position}>
            <Popup>🏠 موقع السكن</Popup>
          </Marker>

        </MapContainer>

      </div>

      {/* 📌 Footer */}
      <div className="shrink-0 p-3 bg-gray-100 text-center text-sm">
        ابحث عن أي مكان في مصر 🌍
      </div>

    </div>
  );
}
