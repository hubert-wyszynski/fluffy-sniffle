import React from 'react';
import Link from 'next/link';

export const MainHeader = () => {
    const description = "I am not on duty today. These are my personal notes on things I have learned or found interesting recently."

    return (
        <div className="mt-8 custom-dot-container dark:custom-dot-container">
            <div className="py-10 p-9 md:p-14">
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <div className="mb-4">
                            {
                                description.split(" ").map((word, index) => {
                                    return <span key={index} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50">{`${word} `}</span>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};