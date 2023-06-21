import React from 'react';
import four_phases_sm from '../../assets/Desktop/four_phases_sm.png'
import four_phases_sm_mb from '../../assets/Mobile/Group/four_phases_sm.png'
const StudySection = () => {
    return (
        <div className='bg-dark_gray sm:bg-white '>
            
            <div className='bg-light_gray '>
                <div className='sm:container sm:mx-auto mx-3 py-10 sm:grid sm:grid-cols-layout place-items-center'>
                    <p className='block text-sm'>These studies occur in only a small number of people (often 20 to 80) and the main focus is to ensure the safety
                        of a treatment. The researchers will test for side effects, determine how much of the treatment is safe to give,
                        and learn how the body copes with the treatment, Often, these studies will take place in healthy volunteers
                        and in one site in the world. Galapagos Phase 1 clinical trials are therefore not included on this site; however,
                        they are published in government public registries.
                    </p>
                    <img className='pl-7 object-cover sm:block hidden' src={four_phases_sm} alt="" />
                    <img className='sm:hidden block mx-auto pt-6' src={four_phases_sm_mb} alt="" />
                </div>

            </div>
        </div>
    );
};

export default StudySection;