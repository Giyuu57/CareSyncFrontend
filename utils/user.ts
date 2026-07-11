

import { API_BASE } from "./apiConfig";

export default async function GetUserDetails() {
    const token = localStorage.getItem("auth_token");
    if(token){
        const resUser = await fetch(`${API_BASE}/user/`, {
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        });
        if (resUser.ok) {
            const userData = await resUser.json();
            localStorage.setItem("user_data", JSON.stringify(userData)); // Store user data in localStorage
            return true;
            }
        else{
            console.log("User data not found in localStorage:", localStorage.getItem("user_data"));
            return false;
        }
    }else{
        console.log("login again");
        return false;
    }
}