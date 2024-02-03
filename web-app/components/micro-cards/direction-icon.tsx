import { cn } from '@/lib/utils';
import React from 'react';

type DirectionIconType = {
    className?: string
}

const DirectionIcon: React.FC<DirectionIconType> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width="24" height="24"
            viewBox="0 0 24 24" fill="none"
            stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            className={cn("lucide lucide-move-up", className)}><path d="M8 6L12 2L16 6" /><path d="M12 2V22" /></svg>
    );
};

export default DirectionIcon;