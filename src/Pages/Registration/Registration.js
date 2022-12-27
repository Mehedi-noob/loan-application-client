import React from 'react';
import FormContent from '../FormContent/FormContent';

const Registration = () => {
    return (
        <div className='flex flex-col items-center justify-center text-center text-2xl '>
            <div className='text-white m-5 rounded w-1/2'>
                <h1 className='p-3'>Register your loan</h1>
            </div>
            <FormContent></FormContent>
        </div>
    );
};

export default Registration;