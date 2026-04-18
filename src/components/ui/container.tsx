import React from 'react'

interface ContainerProps {
    children: React.ReactNode;
    extraClasses?: string;
}

const Container = ({ children, extraClasses = "" }: ContainerProps) => {
    return (
        <div className={`w-full px-4 sm:px-6 md:px-8 xl:px-12 max-w-[1440px] mx-auto ${extraClasses}`}>
            {children}
        </div>
    )
}

export default Container