(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/MedicineMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/MapContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/TileLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/Marker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/Popup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Polyline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/Polyline.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// User Location Icon (Pulsing Blue Dot)
const userLocationIcon = ("TURBOPACK compile-time truthy", 1) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
    className: "custom-user-marker",
    html: '\n    <div class="relative flex items-center justify-center w-8 h-8">\n      <span class="absolute inline-flex h-full w-full rounded-full bg-blue-500/30 opacity-75 animate-ping"></span>\n      <div class="relative rounded-full h-3.5 w-3.5 bg-blue-500 border-2 border-white shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>\n    </div>\n  ',
    iconSize: [
        32,
        32
    ],
    iconAnchor: [
        16,
        16
    ]
}) : "TURBOPACK unreachable";
// Pharmacy Icon (Cyan Cross Badge)
const storeLocationIcon = ("TURBOPACK compile-time truthy", 1) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
    className: "custom-store-marker",
    html: '\n    <div class="relative flex items-center justify-center w-10 h-10">\n      <div class="absolute inset-0 bg-cyan-500/20 rounded-full blur-sm animate-pulse"></div>\n      <div class="relative w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-emerald-500 border border-white/20 shadow-[0_0_12px_rgba(6,182,212,0.6)] flex items-center justify-center text-white">\n        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4.5 h-4.5 text-white">\n          <path d="M19 10.5h-5.5V5h-3v5.5H5v3h5.5V19h3v-5.5H19v-3z"/>\n        </svg>\n      </div>\n    </div>\n  ',
    iconSize: [
        40,
        40
    ],
    iconAnchor: [
        20,
        20
    ]
}) : "TURBOPACK unreachable";
// Highlighted Icon for Selected Pharmacy
const activeStoreLocationIcon = ("TURBOPACK compile-time truthy", 1) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
    className: "custom-active-store-marker",
    html: '\n    <div style="position:relative;width:48px;height:56px;display:flex;flex-direction:column;align-items:center;">\n      <span style="position:absolute;top:0;left:50%;transform:translateX(-50%);width:48px;height:48px;border-radius:50%;background:rgba(16,185,129,0.25);animation:ping 1s cubic-bezier(0,0,0.2,1) infinite;"></span>\n      <div style="\n        position:relative;z-index:1;\n        width:40px;height:40px;border-radius:50%;\n        background:linear-gradient(135deg,#10b981,#059669);\n        border:3px solid white;\n        box-shadow:0 0 18px rgba(16,185,129,0.9),0 0 6px rgba(16,185,129,0.5);\n        display:flex;align-items:center;justify-content:center;\n      ">\n        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18" height="18">\n          <path d="M19 10.5h-5.5V5h-3v5.5H5v3h5.5V19h3v-5.5H19v-3z"/>\n        </svg>\n      </div>\n      <div style="width:2px;height:12px;background:#10b981;opacity:0.8;margin-top:1px;"></div>\n    </div>\n  ',
    iconSize: [
        48,
        56
    ],
    iconAnchor: [
        24,
        56
    ],
    popupAnchor: [
        0,
        -58
    ]
}) : "TURBOPACK unreachable";
// Controller to update map view bounds when selected store or coordinates change
function MapController(param) {
    let { userLocation, selectedStoreLocation, isNavigating } = param;
    _s();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapController.useEffect": ()=>{
            if (!map) return;
            if (isNavigating) {
                // Follow the user close-up during active navigation
                map.setView(userLocation, 17);
            } else if (selectedStoreLocation) {
                // Fit both coordinates with padding
                const bounds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].latLngBounds([
                    userLocation,
                    selectedStoreLocation
                ]);
                map.fitBounds(bounds, {
                    padding: [
                        40,
                        40
                    ],
                    maxZoom: 16
                });
            } else {
                map.setView(userLocation, 14);
            }
        }
    }["MapController.useEffect"], [
        userLocation,
        selectedStoreLocation,
        isNavigating,
        map
    ]);
    return null;
}
_s(MapController, "IoceErwr5KVGS9kN4RQ1bOkYMAg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
    ];
});
_c = MapController;
const MedicineMap = (param)=>{
    let { userLocation, stores, selectedStore, onSelectStore, onRouteUpdate } = param;
    _s1();
    const [routeCoordinates, setRouteCoordinates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [routeDistance, setRouteDistance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [routeDuration, setRouteDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Navigation states
    const [isNavigating, setIsNavigating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [liveLocation, setLiveLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const getStoreCoordinates = (store)=>{
        var _store_storeDetails, _store_storeAddress, _store_storeAddress_location_coordinates, _store_storeAddress_location, _store_storeAddress1, _store_storeDetails1, _store_storeAddress2, _store_storeAddress_location_coordinates1, _store_storeAddress_location1, _store_storeAddress3;
        const lat = ((_store_storeDetails = store.storeDetails) === null || _store_storeDetails === void 0 ? void 0 : _store_storeDetails.latitude) || ((_store_storeAddress = store.storeAddress) === null || _store_storeAddress === void 0 ? void 0 : _store_storeAddress.latitude) || ((_store_storeAddress1 = store.storeAddress) === null || _store_storeAddress1 === void 0 ? void 0 : (_store_storeAddress_location = _store_storeAddress1.location) === null || _store_storeAddress_location === void 0 ? void 0 : (_store_storeAddress_location_coordinates = _store_storeAddress_location.coordinates) === null || _store_storeAddress_location_coordinates === void 0 ? void 0 : _store_storeAddress_location_coordinates[1]);
        const lng = ((_store_storeDetails1 = store.storeDetails) === null || _store_storeDetails1 === void 0 ? void 0 : _store_storeDetails1.longitude) || ((_store_storeAddress2 = store.storeAddress) === null || _store_storeAddress2 === void 0 ? void 0 : _store_storeAddress2.longitude) || ((_store_storeAddress3 = store.storeAddress) === null || _store_storeAddress3 === void 0 ? void 0 : (_store_storeAddress_location1 = _store_storeAddress3.location) === null || _store_storeAddress_location1 === void 0 ? void 0 : (_store_storeAddress_location_coordinates1 = _store_storeAddress_location1.coordinates) === null || _store_storeAddress_location_coordinates1 === void 0 ? void 0 : _store_storeAddress_location_coordinates1[0]);
        if (typeof lat === "number" && typeof lng === "number") {
            return [
                lat,
                lng
            ];
        }
        return null;
    };
    const selectedLoc = selectedStore ? getStoreCoordinates(selectedStore) : null;
    const currentStartLoc = liveLocation || userLocation;
    // Watch user coordinates in real-time when Navigation mode is active
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MedicineMap.useEffect": ()=>{
            let watchId = null;
            if (isNavigating) {
                if ("object" !== "undefined" && navigator.geolocation) {
                    watchId = navigator.geolocation.watchPosition({
                        "MedicineMap.useEffect": (position)=>{
                            const { latitude, longitude } = position.coords;
                            setLiveLocation([
                                latitude,
                                longitude
                            ]);
                        }
                    }["MedicineMap.useEffect"], {
                        "MedicineMap.useEffect": (error)=>{
                            console.error("Error watching navigation position:", error);
                        }
                    }["MedicineMap.useEffect"], {
                        enableHighAccuracy: true,
                        maximumAge: 0,
                        timeout: 8000
                    });
                }
            } else {
                setLiveLocation(null);
            }
            return ({
                "MedicineMap.useEffect": ()=>{
                    if (watchId !== null && "object" !== "undefined" && navigator.geolocation) {
                        navigator.geolocation.clearWatch(watchId);
                    }
                }
            })["MedicineMap.useEffect"];
        }
    }["MedicineMap.useEffect"], [
        isNavigating
    ]);
    // Fetch routing path geometry using OSRM open routing service
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MedicineMap.useEffect": ()=>{
            if (!selectedLoc || !currentStartLoc) {
                setRouteCoordinates([]);
                setRouteDistance("");
                setRouteDuration("");
                if (onRouteUpdate) onRouteUpdate({
                    distance: "",
                    duration: ""
                });
                return;
            }
            const fetchRoute = {
                "MedicineMap.useEffect.fetchRoute": async ()=>{
                    try {
                        var _response_data_routes, _response_data;
                        const [startLat, startLng] = currentStartLoc;
                        const [storeLat, storeLng] = selectedLoc;
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("https://router.project-osrm.org/route/v1/driving/".concat(startLng, ",").concat(startLat, ";").concat(storeLng, ",").concat(storeLat, "?overview=full&geometries=geojson"));
                        if ((_response_data = response.data) === null || _response_data === void 0 ? void 0 : (_response_data_routes = _response_data.routes) === null || _response_data_routes === void 0 ? void 0 : _response_data_routes[0]) {
                            const route = response.data.routes[0];
                            const geometry = route.geometry;
                            // Map coordinates from [lng, lat] to [lat, lng]
                            const coords = geometry.coordinates.map({
                                "MedicineMap.useEffect.fetchRoute.coords": (coord)=>[
                                        coord[1],
                                        coord[0]
                                    ]
                            }["MedicineMap.useEffect.fetchRoute.coords"]);
                            setRouteCoordinates(coords);
                            // Calculate distance in km and duration in minutes
                            const distKm = (route.distance / 1000).toFixed(2);
                            const durMin = Math.round(route.duration / 60).toString();
                            setRouteDistance(distKm);
                            setRouteDuration(durMin);
                            if (onRouteUpdate) {
                                onRouteUpdate({
                                    distance: distKm,
                                    duration: durMin
                                });
                            }
                        }
                    } catch (err) {
                        console.error("Error fetching OSRM routing:", err);
                    }
                }
            }["MedicineMap.useEffect.fetchRoute"];
            fetchRoute();
        }
    }["MedicineMap.useEffect"], [
        currentStartLoc,
        selectedLoc,
        onRouteUpdate
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full",
        children: [
            isNavigating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-3 left-3 right-3 z-20 bg-emerald-600/90 backdrop-blur-md border border-emerald-500/20 px-4 py-2.5 rounded-2xl flex items-center justify-between shadow-2xl animate-fade-in",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative flex h-2.5 w-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"
                                    }, void 0, false, {
                                        fileName: "[project]/components/MedicineMap.tsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-white"
                                    }, void 0, false, {
                                        fileName: "[project]/components/MedicineMap.tsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/MedicineMap.tsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-bold text-white uppercase tracking-wider",
                                children: "Live Navigation Active • OSRM"
                            }, void 0, false, {
                                fileName: "[project]/components/MedicineMap.tsx",
                                lineNumber: 212,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MedicineMap.tsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsNavigating(false),
                        className: "px-2.5 py-1 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-[9px] font-bold uppercase transition",
                        children: "End Trip"
                    }, void 0, false, {
                        fileName: "[project]/components/MedicineMap.tsx",
                        lineNumber: 216,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/MedicineMap.tsx",
                lineNumber: 206,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContainer"], {
                center: currentStartLoc,
                zoom: 14,
                className: "w-full h-full z-10",
                zoomControl: false,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapController, {
                        userLocation: currentStartLoc,
                        selectedStoreLocation: selectedLoc,
                        isNavigating: isNavigating
                    }, void 0, false, {
                        fileName: "[project]/components/MedicineMap.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
                        url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
                        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>'
                    }, void 0, false, {
                        fileName: "[project]/components/MedicineMap.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    currentStartLoc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                        position: currentStartLoc,
                        icon: userLocationIcon || undefined,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-black font-sans text-xs font-semibold",
                                children: isNavigating ? "Your Live Position" : "Your Location"
                            }, void 0, false, {
                                fileName: "[project]/components/MedicineMap.tsx",
                                lineNumber: 242,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/MedicineMap.tsx",
                            lineNumber: 241,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/MedicineMap.tsx",
                        lineNumber: 240,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    stores.map((store, index)=>{
                        var _store_storeDetails, _store_storeAddress, _store_storeAddress1;
                        const loc = getStoreCoordinates(store);
                        if (!loc) return null;
                        const isActive = (selectedStore === null || selectedStore === void 0 ? void 0 : selectedStore.store) === store.store;
                        const markerIcon = isActive ? activeStoreLocationIcon : storeLocationIcon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                            position: loc,
                            icon: markerIcon || undefined,
                            eventHandlers: {
                                click: ()=>onSelectStore(store)
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-black font-sans text-xs text-left p-0.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-bold text-gray-900",
                                            children: ((_store_storeDetails = store.storeDetails) === null || _store_storeDetails === void 0 ? void 0 : _store_storeDetails.name) || "Partner Pharmacy"
                                        }, void 0, false, {
                                            fileName: "[project]/components/MedicineMap.tsx",
                                            lineNumber: 268,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-gray-600 mt-0.5",
                                            children: [
                                                (_store_storeAddress = store.storeAddress) === null || _store_storeAddress === void 0 ? void 0 : _store_storeAddress.street,
                                                ", ",
                                                (_store_storeAddress1 = store.storeAddress) === null || _store_storeAddress1 === void 0 ? void 0 : _store_storeAddress1.city
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/MedicineMap.tsx",
                                            lineNumber: 269,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-emerald-600 font-bold mt-1",
                                            children: [
                                                "Stock: ",
                                                store.quantity,
                                                " units"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/MedicineMap.tsx",
                                            lineNumber: 272,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/MedicineMap.tsx",
                                    lineNumber: 267,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/MedicineMap.tsx",
                                lineNumber: 266,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, store.store || index, false, {
                            fileName: "[project]/components/MedicineMap.tsx",
                            lineNumber: 258,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0));
                    }),
                    routeCoordinates.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Polyline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Polyline"], {
                        positions: routeCoordinates,
                        pathOptions: {
                            color: "#10b981",
                            weight: 5,
                            opacity: 0.8,
                            lineJoin: "round"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/MedicineMap.tsx",
                        lineNumber: 283,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/MedicineMap.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            routeDistance && routeDuration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-3 left-3 right-3 z-20 bg-black/90 backdrop-blur-md border border-emerald-500/20 px-4 py-2.5 rounded-2xl flex items-center justify-between shadow-2xl animate-fade-in gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[9px] font-bold text-gray-400 uppercase tracking-widest",
                                children: isNavigating ? "Live Trip Details" : "Shortest Path Route"
                            }, void 0, false, {
                                fileName: "[project]/components/MedicineMap.tsx",
                                lineNumber: 299,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-bold text-white mt-0.5",
                                children: [
                                    "Distance: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-emerald-400",
                                        children: [
                                            routeDistance,
                                            " km"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/MedicineMap.tsx",
                                        lineNumber: 303,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/MedicineMap.tsx",
                                lineNumber: 302,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-gray-400 mt-0.5",
                                children: [
                                    "Est. Time: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white",
                                        children: [
                                            routeDuration,
                                            " mins"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/MedicineMap.tsx",
                                        lineNumber: 306,
                                        columnNumber: 26
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/MedicineMap.tsx",
                                lineNumber: 305,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MedicineMap.tsx",
                        lineNumber: 298,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    !isNavigating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsNavigating(true),
                        className: "px-3.5 py-2 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white text-xs font-bold rounded-xl shadow-lg transition duration-200 transform active:scale-95 flex items-center gap-1",
                        children: "Start Travel 🚗"
                    }, void 0, false, {
                        fileName: "[project]/components/MedicineMap.tsx",
                        lineNumber: 311,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/MedicineMap.tsx",
                lineNumber: 297,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/MedicineMap.tsx",
        lineNumber: 203,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(MedicineMap, "UH3u5M/4rsN4jzeWMDr5UrtE20o=");
_c1 = MedicineMap;
const __TURBOPACK__default__export__ = MedicineMap;
var _c, _c1;
__turbopack_context__.k.register(_c, "MapController");
__turbopack_context__.k.register(_c1, "MedicineMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/MedicineMap.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/MedicineMap.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_MedicineMap_tsx_a2ef3e50._.js.map