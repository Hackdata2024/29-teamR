import React from 'react';
import { Card } from '../ui/card';

type MicroCardTypes = {
    type: string,
    value: number
}

const MicroCard: React.FC<MicroCardTypes> = ({ type, value }) => {
    return (
        <Card className='backdrop-blur-sm bg-black/5 p-4'>
            <h4 className='text-md font-semibold text-gray-500'>{type}</h4>
        </Card>
    );
};

export default MicroCard;