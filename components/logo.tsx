import React from 'react';

const Logo = () => {
    return (
        <span className="flex items-center justify-center">
            <img src="https://testnix.vercel.app/logo.png" alt="logo" className="h-14 w-14" />
            <p className="font-mono text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#FD9248] via-[#FA1768] to-[#F001FF] font-semibold">TestNix</p>
        </span>
    )
}

export default Logo;