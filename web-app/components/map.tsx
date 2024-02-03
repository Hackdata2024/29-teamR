import React from 'react';
import { Card } from './ui/card';

const Map = () => {
    return (
        <Card className='overflow-hidden w-full h-[100vw] my-6'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6542.371405337307!2d77.57169994182391!3d28.530176242725904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceb4eaaaaaaab%3A0x321412756718874c!2sShiv%20Nadar%20University!5e0!3m2!1sen!2sin!4v1706987556605!5m2!1sen!2sin"
                style={{
                    border: 0
                }}
                className='w-full h-full'
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </Card>
    );
};

export default Map;