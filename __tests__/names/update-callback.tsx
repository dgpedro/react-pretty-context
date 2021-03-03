import React, { useEffect, useRef } from "react";

export interface UpdateCallbackProps {
    onUpdate?: () => void;
}

export const UpdateCallback: React.FC<UpdateCallbackProps> = ({ onUpdate }) => {
    const mounted = useRef(false);

    useEffect(() => {
        if (mounted.current && onUpdate) {
            onUpdate();
        }
    });

    useEffect(() => {
        mounted.current = true;
    }, []);

    return null;
};
