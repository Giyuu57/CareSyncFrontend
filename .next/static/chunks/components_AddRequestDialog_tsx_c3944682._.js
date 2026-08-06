(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/AddRequestDialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/ToastContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/request.ts [app-client] (ecmascript)");
;
;
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
// Dynamically import react-leaflet components to prevent SSR errors
const MapContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.MapContainer), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = MapContainer;
const TileLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.TileLayer), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c1 = TileLayer;
const Marker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.Marker), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c2 = Marker;
// Custom HTML/CSS DivIcon for selected store location
const selectionLocationIcon = ("TURBOPACK compile-time truthy", 1) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
    className: 'custom-selection-marker',
    html: '\n    <div class="relative flex flex-col items-center justify-center w-10 h-10">\n      <div class="absolute -top-6 animate-bounce">\n        <div class="relative w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 border border-white/20 shadow-[0_0_15px_rgba(6,182,212,0.8)] flex items-center justify-center text-white">\n          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-white">\n            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>\n            <circle cx="12" cy="10" r="3"/>\n          </svg>\n        </div>\n      </div>\n      <div class="absolute bottom-1 w-2.5 h-2.5 bg-cyan-400 rounded-full opacity-75 blur-[2px] animate-ping"></div>\n    </div>\n  ',
    iconSize: [
        40,
        40
    ],
    iconAnchor: [
        20,
        40
    ]
}) : "TURBOPACK unreachable";
// Fix for Leaflet marker icon using official Leaflet assets on unpkg CDN (ensures visibility)
const defaultIcon = ("TURBOPACK compile-time truthy", 1) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [
        25,
        41
    ],
    iconAnchor: [
        12,
        41
    ],
    popupAnchor: [
        1,
        -34
    ]
}) : "TURBOPACK unreachable";
if ("object" !== 'undefined' && defaultIcon) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Marker.prototype.options.icon = defaultIcon;
}
const AddRequestDialog = (param)=>{
    let { onClose, onRequestAdded } = param;
    _s();
    var _s1 = __turbopack_context__.k.signature();
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [newRequest, setNewRequest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        owner: "",
        name: "",
        licenseNumber: "",
        contact: "",
        address: {
            latitude: 0,
            longitude: 0,
            street: "",
            city: "",
            state: "",
            postalCode: "",
            country: ""
        }
    });
    const [userLocation, setUserLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fieldErrors, setFieldErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Auto-fill Registrant Owner ID from localStorage user session
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddRequestDialog.useEffect": ()=>{
            const stored = localStorage.getItem("user_data");
            if (stored) {
                try {
                    const parsed = JSON.parse(stored);
                    setNewRequest({
                        "AddRequestDialog.useEffect": (prev)=>({
                                ...prev,
                                owner: parsed._id || parsed.id || ""
                            })
                    }["AddRequestDialog.useEffect"]);
                } catch (err) {
                    console.error("Error parsing user profile data:", err);
                }
            }
        }
    }["AddRequestDialog.useEffect"], []);
    const reverseGeocode = async (lat, lng)=>{
        try {
            const res = await fetch("https://nominatim.openstreetmap.org/reverse?format=json&lat=".concat(lat, "&lon=").concat(lng, "&zoom=18&addressdetails=1"));
            if (res.ok) {
                const data = await res.json();
                if (data && data.address) {
                    const addr = data.address;
                    const street = [
                        addr.house_number || addr.building,
                        addr.road || addr.pedestrian,
                        addr.suburb || addr.neighbourhood
                    ].filter(Boolean).join(", ") || data.display_name || "";
                    setNewRequest((prev)=>({
                            ...prev,
                            address: {
                                ...prev.address,
                                latitude: lat,
                                longitude: lng,
                                street: street,
                                city: addr.city || addr.town || addr.village || addr.municipality || "",
                                state: addr.state || "",
                                postalCode: addr.postcode || "",
                                country: addr.country || ""
                            }
                        }));
                }
            }
        } catch (err) {
            console.error("Error during reverse geocoding:", err);
        }
    };
    const detectLocationManually = ()=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position)=>{
                const { latitude, longitude } = position.coords;
                setUserLocation([
                    latitude,
                    longitude
                ]);
                reverseGeocode(latitude, longitude);
            }, (error)=>{
                console.error("Error getting location:", error);
                showToast("Could not access your location. Check browser permissions.", "warning");
            });
        } else {
            showToast("Geolocation is not supported by your browser.", "error");
        }
    };
    const handleAddRequest = async ()=>{
        const errors = {};
        if (!newRequest.name.trim()) errors.name = "Pharmacy name is required.";
        if (!newRequest.licenseNumber.trim()) errors.licenseNumber = "License number is required.";
        if (!newRequest.contact.trim()) {
            errors.contact = "Contact number is required.";
        } else if (!/^[\d\s\-\+]{10,15}$/.test(newRequest.contact.replace(/\s/g, ''))) {
            errors.contact = "Contact must be 10-15 digits.";
        }
        if (!newRequest.address.street.trim()) errors.street = "Street address is required.";
        if (!newRequest.address.city.trim()) errors.city = "City is required.";
        if (newRequest.address.latitude === 0 && newRequest.address.longitude === 0) {
            errors.coords = "Please select store coordinates on the map.";
        }
        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors);
            showToast(Object.values(errors)[0], "warning");
            return;
        }
        setFieldErrors({});
        setSubmitting(true);
        try {
            const token = localStorage.getItem("auth_token");
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addRequest"])(token, newRequest);
            onRequestAdded(data);
            showToast("Store registration request submitted!", "success");
            onClose();
        } catch (err) {
            console.error("Error adding request:", err);
            showToast("Failed to submit registration request. Please try again.", "error");
        } finally{
            setSubmitting(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddRequestDialog.useEffect": ()=>{
            const getuserLocation = {
                "AddRequestDialog.useEffect.getuserLocation": ()=>{
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition({
                            "AddRequestDialog.useEffect.getuserLocation": (position)=>{
                                const { latitude, longitude } = position.coords;
                                setUserLocation([
                                    latitude,
                                    longitude
                                ]);
                                setNewRequest({
                                    "AddRequestDialog.useEffect.getuserLocation": (prev)=>({
                                            ...prev,
                                            address: {
                                                ...prev.address,
                                                latitude,
                                                longitude
                                            }
                                        })
                                }["AddRequestDialog.useEffect.getuserLocation"]);
                                reverseGeocode(latitude, longitude);
                            }
                        }["AddRequestDialog.useEffect.getuserLocation"], {
                            "AddRequestDialog.useEffect.getuserLocation": (error)=>{
                                console.error("Error getting location:", error);
                                setUserLocation([
                                    26.907524,
                                    75.739639
                                ]); // Fallback center
                            }
                        }["AddRequestDialog.useEffect.getuserLocation"]);
                    } else {
                        setUserLocation([
                            26.907524,
                            75.739639
                        ]);
                    }
                }
            }["AddRequestDialog.useEffect.getuserLocation"];
            getuserLocation();
        }
    }["AddRequestDialog.useEffect"], []);
    const LocationSelector = ()=>{
        _s1();
        const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapEvents"])({
            click (e) {
                const { lat, lng } = e.latlng;
                setNewRequest({
                    "AddRequestDialog.LocationSelector.useMapEvents": (prev)=>({
                            ...prev,
                            address: {
                                ...prev.address,
                                latitude: lat,
                                longitude: lng
                            }
                        })
                }["AddRequestDialog.LocationSelector.useMapEvents"]);
                reverseGeocode(lat, lng);
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "AddRequestDialog.LocationSelector.useEffect": ()=>{
                if (userLocation) {
                    map.flyTo(userLocation, 13);
                }
            }
        }["AddRequestDialog.LocationSelector.useEffect"], [
            userLocation,
            map
        ]);
        return newRequest.address.latitude && newRequest.address.longitude && selectionLocationIcon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Marker, {
            position: [
                newRequest.address.latitude,
                newRequest.address.longitude
            ],
            icon: selectionLocationIcon
        }, void 0, false, {
            fileName: "[project]/components/AddRequestDialog.tsx",
            lineNumber: 246,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)) : null;
    };
    _s1(LocationSelector, "zPCZ+3HeGH+H4qlX3OjKZcPqDaU=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapEvents"]
        ];
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-50 sm:p-4 p-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-zinc-950 border border-white/10 sm:rounded-3xl rounded-none shadow-2xl w-full h-full sm:h-auto max-w-lg sm:max-h-[90vh] overflow-hidden flex flex-col relative animate-scale-up",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -right-20 -top-20 w-48 h-48 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/components/AddRequestDialog.tsx",
                    lineNumber: 258,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/5 border-b border-white/5 px-6 py-5 flex justify-between items-center relative z-10 text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-bold text-white tracking-tight",
                                    children: "Register Partner Store"
                                }, void 0, false, {
                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                    lineNumber: 263,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-400 mt-0.5",
                                    children: "Submit drugstore credentials for admin verification."
                                }, void 0, false, {
                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                    lineNumber: 264,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AddRequestDialog.tsx",
                            lineNumber: 262,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-1.5 rounded-full hover:bg-white/5 text-gray-400 hover:text-white transition cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/components/AddRequestDialog.tsx",
                                lineNumber: 270,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/AddRequestDialog.tsx",
                            lineNumber: 266,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AddRequestDialog.tsx",
                    lineNumber: 261,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 overflow-y-auto space-y-5 flex-grow relative z-10 text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiBriefcase"], {}, void 0, false, {
                                            fileName: "[project]/components/AddRequestDialog.tsx",
                                            lineNumber: 280,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Pharmacy Credentials"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                    lineNumber: 279,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5",
                                                    children: "Registrant Owner ID"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: newRequest.owner,
                                                            disabled: true,
                                                            className: "w-full pl-9 pr-4 py-2.5 bg-white/5 border border-white/5 rounded-xl text-gray-400 text-xs font-mono select-all cursor-not-allowed opacity-75"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AddRequestDialog.tsx",
                                                            lineNumber: 289,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiHash"], {
                                                            className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AddRequestDialog.tsx",
                                                            lineNumber: 295,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AddRequestDialog.tsx",
                                            lineNumber: 284,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5",
                                                    children: [
                                                        "Pharmacy Name ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-cyan-400",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AddRequestDialog.tsx",
                                                            lineNumber: 301,
                                                            columnNumber: 33
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "e.g. CareMax Drugstore",
                                                    value: newRequest.name,
                                                    onChange: (e)=>{
                                                        setNewRequest({
                                                            ...newRequest,
                                                            name: e.target.value
                                                        });
                                                        if (fieldErrors.name) setFieldErrors((prev)=>({
                                                                ...prev,
                                                                name: ""
                                                            }));
                                                    },
                                                    className: "w-full px-4 py-2.5 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition text-xs ".concat(fieldErrors.name ? "border-rose-500/60 bg-rose-500/5" : "border-white/10"),
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                fieldErrors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-rose-400 text-[10px] mt-1 flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiAlertCircle"], {
                                                            size: 9
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AddRequestDialog.tsx",
                                                            lineNumber: 318,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " ",
                                                        fieldErrors.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                                    lineNumber: 317,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AddRequestDialog.tsx",
                                            lineNumber: 299,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5",
                                                    children: [
                                                        "License Number ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-cyan-400",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AddRequestDialog.tsx",
                                                            lineNumber: 325,
                                                            columnNumber: 34
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "e.g. DL-293849",
                                                    value: newRequest.licenseNumber,
                                                    onChange: (e)=>{
                                                        setNewRequest({
                                                            ...newRequest,
                                                            licenseNumber: e.target.value
                                                        });
                                                        if (fieldErrors.licenseNumber) setFieldErrors((prev)=>({
                                                                ...prev,
                                                                licenseNumber: ""
                                                            }));
                                                    },
                                                    className: "w-full px-4 py-2.5 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition text-xs font-mono ".concat(fieldErrors.licenseNumber ? "border-rose-500/60 bg-rose-500/5" : "border-white/10"),
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                fieldErrors.licenseNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-rose-400 text-[10px] mt-1 flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiAlertCircle"], {
                                                            size: 9
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AddRequestDialog.tsx",
                                                            lineNumber: 342,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " ",
                                                        fieldErrors.licenseNumber
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                                    lineNumber: 341,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AddRequestDialog.tsx",
                                            lineNumber: 323,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5",
                                                    children: [
                                                        "Contact Number ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-cyan-400",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AddRequestDialog.tsx",
                                                            lineNumber: 349,
                                                            columnNumber: 34
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            placeholder: "e.g. +91 98765 43210",
                                                            value: newRequest.contact,
                                                            onChange: (e)=>{
                                                                setNewRequest({
                                                                    ...newRequest,
                                                                    contact: e.target.value
                                                                });
                                                                if (fieldErrors.contact) setFieldErrors((prev)=>({
                                                                        ...prev,
                                                                        contact: ""
                                                                    }));
                                                            },
                                                            className: "w-full pl-9 pr-4 py-2.5 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition text-xs ".concat(fieldErrors.contact ? "border-rose-500/60 bg-rose-500/5" : "border-white/10"),
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AddRequestDialog.tsx",
                                                            lineNumber: 352,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPhone"], {
                                                            className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AddRequestDialog.tsx",
                                                            lineNumber: 365,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                                    lineNumber: 351,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                fieldErrors.contact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-rose-400 text-[10px] mt-1 flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiAlertCircle"], {
                                                            size: 9
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AddRequestDialog.tsx",
                                                            lineNumber: 369,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " ",
                                                        fieldErrors.contact
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                                    lineNumber: 368,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AddRequestDialog.tsx",
                                            lineNumber: 347,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                    lineNumber: 283,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AddRequestDialog.tsx",
                            lineNumber: 278,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 pt-2 border-t border-white/5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMapPin"], {}, void 0, false, {
                                            fileName: "[project]/components/AddRequestDialog.tsx",
                                            lineNumber: 379,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Store Address"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                    lineNumber: 378,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5",
                                                    children: [
                                                        "Street Address ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-cyan-400",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AddRequestDialog.tsx",
                                                            lineNumber: 385,
                                                            columnNumber: 34
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                                    lineNumber: 384,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "e.g. 102 medical road, sector-5",
                                                    value: newRequest.address.street,
                                                    onChange: (e)=>{
                                                        setNewRequest({
                                                            ...newRequest,
                                                            address: {
                                                                ...newRequest.address,
                                                                street: e.target.value
                                                            }
                                                        });
                                                        if (fieldErrors.street) setFieldErrors((prev)=>({
                                                                ...prev,
                                                                street: ""
                                                            }));
                                                    },
                                                    className: "w-full px-4 py-2.5 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition text-xs ".concat(fieldErrors.street ? "border-rose-500/60 bg-rose-500/5" : "border-white/10"),
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                fieldErrors.street && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-rose-400 text-[10px] mt-1 flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiAlertCircle"], {
                                                            size: 9
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AddRequestDialog.tsx",
                                                            lineNumber: 405,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " ",
                                                        fieldErrors.street
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                                    lineNumber: 404,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AddRequestDialog.tsx",
                                            lineNumber: 383,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5",
                                                    children: [
                                                        "City ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-cyan-400",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AddRequestDialog.tsx",
                                                            lineNumber: 412,
                                                            columnNumber: 24
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                                    lineNumber: 411,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "e.g. Jaipur",
                                                    value: newRequest.address.city,
                                                    onChange: (e)=>{
                                                        setNewRequest({
                                                            ...newRequest,
                                                            address: {
                                                                ...newRequest.address,
                                                                city: e.target.value
                                                            }
                                                        });
                                                        if (fieldErrors.city) setFieldErrors((prev)=>({
                                                                ...prev,
                                                                city: ""
                                                            }));
                                                    },
                                                    className: "w-full px-4 py-2.5 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition text-xs ".concat(fieldErrors.city ? "border-rose-500/60 bg-rose-500/5" : "border-white/10"),
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                fieldErrors.city && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-rose-400 text-[10px] mt-1 flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiAlertCircle"], {
                                                            size: 9
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AddRequestDialog.tsx",
                                                            lineNumber: 432,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " ",
                                                        fieldErrors.city
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                                    lineNumber: 431,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AddRequestDialog.tsx",
                                            lineNumber: 410,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5",
                                                    children: "State / Region"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                                    lineNumber: 438,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "e.g. Rajasthan",
                                                    value: newRequest.address.state,
                                                    onChange: (e)=>setNewRequest({
                                                            ...newRequest,
                                                            address: {
                                                                ...newRequest.address,
                                                                state: e.target.value
                                                            }
                                                        }),
                                                    className: "w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition text-xs"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                                    lineNumber: 441,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AddRequestDialog.tsx",
                                            lineNumber: 437,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5",
                                                    children: "Postal Code"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                                    lineNumber: 454,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "e.g. 302001",
                                                    value: newRequest.address.postalCode,
                                                    onChange: (e)=>setNewRequest({
                                                            ...newRequest,
                                                            address: {
                                                                ...newRequest.address,
                                                                postalCode: e.target.value
                                                            }
                                                        }),
                                                    className: "w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition text-xs"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                                    lineNumber: 457,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AddRequestDialog.tsx",
                                            lineNumber: 453,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5",
                                                    children: "Country"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                                    lineNumber: 470,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "e.g. India",
                                                    value: newRequest.address.country,
                                                    onChange: (e)=>setNewRequest({
                                                            ...newRequest,
                                                            address: {
                                                                ...newRequest.address,
                                                                country: e.target.value
                                                            }
                                                        }),
                                                    className: "w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition text-xs"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                                    lineNumber: 473,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AddRequestDialog.tsx",
                                            lineNumber: 469,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                    lineNumber: 382,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AddRequestDialog.tsx",
                            lineNumber: 377,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 pt-2 border-t border-white/5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMap"], {}, void 0, false, {
                                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                                    lineNumber: 491,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " Locate Pharmacy on Map"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AddRequestDialog.tsx",
                                            lineNumber: 490,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: detectLocationManually,
                                                    className: "px-2.5 py-1 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 text-cyan-400 rounded-lg text-[10px] font-bold transition flex items-center gap-1 cursor-pointer",
                                                    children: "Detect Location 📍"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                                    lineNumber: 494,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                newRequest.address.latitude > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-mono text-gray-450 bg-white/5 px-2 py-0.5 rounded border border-white/5",
                                                    children: [
                                                        "[",
                                                        newRequest.address.latitude.toFixed(4),
                                                        ", ",
                                                        newRequest.address.longitude.toFixed(4),
                                                        "]"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                                    lineNumber: 502,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AddRequestDialog.tsx",
                                            lineNumber: 493,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                    lineNumber: 489,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                fieldErrors.coords && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-rose-400 text-[10px] flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiAlertCircle"], {
                                            size: 9
                                        }, void 0, false, {
                                            fileName: "[project]/components/AddRequestDialog.tsx",
                                            lineNumber: 510,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        fieldErrors.coords
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                    lineNumber: 509,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-60 rounded-2xl overflow-hidden border border-white/10 relative z-20",
                                    children: userLocation ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapContainer, {
                                        center: userLocation,
                                        zoom: 13,
                                        style: {
                                            height: "100%",
                                            width: "100%"
                                        },
                                        className: "h-full w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TileLayer, {
                                                url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
                                                attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>'
                                            }, void 0, false, {
                                                fileName: "[project]/components/AddRequestDialog.tsx",
                                                lineNumber: 522,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LocationSelector, {}, void 0, false, {
                                                fileName: "[project]/components/AddRequestDialog.tsx",
                                                lineNumber: 526,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/AddRequestDialog.tsx",
                                        lineNumber: 516,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full w-full bg-zinc-950 flex flex-col items-center justify-center text-xs text-gray-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-cyan-500 mb-2"
                                            }, void 0, false, {
                                                fileName: "[project]/components/AddRequestDialog.tsx",
                                                lineNumber: 530,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Loading map coordinates..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/AddRequestDialog.tsx",
                                        lineNumber: 529,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                    lineNumber: 514,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-gray-500 leading-relaxed",
                                    children: "📍 Click directly on the map to pinpoint your drugstore physical building location."
                                }, void 0, false, {
                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                    lineNumber: 536,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AddRequestDialog.tsx",
                            lineNumber: 488,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AddRequestDialog.tsx",
                    lineNumber: 275,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/5 border-t border-white/5 px-6 py-4 flex gap-3 z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            disabled: submitting,
                            className: "flex-1 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl text-xs font-bold transition",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/components/AddRequestDialog.tsx",
                            lineNumber: 545,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleAddRequest,
                            disabled: submitting,
                            className: "flex-grow flex items-center justify-center gap-1.5 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl text-xs font-bold shadow-lg transition duration-200 transform active:scale-95 disabled:opacity-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheck"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/components/AddRequestDialog.tsx",
                                    lineNumber: 559,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                " ",
                                submitting ? "Submitting Request..." : "Submit Registry"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AddRequestDialog.tsx",
                            lineNumber: 553,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AddRequestDialog.tsx",
                    lineNumber: 544,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/AddRequestDialog.tsx",
            lineNumber: 256,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/AddRequestDialog.tsx",
        lineNumber: 254,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AddRequestDialog, "Vif8ytbMw9hN8YKBIA8NFhoHDbg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c3 = AddRequestDialog;
const __TURBOPACK__default__export__ = AddRequestDialog;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "MapContainer");
__turbopack_context__.k.register(_c1, "TileLayer");
__turbopack_context__.k.register(_c2, "Marker");
__turbopack_context__.k.register(_c3, "AddRequestDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/AddRequestDialog.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/AddRequestDialog.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_AddRequestDialog_tsx_c3944682._.js.map