import React, { useState } from 'react';
import carousel_img_sm from '../../assets/Desktop/Video-block/component/video-player/Video player/carousel_img_sm.png'
import arrow_right from '../../assets/Desktop/Video-block/right arrow/icon/arrow_right.png'
import play_btn_sm from '../../assets/Desktop/Video-block/component/video-player/icon/play_btn_sm.png'
import carousel_img_mb from '../../assets/Mobile/Video-block/Video player-Mobile-component/video-1/Video player/carousel_img_sm_mb.jpg'
import play_btn_sm_mb from '../../assets/Mobile/Video-block/play_btn_sm_mb.png'
import video_1 from '../../assets/yt_shorts3.mp4'
import './StoryCarousel.css'

const StoryCarousel = () => {
    const [activeSlide, setActiveSlide] = useState('slide1');
    const [activeVideo, setActiveVideo] = useState(false);
    const handleSlideChange = (slideId) => {
        setActiveSlide(slideId);
        setActiveVideo(false)
    };
    const handleActiveVideo = (slideId) => {
        if(slideId === 'slide1' || slideId === 'slide2' || slideId === 'slide3'){
            setActiveVideo(true);
        }
    }
    return (
        <div className='sm:container sm:mx-auto pb-10'>
            <div className="carousel w-full sm:h-[650px]  overflow-hidden">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='flex w-full relative sm:flex-row flex-col'>
                        {
                            !activeVideo && (
                                <>
                                    <img className='w-1/12 absolute transform -translate-x-1/2 -translate-y-1/2 
                                    top-1/2 right-2/4 sm:block hidden cursor-pointer' src={play_btn_sm} alt=""
                                        onClick={() => {
                                            handleActiveVideo('slide1')
                                        }} />
                                    <img className='w-1/12 absolute transform -translate-x-1/2 -translate-y-3/4 
                                    top-[120px] left-1/2  block  sm:hidden' src={play_btn_sm_mb} alt=""
                                    onClick={() => {
                                        handleActiveVideo('slide1')
                                    }} />
                                    <img src={carousel_img_sm} className="object-cover w-full  cursor-pointer" alt=''
                                     onClick={() => {
                                        handleActiveVideo('slide1')
                                    }}   />
                                </>
                            )
                        }
                        {
                            activeVideo && (
                                <>
                                    <video className="object-fit w-full video-desktop" controls
                                        autoPlay={activeVideo} 
                                        onEnded={() => setActiveVideo(false)}
                                        >
                                        <source src={video_1} type="video/mp4" />
                                    </video>
                                    <video className="object-cover w-full block video-mobile" controls
                                        autoPlay={activeVideo} 
                                        onEnded={() => setActiveVideo(false)}>
                                        <source src={video_1} type="video/mp4" />
                                    </video>
                                </>
                            )
                        }

                        <div className='bg-bottle_green sm:w-2/6 w-full sm:h-full text-light_gray 
                        text-[18px] font-open_sans'>
                            <p className='block sm:mt-60 mt-10 mx-10'>Ron shares what he's learnt from taking part in a clinical trial and the vital role his caregiver played.</p>
                            <p className='font-semibold mt-4 pb-16 mx-10'>Ron former clinical trial participant</p>
                        </div>
                    </div>
                    <div className="hidden sm:flex w-2/6 absolute  justify-end transform translate-x-[1005px] left-5 right-0 bottom-0">
                        <div className="flex items-center justify-between">
                            <p className='mx-24 text-light_gray text-[18px] font-open_sans font-semibold'>Watch next video</p>

                            <a href="#slide2" className="">
                                <img src={arrow_right} alt=""
                                    onClick={() => {
                                        setActiveVideo(false);
                                        handleSlideChange('slide2');
                                    }} />
                            </a>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className='flex w-full relative sm:flex-row flex-col'>
                        {
                            !activeVideo && (
                                <>
                                    <img className='w-1/12 absolute transform -translate-x-1/2 -translate-y-1/2 
                                    top-1/2 right-2/4 sm:block hidden cursor-pointer' src={play_btn_sm} alt=""
                                    onClick={() => {
                                        handleActiveVideo('slide2')
                                    }} />
                                    <img className='w-1/12 absolute transform -translate-x-1/2 -translate-y-3/4 
                                    top-[120px] left-1/2  block  sm:hidden' src={play_btn_sm_mb} alt=""
                                    onClick={() => {
                                        handleActiveVideo('slide2')
                                    }} />
                                    <img src={carousel_img_sm} className="object-cover w-full  cursor-pointer" alt=''
                                        onClick={() => {
                                            handleActiveVideo('slide2')
                                        }} />
                                </>
                            )
                        }
                        {
                            activeVideo && (
                                <>
                                    <video className="object-fit w-full video-desktop" controls
                                        autoPlay={activeVideo} onEnded={() => setActiveVideo(false)}>
                                        <source src={video_1} type="video/mp4" />
                                    </video>
                                    <video className="object-cover w-full video-mobile" controls
                                        autoPlay={activeVideo} onEnded={() => setActiveVideo(false)}>
                                        <source src={video_1} type="video/mp4" />
                                    </video>
                                </>
                            )
                        }

                        <div className='bg-bottle_green sm:w-2/6 w-full sm:h-full text-light_gray 
                        text-[18px] font-open_sans'>
                            <p className='block sm:mt-60 mt-10 mx-10'>Ron shares what he's learnt from taking part in a clinical trial and the vital role his caregiver played.</p>
                            <p className='font-semibold mt-4 pb-16 mx-10'>Ron former clinical trial participant</p>
                        </div>
                    </div>
                    <div className="hidden sm:flex w-2/6 absolute  justify-end transform translate-x-[1005px] left-5 right-0 bottom-0">
                        <div className="flex items-center justify-between">
                            <p className='mx-24 text-light_gray text-[18px] font-open_sans font-semibold'>Watch next video</p>

                            <a href="#slide3" className="">
                                <img src={arrow_right} alt=""
                                    onClick={() => {
                                        setActiveVideo(false);
                                        handleSlideChange('slide3');
                                    }} />
                            </a>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className='flex w-full relative sm:flex-row flex-col'>
                        {
                            !activeVideo && (
                                <>
                                    <img className='w-1/12 absolute transform -translate-x-1/2 -translate-y-1/2 
                                    top-1/2 right-2/4 sm:block hidden cursor-pointer' src={play_btn_sm} alt=""
                                    onClick={() => {
                                        handleActiveVideo('slide3')
                                    }} />
                                    <img className='w-1/12 absolute transform -translate-x-1/2 -translate-y-3/4 
                                    top-[120px] left-1/2  block  sm:hidden' src={play_btn_sm_mb} alt=""
                                    onClick={() => {
                                        handleActiveVideo('slide3')
                                    }} />
                                    <img src={carousel_img_sm} className="object-cover w-full  cursor-pointer" alt=''
                                        onClick={() => {
                                            handleActiveVideo('slide3')
                                        }} />
                                </>
                            )
                        }
                        {
                            activeVideo && (
                                <>
                                    <video className="object-fit w-full video-desktop" controls
                                        autoPlay={activeVideo} onEnded={() => setActiveVideo(false)}>
                                        <source src={video_1} type="video/mp4" />
                                    </video>
                                    <video className="object-cover w-full video-mobile" controls
                                        autoPlay={activeVideo} onEnded={() => setActiveVideo(false)}>
                                        <source src={video_1} type="video/mp4" />
                                    </video>
                                </>
                            )
                        }

                        <div className='bg-bottle_green sm:w-2/6 w-full sm:h-full text-light_gray 
                        text-[18px] font-open_sans'>
                            <p className='block sm:mt-60 mt-10 mx-10'>Ron shares what he's learnt from taking part in a clinical trial and the vital role his caregiver played.</p>
                            <p className='font-semibold mt-4 pb-16 mx-10'>Ron former clinical trial participant</p>
                        </div>
                    </div>
                    <div className="hidden sm:flex w-2/6 absolute  justify-end transform translate-x-[1005px] left-5 right-0 bottom-0">
                        <div className="flex items-center justify-between">
                            <p className='mx-24 text-light_gray text-[18px] font-open_sans font-semibold'>Watch next video</p>

                            <a href="#slide1" className="">
                                <img src={arrow_right} alt=""
                                    onClick={() => {
                                        setActiveVideo(false);
                                        handleSlideChange('slide1');
                                    }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <div className="carousel-dots">
                    <a href="#slide1" className={`carousel-dot ${activeSlide === 'slide1' ? 'active' : ''}`} onClick={() => handleSlideChange('slide1')}>{ }</a>
                    <a href="#slide2" className={`carousel-dot ${activeSlide === 'slide2' ? 'active' : ''}`} onClick={() => handleSlideChange('slide2')}>{ }</a>
                    <a href="#slide3" className={`carousel-dot ${activeSlide === 'slide3' ? 'active' : ''}`} onClick={() => handleSlideChange('slide3')}>{ }</a>
                </div>
            </div>
        </div>
    );
};

export default StoryCarousel;