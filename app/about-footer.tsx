import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const AboutFooter = () => {
    return (
        <div className="custom-dot-container dark:custom-dot-container flex w-full flex-col sm:flex-row">
            <div className="w-full sm:w-1/2 p-9 pb-6 sm:p-14">
                <ul>
                    <li className="mb-3 hover:underline"><a href="mailto:hub.wyszynski@gmail.com">hub.wyszynski@gmail.com</a></li>
                    <li className="mb-3 hover:underline"><Link rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/hubert-wyszy%C5%84ski-685473130/">linkedin</Link></li>
                </ul>
            </div>
            <div className="px-9 pb-9 pt-0 sm:p-14">
                <div className="flex justify-start">
                    <Image className="rounded-full m-0 w-32 h-32 md:w-auto md:h-auto" width="190" height="190" src="/me.jpeg" alt="me" />
                </div>
            </div>
        </div>
    );
};