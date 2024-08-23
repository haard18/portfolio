import React from 'react';
import achievements from '../data/achievement';
import BackButton from '@/components/backButton';

// Helper function to get the correct medal emoji
const getMedalEmoji = (achievement: string) => {
    const lowerAchievement = achievement.toLowerCase();
    if (lowerAchievement.includes('first') || lowerAchievement.includes('grand prize')) {
        return '🥇'; // Gold Medal for first place or grand prize
    } else if (lowerAchievement.includes('second')) {
        return '🥈'; // Silver Medal for second place
    } else if (lowerAchievement.includes('third')) {
        return '🥉'; // Bronze Medal for third place
    } else if (lowerAchievement.includes('research' || 'paper')) {
        return '🔬'; // Research Paper
    }
    else {
        return '🏅'; // General Medal for others
    }
};

const Achievements: React.FC = () => {
    return (
        <>
            <BackButton mode='light' />
            <div className='min-h-screen flex flex-col  bg-gradient-to-r from-blue-50 to-blue-100 py-12'>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 max-w-5xl mx-auto p-4" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                    <h2 className="text-3xl font-bold text-center my-8">Achievements ({achievements.length})</h2>
                    <ul className="space-y-6">
                        {achievements.map((item, index) => (
                            <li key={index} className="flex items-start space-x-4">
                                <div className="text-2xl">{getMedalEmoji(item.achievement)}</div>
                                <div className="flex flex-col">
                                    <span className="text-2xl font-extrabold">
                                        {item.Date} • {item.event}
                                    </span>
                                    <span className="text-gray-700">
                                        {item.Organization}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Achievements;
