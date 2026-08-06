(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/utils/auth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// utils/auth.ts
__turbopack_context__.s([
    "forgotPassword",
    ()=>forgotPassword,
    "login",
    ()=>login,
    "register",
    ()=>register,
    "resetPassword",
    ()=>resetPassword
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/apiConfig.ts [app-client] (ecmascript)");
;
const host = __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE"];
const login = async (email, password)=>{
    const res = await fetch("".concat(host, "/auth/login"), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    if (!res.ok) return false;
    const { token } = await res.json();
    localStorage.setItem("auth_token", token);
    // Optionally, you can also store user data in localStorage or sessionStorage
    const resUser = await fetch("".concat(host, "/user/"), {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer ".concat(token)
        }
    });
    if (resUser.ok) {
        const userData = await resUser.json();
        localStorage.setItem("user_data", JSON.stringify(userData)); // Store user data in localStorage
    }
    console.log("User data stored in localStorage:", localStorage.getItem("user_data"));
    window.dispatchEvent(new Event("storage")); // Trigger the storage event manually
    return true // ✅ Store token in localStorage
    ;
};
const register = async (name, email, password, gender, phone)=>{
    const res = await fetch("".concat(host, "/auth/register"), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            email,
            password,
            gender,
            phone
        })
    });
    if (!res.ok) return false;
    return await true;
};
const forgotPassword = async (email)=>{
    const res = await fetch("".concat(host, "/auth/forgot-password"), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email
        })
    });
    if (!res.ok) return false;
    return await res.json();
};
const resetPassword = async (email, otp, newPassword)=>{
    const res = await fetch("".concat(host, "/auth/reset-password"), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            otp,
            newPassword
        })
    });
    return res.ok;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(auth)/signup/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SignupPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/auth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/form.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/ToastContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function SignupPage() {
    _s();
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [nameError, setNameError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [emailError, setEmailError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [passwordError, setPasswordError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [genderError, setGenderError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [phoneError, setPhoneError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const validateForm = (form)=>{
        var _form_gender;
        let isValid = true;
        setNameError(null);
        setEmailError(null);
        setPasswordError(null);
        setGenderError(null);
        setPhoneError(null);
        if (!form.namee.value.trim()) {
            setNameError("Name is required");
            isValid = false;
        }
        if (!form.email.value.trim()) {
            setEmailError("Email is required");
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.value)) {
            setEmailError("Invalid email format");
            isValid = false;
        }
        if (!form.password.value.trim()) {
            setPasswordError("Password is required");
            isValid = false;
        } else if (form.password.value.length < 6) {
            setPasswordError("Password must be at least 6 characters");
            isValid = false;
        }
        const gender = (_form_gender = form.gender) === null || _form_gender === void 0 ? void 0 : _form_gender.value;
        if (!gender) {
            setGenderError("Gender is required");
            isValid = false;
        }
        if (!form.phone.value.trim()) {
            setPhoneError("Phone is required");
            isValid = false;
        } else if (!/^\d{10}$/.test(form.phone.value)) {
            setPhoneError("Invalid phone format (10 digits required)");
            isValid = false;
        }
        return isValid;
    };
    const handleSignup = async (event)=>{
        event.preventDefault();
        const form = event.target;
        if (!validateForm(form)) {
            return;
        }
        setLoading(true);
        try {
            const success = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["register"])(form.namee.value, form.email.value, form.password.value, form.gender.value, form.phone.value);
            if (success) {
                showToast("User Created Successfully", "success");
                router.push("/login");
            } else {
                showToast("Error Creating User. Email might be in use.", "error");
            }
        } catch (err) {
            console.error(err);
            showToast("An error occurred during registration", "error");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-md mx-auto p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl transition duration-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-extrabold text-white text-center mb-2 tracking-tight",
                    children: "Signup"
                }, void 0, false, {
                    fileName: "[project]/app/(auth)/signup/page.tsx",
                    lineNumber: 102,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 text-sm text-center mb-8",
                    children: "Create your CareSync account"
                }, void 0, false, {
                    fileName: "[project]/app/(auth)/signup/page.tsx",
                    lineNumber: 103,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    action: "",
                    onSubmit: handleSignup,
                    className: "flex flex-col space-y-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "namee",
                                    className: "block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2",
                                    children: "Full Name*"
                                }, void 0, false, {
                                    fileName: "[project]/app/(auth)/signup/page.tsx",
                                    lineNumber: 111,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "Name",
                                    id: "namee",
                                    placeholder: "John Doe",
                                    required: true,
                                    className: "w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition duration-200 ".concat(nameError ? 'border-red-500/50' : 'border-white/10')
                                }, void 0, false, {
                                    fileName: "[project]/app/(auth)/signup/page.tsx",
                                    lineNumber: 114,
                                    columnNumber: 25
                                }, this),
                                nameError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-400 text-xs mt-1.5 font-medium",
                                    children: nameError
                                }, void 0, false, {
                                    fileName: "[project]/app/(auth)/signup/page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 39
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(auth)/signup/page.tsx",
                            lineNumber: 110,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "email",
                                    className: "block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2",
                                    children: "Email Address*"
                                }, void 0, false, {
                                    fileName: "[project]/app/(auth)/signup/page.tsx",
                                    lineNumber: 126,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    name: "email",
                                    id: "email",
                                    placeholder: "you@example.com",
                                    required: true,
                                    className: "w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition duration-200 ".concat(emailError ? 'border-red-500/50' : 'border-white/10')
                                }, void 0, false, {
                                    fileName: "[project]/app/(auth)/signup/page.tsx",
                                    lineNumber: 129,
                                    columnNumber: 25
                                }, this),
                                emailError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-400 text-xs mt-1.5 font-medium",
                                    children: emailError
                                }, void 0, false, {
                                    fileName: "[project]/app/(auth)/signup/page.tsx",
                                    lineNumber: 137,
                                    columnNumber: 40
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(auth)/signup/page.tsx",
                            lineNumber: 125,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "password",
                                    className: "block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2",
                                    children: "Password*"
                                }, void 0, false, {
                                    fileName: "[project]/app/(auth)/signup/page.tsx",
                                    lineNumber: 141,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    name: "password",
                                    id: "password",
                                    placeholder: "••••••••",
                                    required: true,
                                    className: "w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition duration-200 ".concat(passwordError ? 'border-red-500/50' : 'border-white/10')
                                }, void 0, false, {
                                    fileName: "[project]/app/(auth)/signup/page.tsx",
                                    lineNumber: 144,
                                    columnNumber: 25
                                }, this),
                                passwordError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-400 text-xs mt-1.5 font-medium",
                                    children: passwordError
                                }, void 0, false, {
                                    fileName: "[project]/app/(auth)/signup/page.tsx",
                                    lineNumber: 152,
                                    columnNumber: 43
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(auth)/signup/page.tsx",
                            lineNumber: 140,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2.5",
                                    children: "Gender*"
                                }, void 0, false, {
                                    fileName: "[project]/app/(auth)/signup/page.tsx",
                                    lineNumber: 156,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-6",
                                    children: [
                                        "male",
                                        "female",
                                        "other"
                                    ].map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center cursor-pointer select-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "gender",
                                                    value: g,
                                                    required: true,
                                                    className: "form-radio text-blue-600 border-white/10 bg-white/5 focus:ring-blue-500/50 h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(auth)/signup/page.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-2 text-sm text-gray-300 capitalize",
                                                    children: g
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(auth)/signup/page.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, g, true, {
                                            fileName: "[project]/app/(auth)/signup/page.tsx",
                                            lineNumber: 161,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/(auth)/signup/page.tsx",
                                    lineNumber: 159,
                                    columnNumber: 25
                                }, this),
                                genderError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-400 text-xs mt-1.5 font-medium",
                                    children: genderError
                                }, void 0, false, {
                                    fileName: "[project]/app/(auth)/signup/page.tsx",
                                    lineNumber: 173,
                                    columnNumber: 41
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(auth)/signup/page.tsx",
                            lineNumber: 155,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "phone",
                                    className: "block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2",
                                    children: "Phone Number*"
                                }, void 0, false, {
                                    fileName: "[project]/app/(auth)/signup/page.tsx",
                                    lineNumber: 177,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "phone",
                                    id: "phone",
                                    placeholder: "10-digit number",
                                    required: true,
                                    className: "w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition duration-200 ".concat(phoneError ? 'border-red-500/50' : 'border-white/10')
                                }, void 0, false, {
                                    fileName: "[project]/app/(auth)/signup/page.tsx",
                                    lineNumber: 180,
                                    columnNumber: 25
                                }, this),
                                phoneError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-400 text-xs mt-1.5 font-medium",
                                    children: phoneError
                                }, void 0, false, {
                                    fileName: "[project]/app/(auth)/signup/page.tsx",
                                    lineNumber: 188,
                                    columnNumber: 40
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(auth)/signup/page.tsx",
                            lineNumber: 176,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: loading,
                            className: "w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3 rounded-xl shadow-lg transition duration-250 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50",
                            children: loading ? "Creating Account..." : "Sign Up"
                        }, void 0, false, {
                            fileName: "[project]/app/(auth)/signup/page.tsx",
                            lineNumber: 191,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(auth)/signup/page.tsx",
                    lineNumber: 105,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 text-center text-sm text-gray-400",
                    children: [
                        "Already have an account?",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/login",
                            className: "font-semibold text-blue-400 hover:text-blue-300 transition duration-200",
                            children: "Login"
                        }, void 0, false, {
                            fileName: "[project]/app/(auth)/signup/page.tsx",
                            lineNumber: 202,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(auth)/signup/page.tsx",
                    lineNumber: 200,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(auth)/signup/page.tsx",
            lineNumber: 101,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(auth)/signup/page.tsx",
        lineNumber: 100,
        columnNumber: 9
    }, this);
}
_s(SignupPage, "wDLsiOwWaETWCtYrkekRsUD5nmc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SignupPage;
var _c;
__turbopack_context__.k.register(_c, "SignupPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/client/form-shared.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DISALLOWED_FORM_PROPS: null,
    checkFormActionUrl: null,
    createFormSubmitDestinationUrl: null,
    hasReactClientActionAttributes: null,
    hasUnsupportedSubmitterAttributes: null,
    isSupportedFormEncType: null,
    isSupportedFormMethod: null,
    isSupportedFormTarget: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DISALLOWED_FORM_PROPS: function() {
        return DISALLOWED_FORM_PROPS;
    },
    checkFormActionUrl: function() {
        return checkFormActionUrl;
    },
    createFormSubmitDestinationUrl: function() {
        return createFormSubmitDestinationUrl;
    },
    hasReactClientActionAttributes: function() {
        return hasReactClientActionAttributes;
    },
    hasUnsupportedSubmitterAttributes: function() {
        return hasUnsupportedSubmitterAttributes;
    },
    isSupportedFormEncType: function() {
        return isSupportedFormEncType;
    },
    isSupportedFormMethod: function() {
        return isSupportedFormMethod;
    },
    isSupportedFormTarget: function() {
        return isSupportedFormTarget;
    }
});
const DISALLOWED_FORM_PROPS = [
    'method',
    'encType',
    'target'
];
function createFormSubmitDestinationUrl(action, formElement) {
    let targetUrl;
    try {
        // NOTE: It might be more correct to resolve URLs relative to `document.baseURI`,
        // but we already do it relative to `location.href` elsewhere:
        //  (see e.g. https://github.com/vercel/next.js/blob/bb0e6722f87ceb2d43015f5b8a413d0072f2badf/packages/next/src/client/components/app-router.tsx#L146)
        // so it's better to stay consistent.
        const base = window.location.href;
        targetUrl = new URL(action, base);
    } catch (err) {
        throw Object.defineProperty(new Error('Cannot parse form action "' + action + '" as a URL', {
            cause: err
        }), "__NEXT_ERROR_CODE", {
            value: "E152",
            enumerable: false,
            configurable: true
        });
    }
    if (targetUrl.searchParams.size) {
        // url-encoded HTML forms *overwrite* any search params in the `action` url:
        //
        //  "Let `query` be the result of running the application/x-www-form-urlencoded serializer [...]"
        //  "Set parsed action's query component to `query`."
        //   https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#submit-mutate-action
        //
        // We need to match that.
        // (note that all other parts of the URL, like `hash`, are preserved)
        targetUrl.search = '';
    }
    const formData = new FormData(formElement);
    for (let [name, value] of formData){
        if (typeof value !== 'string') {
            // For file inputs, the native browser behavior is to use the filename as the value instead:
            //
            //   "If entry's value is a File object, then let value be entry's value's name. Otherwise, let value be entry's value."
            //   https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#converting-an-entry-list-to-a-list-of-name-value-pairs
            //
            if ("TURBOPACK compile-time truthy", 1) {
                console.warn("<Form> only supports file inputs if `action` is a function. File inputs cannot be used if `action` is a string, " + "because files cannot be encoded as search params.");
            }
            value = value.name;
        }
        targetUrl.searchParams.append(name, value);
    }
    return targetUrl;
}
function checkFormActionUrl(action, source) {
    const aPropName = source === 'action' ? "an `action`" : "a `formAction`";
    let testUrl;
    try {
        testUrl = new URL(action, 'http://n');
    } catch (err) {
        console.error("<Form> received " + aPropName + ' that cannot be parsed as a URL: "' + action + '".');
        return;
    }
    // url-encoded HTML forms ignore any queryparams in the `action` url. We need to match that.
    if (testUrl.searchParams.size) {
        console.warn("<Form> received " + aPropName + ' that contains search params: "' + action + '". This is not supported, and they will be ignored. ' + 'If you need to pass in additional search params, use an `<input type="hidden" />` instead.');
    }
}
const isSupportedFormEncType = (value)=>value === 'application/x-www-form-urlencoded';
const isSupportedFormMethod = (value)=>value === 'get';
const isSupportedFormTarget = (value)=>value === '_self';
function hasUnsupportedSubmitterAttributes(submitter) {
    // A submitter can override `encType` for the form.
    const formEncType = submitter.getAttribute('formEncType');
    if (formEncType !== null && !isSupportedFormEncType(formEncType)) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.error("<Form>'s `encType` was set to an unsupported value via `formEncType=\"" + formEncType + '"`. ' + "This will disable <Form>'s navigation functionality. If you need this, use a native <form> element instead.");
        }
        return true;
    }
    // A submitter can override `method` for the form.
    const formMethod = submitter.getAttribute('formMethod');
    if (formMethod !== null && !isSupportedFormMethod(formMethod)) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.error("<Form>'s `method` was set to an unsupported value via `formMethod=\"" + formMethod + '"`. ' + "This will disable <Form>'s navigation functionality. If you need this, use a native <form> element instead.");
        }
        return true;
    }
    // A submitter can override `target` for the form.
    const formTarget = submitter.getAttribute('formTarget');
    if (formTarget !== null && !isSupportedFormTarget(formTarget)) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.error("<Form>'s `target` was set to an unsupported value via `formTarget=\"" + formTarget + '"`. ' + "This will disable <Form>'s navigation functionality. If you need this, use a native <form> element instead.");
        }
        return true;
    }
    return false;
}
function hasReactClientActionAttributes(submitter) {
    // CSR: https://github.com/facebook/react/blob/942eb80381b96f8410eab1bef1c539bed1ab0eb1/packages/react-dom-bindings/src/client/ReactDOMComponent.js#L482-L487
    // SSR: https://github.com/facebook/react/blob/942eb80381b96f8410eab1bef1c539bed1ab0eb1/packages/react-dom-bindings/src/client/ReactDOMComponent.js#L2401
    const action = submitter.getAttribute('formAction');
    return action && /\s*javascript:/i.test(action);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=form-shared.js.map
}),
"[project]/node_modules/next/dist/client/app-dir/form.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Form;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _formshared = __turbopack_context__.r("[project]/node_modules/next/dist/client/form-shared.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _segmentcache = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/segment-cache.js [app-client] (ecmascript)");
function Form(param) {
    let { replace, scroll, prefetch: prefetchProp, ref: externalRef, ...props } = param;
    const router = (0, _react.useContext)(_approutercontextsharedruntime.AppRouterContext);
    const actionProp = props.action;
    const isNavigatingForm = typeof actionProp === 'string';
    // Validate `action`
    if ("TURBOPACK compile-time truthy", 1) {
        if (isNavigatingForm) {
            (0, _formshared.checkFormActionUrl)(actionProp, 'action');
        }
    }
    // Validate `prefetch`
    if ("TURBOPACK compile-time truthy", 1) {
        if (!(prefetchProp === undefined || prefetchProp === false || prefetchProp === null)) {
            console.error('The `prefetch` prop of <Form> must be `false` or `null`');
        }
        if (prefetchProp !== undefined && !isNavigatingForm) {
            console.error('Passing `prefetch` to a <Form> whose `action` is a function has no effect.');
        }
    }
    // TODO(runtime-ppr): allow runtime prefetches in Form
    const prefetch = prefetchProp === false || prefetchProp === null ? prefetchProp : null;
    // Validate `scroll` and `replace`
    if ("TURBOPACK compile-time truthy", 1) {
        if (!isNavigatingForm && (replace !== undefined || scroll !== undefined)) {
            console.error('Passing `replace` or `scroll` to a <Form> whose `action` is a function has no effect.\n' + 'See the relevant docs to learn how to control this behavior for navigations triggered from actions:\n' + '  `redirect()`       - https://nextjs.org/docs/app/api-reference/functions/redirect#parameters\n' + '  `router.replace()` - https://nextjs.org/docs/app/api-reference/functions/use-router#userouter\n');
        }
    }
    // Clean up any unsupported form props (and warn if present)
    for (const key of _formshared.DISALLOWED_FORM_PROPS){
        if (key in props) {
            if ("TURBOPACK compile-time truthy", 1) {
                console.error("<Form> does not support changing `" + key + "`. " + (isNavigatingForm ? "If you'd like to use it to perform a mutation, consider making `action` a function instead.\n" + "Learn more: https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations" : ''));
            }
            delete props[key];
        }
    }
    const isPrefetchEnabled = !!router && isNavigatingForm && prefetch === null;
    const observeFormVisibilityOnMount = (0, _react.useCallback)((element)=>{
        if (isPrefetchEnabled && router !== null) {
            (0, _links.mountFormInstance)(element, actionProp, router, _segmentcache.FetchStrategy.PPR);
        }
        return ()=>{
            (0, _links.unmountPrefetchableInstance)(element);
        };
    }, [
        isPrefetchEnabled,
        actionProp,
        router
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeFormVisibilityOnMount, externalRef != null ? externalRef : null);
    if (!isNavigatingForm) {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)("form", {
            ...props,
            ref: mergedRef
        });
    }
    const actionHref = (0, _addbasepath.addBasePath)(actionProp);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("form", {
        ...props,
        ref: mergedRef,
        action: actionHref,
        onSubmit: (event)=>onFormSubmit(event, {
                router,
                actionHref,
                replace,
                scroll,
                onSubmit: props.onSubmit
            })
    });
}
function onFormSubmit(event, param) {
    let { actionHref, onSubmit, replace, scroll, router } = param;
    if (typeof onSubmit === 'function') {
        onSubmit(event);
        // if the user called event.preventDefault(), do nothing.
        // (this matches what Link does for `onClick`)
        if (event.defaultPrevented) {
            return;
        }
    }
    if (!router) {
        // Form was somehow used outside of the router (but not in pages, the implementation is forked!).
        // We can't perform a soft navigation, so let the native submit handling do its thing.
        return;
    }
    const formElement = event.currentTarget;
    const submitter = event.nativeEvent.submitter;
    let action = actionHref;
    if (submitter) {
        if ("TURBOPACK compile-time truthy", 1) {
            // the way server actions are encoded (e.g. `formMethod="post")
            // causes some unnecessary dev-mode warnings from `hasUnsupportedSubmitterAttributes`.
            // we'd bail out anyway, but we just do it silently.
            if (hasReactServerActionAttributes(submitter)) {
                return;
            }
        }
        if ((0, _formshared.hasUnsupportedSubmitterAttributes)(submitter)) {
            return;
        }
        // client actions have `formAction="javascript:..."`. We obviously can't prefetch/navigate to that.
        if ((0, _formshared.hasReactClientActionAttributes)(submitter)) {
            return;
        }
        // If the submitter specified an alternate formAction,
        // use that URL instead -- this is what a native form would do.
        // NOTE: `submitter.formAction` is unreliable, because it will give us `location.href` if it *wasn't* set
        // NOTE: this should not have `basePath` added, because we can't add it before hydration
        const submitterFormAction = submitter.getAttribute('formAction');
        if (submitterFormAction !== null) {
            if ("TURBOPACK compile-time truthy", 1) {
                (0, _formshared.checkFormActionUrl)(submitterFormAction, 'formAction');
            }
            action = submitterFormAction;
        }
    }
    const targetUrl = (0, _formshared.createFormSubmitDestinationUrl)(action, formElement);
    // Finally, no more reasons for bailing out.
    event.preventDefault();
    const method = replace ? 'replace' : 'push';
    const targetHref = targetUrl.href;
    router[method](targetHref, {
        scroll
    });
}
function hasReactServerActionAttributes(submitter) {
    // https://github.com/facebook/react/blob/942eb80381b96f8410eab1bef1c539bed1ab0eb1/packages/react-client/src/ReactFlightReplyClient.js#L931-L934
    const name = submitter.getAttribute('name');
    return name && (name.startsWith('$ACTION_ID_') || name.startsWith('$ACTION_REF_'));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=form.js.map
}),
]);

//# sourceMappingURL=_e6315f0b._.js.map