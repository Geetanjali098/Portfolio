import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(!toggle);

    return (
        <header className='flex justify-between px-5 py-4 bg-primary text-white fixed w-full z-50'>
            <a href='/' className='logo text-2xl font-bold text-accent'>Geetanjali Nishad</a>

            {/* Desktop Navigation */}
            <nav className='hidden md:block'>
                <ul className='flex space-x-8'>
                    <li>
                        <a href='/#about' className='hover:text-indigo-300 transition-colors'>About</a>
                    </li>
                    <li>
                        <a href='/#projects' className='hover:text-indigo-300 transition-colors'>Projects</a>
                    </li>
                    <li>
                        <a href='/#activities' className='hover:text-indigo-300 transition-colors'>Activities</a>
                    </li>
                    <li>
                        <a href='/#contact' className='hover:text-indigo-300 transition-colors'>Contact</a>
                    </li>
                </ul>
            </nav>

            {/* Mobile Navigation */}
            <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-primary bg-opacity-95 z-40 transition-all duration-300 ease-in-out ${toggle ? 'translate-x-0' : '-translate-x-full'}`}>
                <nav className='flex flex-col items-center justify-center h-full'>
                    <ul className="flex flex-col space-y-8 text-center">
                        <li>
                            <a 
                                href='/#about' 
                                className='text-2xl hover:text-indigo-300 transition-colors'
                                onClick={handleToggle}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a 
                                href='/#projects' 
                                className='text-2xl hover:text-indigo-300 transition-colors'
                                onClick={handleToggle}
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a 
                                href='/#activities' 
                                className='text-2xl hover:text-indigo-300 transition-colors'
                                onClick={handleToggle}
                            >
                                Activities
                            </a>
                        </li>
                        <li>
                            <a 
                                href='/#contact' 
                                className='text-2xl hover:text-indigo-300 transition-colors'
                                onClick={handleToggle}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Toggle Button */}
            <button 
                onClick={handleToggle} 
                className='block md:hidden z-50'
                aria-label="Toggle menu"
            >
                {toggle ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </button>
        </header>
    );
}

export default Header;


