import React, { useState } from 'react';
import './Introduction.css'
const Introduction = () => {
    const [active, setActive] = useState('phase1');
    return (
        <div className='bg-dark_gray sm:bg-white '>
            <div className='sm:container sm:mx-auto mx-3 pt-10'>
                <h2 className='font-mynerve font-bold text-[30px] sm:text-bottle_green text-green'>What are clinical trials?</h2>
                <p className='block my-2 font-open_sans sm:text-dark_gray text-gray text-sm'>Clinical trials are medical research studies that help to find out whether a treatment works
                    and is safe for use before it can be distributed to the whole population. Regulatory agencies
                    review the results from these studies and make an independent decision on whether a treatment
                    can be approved for use. All Galapagos clinical studies are performed according to government
                    regulations that are in place to help protect the rights of anyone taking part in a trial.
                </p>
                <p className='block font-open_sans mt-7 sm:text-dark_gray text-gray text-sm'>There are four phases of clinical
                    studies:</p>
            </div>
            
        </div>
    );
};

export default Introduction;