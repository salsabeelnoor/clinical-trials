import React from 'react';
import './Introduction.css'
const Introduction = () => {
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
            <div className='pt-3 grid grid-cols-4 gap-0 grid-container sm:container sm:mx-auto '>
                <div className='align-middle'>
                    <h1 className='text-center font-open_sans text-[22px] font-semibold text-light_gray'>Phase 1</h1>
                    <hr className='sm:w-11/12 w-[200px] mx-auto border-0 h-1 bg-light_gray' />
                </div>
                <div className='align-middle'>
                    <h1 className='text-center font-open_sans text-[22px] font-semibold text-light_gray'>Phase 2</h1>
                    <hr className='sm:w-11/12 w-[200px] mx-auto border-0 h-1 bg-light_gray' />
                </div>
                <div className='align-middle'>
                    <h1 className='text-center font-open_sans text-[22px] font-semibold text-light_green'>Phase 3</h1>
                    <hr className='sm:w-11/12 w-[200px] mx-auto border-0 h-1 bg-light_green' />
                </div>
                <div className='align-middle'>
                    <h1 className='text-center font-open_sans text-[22px] font-semibold text-light_gray'>Phase 4</h1>
                    <hr className='sm:w-11/12 w-[200px] mx-auto border-0 h-1 bg-light_gray' />
                </div>
            </div>
        </div>
    );
};

export default Introduction;