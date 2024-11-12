
"use client";

import Link from 'next/link';
import React, { useState } from 'react';

const NotFound = () => {
    const [hover, setHover] = useState(false);
    const [textHover404, setTextHover404] = useState(false);
    const [textHoverPage, setTextHoverPage] = useState(false);

    return (
        <>
            <div
                className="d-flex flex-column justify-content-center align-items-center vh-100 text-center text-white"
                style={{
                    backgroundColor: '#03081B',
                    fontFamily: 'Arial, sans-serif',
                }}
            >
                <h1
                    className="display-1"
                    style={{
                        fontWeight: 'bold',
                        fontSize: '10rem',
                        textShadow: '2px 2px 10px rgba(255, 0, 255, 0.7), 2px 2px 10px rgba(0, 0, 255, 0.7)',
                        transition: 'transform 0.3s ease-in-out, letter-spacing 0.3s ease-in-out',
                        transform: textHover404 ? 'scale(1.2)' : 'scale(1)',
                        letterSpacing: textHover404 ? '10px' : 'normal',
                    }}
                    onMouseEnter={() => setTextHover404(true)}
                    onMouseLeave={() => setTextHover404(false)}
                >
                    404
                </h1>
                <p
                    className="fs-4"
                    style={{
                        marginTop: '10px',
                        fontWeight: '500',
                        transition: 'transform 0.3s ease-in-out',
                        transform: textHoverPage ? 'scale(1.2)' : 'scale(1)',
                    }}
                    onMouseEnter={() => setTextHoverPage(true)}
                    onMouseLeave={() => setTextHoverPage(false)}
                >
                    PAGE NOT FOUND
                </p>
                <Link href="/" passHref>
                    <div
                        className="mt-3"
                        style={{
                            borderRadius: '20px',
                            padding: '10px 20px',
                            fontWeight: 'bold',
                            background: hover
                                ? 'linear-gradient(90deg, rgba(0,0,255,1) 0%, rgba(255,0,255,1) 100%)'
                                : 'linear-gradient(90deg, rgba(255,0,255,1) 0%, rgba(0,0,255,1) 100%)',
                            color: 'white',
                            textDecoration: 'none',
                            boxShadow: '0px 4px 10px rgba(255,0,255,0.5), 0px 4px 10px rgba(0,0,255,0.5)',
                            transition: 'transform 0.3s ease-in-out, background 0.3s ease-in-out',
                            cursor: 'pointer',
                            transform: hover ? 'scale(1.1)' : 'scale(1)',
                        }}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    >
                        HOMEPAGE
                    </div>
                </Link>
            </div>
        </>
    );
};

export default NotFound;