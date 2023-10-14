'use client'

import Link from 'next/link';

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center h-screen white">
            <style jsx>{`
              .rotate {
                color: transparent;
                background-image: url('/Gradient-small.png');
                background-size: 300% 300%;
                filter: brightness(1.2);
                background-clip: text;
                -webkit-background-clip: text;
                animation: rotation 10s infinite linear alternate;
              }

              @keyframes rotation {
                from {
                  background-position: 0 0;
                }
                to {
                  background-position: 0 100%;
                }
              }
            `}</style>
            <Link href={'https://go5.run/'}>
                <h1 className={`text-center text-5xl font-extrabold rotate`}>
                    Go5 Lab.
                </h1>
            </Link>
        </main>
    );
}
