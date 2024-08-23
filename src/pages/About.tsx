import BackButton from '@/components/backButton';
import React from 'react';

const About: React.FC = () => {
    return (
        <>
            <div className='bg-black text-green '>

                <BackButton mode='dark'/>
            </div>
            <div className="bg-black text-green-500 p-10 font-mono h-screen overflow-y-auto tracking-widest" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                <div className="mb-10">
                    <h1 className="text-4xl text-center font-bold mb-6" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                        About Me
                    </h1>
                    <div className="text-center mb-10">
                        <p className="text-lg text-gray-400">
                            Hey there! I'm Haard, a passionate web developer with a knack for building modern web applications that merge
                            Web3 and AI technology. I love crafting seamless user experiences and delving into the world of decentralized
                            apps.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-transparent p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-green-500 mb-4">Web Development</h2>
                        <p className="text-gray-400">
                            I specialize in full-stack web development, primarily using technologies like React, Node.js, TypeScript, and
                            Tailwind CSS. I'm also deeply interested in blockchain development and the rapidly evolving world of
                            decentralized applications.
                        </p>
                    </div>
                    <div className="bg-transparent p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-green-500 mb-4">Web3 & AI Enthusiast</h2>
                        <p className="text-gray-400">
                            Merging Web3 with AI is one of my passions. I constantly explore new ways to integrate decentralized
                            technologies with AI-driven solutions to create innovative and secure applications for the future.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div className="bg-transparent p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-green-500 mb-4">Open Source Contributor</h2>
                        <p className="text-gray-400">
                            I actively contribute to open-source projects, helping the community and staying updated with the latest
                            trends in the tech world. I love collaborating with other developers and sharing my knowledge to create
                            impactful solutions.
                        </p>
                    </div>
                    <div className="bg-transparent p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-green-500 mb-4">Beyond Coding</h2>
                        <p className="text-gray-400">
                            When I'm not coding, you can find me exploring new tech gadgets, playing sports, or enjoying a good meal while on a hike
                            . Reading books is my favourite hobby while I can produce full fledged music in FL Studio . I believe in continuous learning and staying curious about the ever-evolving tech landscape.
                        </p>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-lg text-gray-400">
                        Want to collaborate or just say hello? Feel free to{' '}
                        <a href="https://x.com/solanki_haard" target="_blank" rel="noreferrer" className="text-blue-400 underline">
                            reach out on Twitter
                        </a>{' '}
                        or find me @ <a href="mailto:haardsolanki.itm@gmail.com" className="text-blue-400 underline">haardsolanki.itm@gmail.com</a>!
                    </p>
                </div>
            </div>
        </>
    );
};

export default About;
