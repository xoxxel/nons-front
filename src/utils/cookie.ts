"use client";

const Cookies = {
    set: (name: string, value: string) => {
        if (typeof document !== 'undefined') {
            document.cookie = `${name}=${value}`;
        }
    },
    get: (name: string): string | null => {
        if (typeof document !== 'undefined') {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
    
            if (parts.length === 2) {
                return parts.pop()?.split(';')?.shift() || null;
            }
        }
        return null;
    }
};

export default Cookies;
