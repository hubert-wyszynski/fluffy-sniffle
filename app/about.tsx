import React from 'react';
import "./about.css"
import Image from 'next/image';

export const About = () => {
    const interests = "my interests are software engineering and skateboarding"
    const description = "these are my personal notes on things I have learned or found interesting recently"

    return (
        <div className="mt-8 about-custom-dot-container dark:about-custom-dot-container">
            <div className="about-content-wrapper dark:about-content-wrapper py-10 p-9 md:p-14">
                <div className="flex justify-between">
                    <div className="flex flex-col about-info-wrapper">
                        <h1 className="about-header">Hubert Wyszyński</h1>
                        <span className="about-subheader mb-4 bg-white dark:bg-slate-900">software engineer</span>
                        <div className="mb-4">
                            {
                                interests.split(" ").map((word, index) => {
                                    return <span key={index} className="about-description-word bg-white dark:bg-slate-900">{`${word} `}</span>
                                })
                            }
                        </div>
                        <div className="hidden md:block">
                            {
                                description.split(" ").map((word, index) => {
                                    return <span key={index} className="about-description-word bg-white dark:bg-slate-900">{`${word} `}</span>
                                })
                            }
                        </div>
                    </div>
                    <div className="about-image-wrapper">
                        <Image className="rounded-full m-0" width="190" height="190" src="/me.jpeg" alt="me" />
                    </div>
                </div>
                <div className="md:hidden">
                    {
                        description.split(" ").map((word, index) => {
                            return <span key={index} className="about-description-word bg-white dark:bg-slate-900">{`${word} `}</span>
                        })
                    }
                </div>
            </div>
        </div>
    );
};