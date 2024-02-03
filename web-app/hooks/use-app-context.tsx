"use client"
import { useState } from 'react';

// type StatusTypes = "Good" | "Satisfactory" | "Moderately polluted" | "Poor" | "Very Poor" | "Severe"

const useAppContext = () => {
    const [appState, setAppState] = useState({
        loading: false,
        location: {
            city: "Noida",
            state: "Uttar Pradesh"
        },
        airQuality: {
            index: 171,
            pm10: 12.43,
            pm2dec5: 10.05,
            no2: 8.57,
            other: 9.9
        },
        dummy: {
            deviceId: "GJAMD-b40f53f2",
            vehicleDensity: "4"
        },
        weather: null
    })
    return { appState, setAppState };
};

export default useAppContext;
/**
 * 
Air quality is poor.
Please follow the Mentioned Precautions.
 */