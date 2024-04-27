import React from 'react';
import Image from 'next/image';

export const AboutFooter = () => {
    return (
        <div className="custom-dot-container dark:custom-dot-container flex w-full">
            <div className="w-1/2 p-9 md:p-14">
                <ul>
                    <li className="underline mb-3"><a href="mailto:hub.wyszynski@gmail.com">hub.wyszynski@gmail.com</a></li>
                    <li className="underline mb-3">resume</li>
                </ul>
            </div>
            <div className="p-9 md:p-14">
                <div className="flex justify-between">
                    <div className="">
                        <Image className="rounded-full m-0" width="190" height="190" src="/me.jpeg" alt="me" />
                    </div>
                </div>
            </div>
        </div>
    );
};