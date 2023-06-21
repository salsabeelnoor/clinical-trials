import React from 'react';
import StoryCarousel from './StoryCarousel';

const StorySection = () => {
    return (
        <div >
            <div className='bg-dark_gray sm:bg-white '>
                <div className='sm:container sm:mx-auto mx-3 sm:pt-24 pt-10'>
                    <h2 className='font-mynerve font-bold text-[30px] sm:text-bottle_green text-green'>
                        Clinical trials stories
                    </h2>
                    <p className='sm:pt-10 pt-2 font-open_sans sm:text-dark_gray text-gray text-sm pb-10'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita repellendus,
                        quod, repellat iusto rerum alias distinctio obcaecati fuga laboriosam eius quisquam eaque?
                        Quo laudantium explicabo ea, in incidunt recusandae quaerat doloremque exercitationem voluptas
                        praesentium dolorem esse accusamus nobis, unde aliquam, quia quasi odio quibusdam cupiditate
                        libero quam. Ullam, eos officiis.
                    </p>
                </div>
            </div>
            <StoryCarousel></StoryCarousel>
        </div>

    );
};

export default StorySection;