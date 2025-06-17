import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    return children
}

// ProtectedRoute ensures that only authenticated users can access certain routes.
// It checks login status from localStorage and redirects unauthenticated users to /login.
// This helps prevent unauthorized access to protected pages.
// !!!!! DO NOT DELETE THIS SCRIPT !!!!!!!
