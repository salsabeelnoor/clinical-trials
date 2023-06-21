import React, { useState } from 'react';
import four_phases_sm from '../../assets/Desktop/four_phases_sm.png'
import phase_1 from '../../assets/Mobile/Group/phase_1.png'
import phase_2 from '../../assets/Mobile/Group/phase_2.png'
import phase_3 from '../../assets/Mobile/Group/phase_3.png'
import phase_4 from '../../assets/Mobile/Group/phase_4.png'
import frame from '../../assets/Desktop/frame4.png'
const StudySection = () => {
    const [phase, setPhase] = useState("1");
    const [framePosition, setFramePosition] = useState(0);

    const handleClick = (phase) => {
        setPhase(phase);
        if (phase === '1') {
            setFramePosition(0); // Initial position
          } else {
            setFramePosition(framePosition+180); // Move 30px to the right
          }
    };
    console.log(phase)
    return (
        <div className='bg-dark_gray sm:bg-white mt-[-2px]'>
            <div className='pt-3 grid grid-cols-4 gap-0 grid-container sm:container sm:mx-auto '>
                <div className='align-middle'>
                    <h1 className={`text-center font-open_sans text-[22px] font-semibold 
                    ${phase === '1' ? 'text-light_green' : 'text-light_gray'}
                    `} onClick={() => handleClick("1")}>Phase 1</h1>
                    <hr className={`sm:w-11/12 w-[200px] mx-auto border-0 h-1 bg-light_gray
                    ${phase === '1' ? 'bg-light_green' : 'bg-light_gray'}`} />
                </div>
                <div className='align-middle'>
                    <h1 className={`text-center font-open_sans text-[22px] font-semibold 
                    ${phase === '2' ? 'text-light_green' : 'text-light_gray'}
                    `} onClick={() => handleClick("2")}>Phase 2</h1>
                    <hr className={`sm:w-11/12 w-[200px] mx-auto border-0 h-1 bg-light_gray
                    ${phase === '2' ? 'bg-light_green' : 'bg-light_gray'}`} />
                </div>
                <div className='align-middle'>
                    <h1 className={`text-center font-open_sans text-[22px] font-semibold 
                    ${phase === '3' ? 'text-light_green' : 'text-light_gray'}
                    `} onClick={() => handleClick("3")}>Phase 3</h1>
                    <hr className={`sm:w-11/12 w-[200px] mx-auto border-0 h-1 bg-light_gray
                    ${phase === '3' ? 'bg-light_green' : 'bg-light_gray'}`} />
                </div>
                <div className='align-middle'>
                    <h1 className={`text-center font-open_sans text-[22px] font-semibold 
                    ${phase === '4' ? 'text-light_green' : 'text-light_gray'}
                    `} onClick={() => handleClick("4")}>Phase 4</h1>
                    <hr className={`sm:w-11/12 w-[200px] mx-auto border-0 h-1 bg-light_gray
                    ${phase === '4' ? 'bg-light_green' : 'bg-light_gray'}`} />
                </div>

            </div>
            <div className='bg-light_gray '>
                <div className='sm:container sm:mx-auto mx-3 py-10 sm:grid sm:grid-cols-layout place-items-center'>
                    <p className='block text-sm'>These studies occur in only a small number of people (often 20 to 80) and the main focus is to ensure the safety
                        of a treatment. The researchers will test for side effects, determine how much of the treatment is safe to give,
                        and learn how the body copes with the treatment, Often, these studies will take place in healthy volunteers
                        and in one site in the world. Galapagos Phase 1 clinical trials are therefore not included on this site; however,
                        they are published in government public registries.
                    </p>
                    <div className="">
                        <img className='pl-7 object-cover sm:block hidden' src={four_phases_sm} alt="" />
                        <img src={frame} alt="" className="mt-[-210px]" style={{ marginLeft: `${framePosition}px` }}></img>
                    </div>

                    {/* <img className='sm:hidden block mx-auto pt-6' src={phase_4} alt="" /> */}
                    {
                        phase === '1' && (
                            <img className='sm:hidden block mx-auto pt-6' src={phase_1} alt="" />
                        )
                    }
                    {
                        phase === '2' && (
                            <img className='sm:hidden block mx-auto pt-6' src={phase_2} alt="" />
                        )
                    }
                    {
                        phase === '3' && (
                            <img className='sm:hidden block mx-auto pt-6' src={phase_3} alt="" />
                        )
                    }
                    {
                        phase === '4' && (
                            <img className='sm:hidden block mx-auto pt-6' src={phase_4} alt="" />
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default StudySection;