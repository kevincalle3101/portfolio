import React from 'react'

const AchievementsList = [
    {
        metric: "Projects",
        value: "5+"
    },
    {
        metric: "Users",
        value: "10+"
    },
    {
        metric: "Awards",
        value: "5+"
    },
    {
        metric: "Years",
        value: "1+"
    }
]

const AchievementsSection = () => {
    return (
        <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>{
            AchievementsList.map((achievement, index) => (
                <div key={index} className='flex flex-col items-center justify-center mx-4'>
                    <h2 className='text-white text-4xl font-bold'>{achievement.value}</h2>
                    <p className='text-[#ADB7BE] text-base'>{achievement.metric}</p>
                </div>
            ))
        }</div>
    )
}

export default AchievementsSection