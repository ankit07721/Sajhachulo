// import { createContext, useContext, useMemo, useState } from "react";

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//     // Frontend-only mock user:
//     // Set to null to simulate logged out.
//     // Set role to something else to test access control.
//     const [user, setUser] = useState({
//         id: "user_1",
//         name: "Demo Caregiver",
//         role: "caregiver",
//     });

//     const value = useMemo(() => ({ user, setUser }), [user]);

//     return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export const useAuth = () => {
//     const ctx = useContext(AuthContext);
//     if (!ctx) throw new Error("useAuth must be used within AuthProvider");
//     return ctx;
// };












import React, { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        id: "user_1",
        name: "Demo Caregiver",
        role: "caregiver",
    });

    const value = useMemo(() => ({ user, setUser }), [user]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (ctx === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return ctx;
};