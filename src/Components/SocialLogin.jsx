import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-2">Login With</h2>
            <div className='*:w-full space-y-1.5'>
                <button className='btn'><FaGoogle /> Login With Google</button>
                <button className='btn'><FaGithub /> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;