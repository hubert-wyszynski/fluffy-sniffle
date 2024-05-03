import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const AboutFooter = () => {
    return (
        <div className="custom-dot-container dark:custom-dot-container p-9">
            <div className="text-sm flex flex-row gap-2 mb-2 flex-wrap">
                <a className="bg-blue-500/20 p-2 rounded-lg hover:underline" href="mailto:hub.wyszynski@gmail.com">hub.wyszynski@gmail.com</a>
                <Link className="bg-blue-500/20 p-2 rounded-lg hover:underline" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/hubert-wyszy%C5%84ski-685473130/">also here (if you use that)</Link>
            </div>
            <div className="text-sm flex flex-row gap-2">
                <span className="bg-blue-500/20 p-2 rounded-lg">
                    🙂
                </span>
                <span className="bg-blue-500/20 p-2 rounded-lg">
                    2024 © Hubert Wyszyński.
                </span>
            </div>
            <div className="mt-4">
                <Image className="bg-blue-500/20 p-2 rounded-full m-0 w-32 h-32 md:w-auto md:h-auto" width="100" height="100" src="/me.jpeg" alt="me" />
            </div>
        </div>
    );
};