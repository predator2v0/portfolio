import React from "react";

const Social = () => {
    return (
        <div className='social__icons'>
            <div className='email'>
                <a
                    href='mailto:papu.roul99@gmail.com'
                    target='_blank'
                    rel='noreferrer noopener'
                >
                    <img src='/img/email-icon.svg' alt='' />{" "}
                </a>
            </div>
            <div className='github'>
                <a
                    href='https://github.com/predator2v0'
                    target='_blank'
                    rel='noreferrer noopener'
                >
                    <img src='/img/github-icon.svg' alt='' />{" "}
                </a>
            </div>
            <div className='twitter'>
                <a
                    href='https://twitter.com/predator2v0'
                    target='_blank'
                    rel='noreferrer noopener'
                >
                    <img src='/img/twitter-icon.svg' alt='' />{" "}
                </a>
            </div>
            <div className='hackerrank'>
                <a
                    href='https://hackerrank.com/predator2v0'
                    target='_blank'
                    rel='noreferrer noopener'
                >
                    <img src='/img/hackerrank-icon.svg' alt='' />{" "}
                </a>
            </div>
            <div className='instagram'>
                <a
                    href='https://instagram.com/predator2v0'
                    target='_blank'
                    rel='noreferrer noopener'
                >
                    <img src='/img/instagram-icon.svg' alt='' />{" "}
                </a>
            </div>
        </div>
    );
};

export default Social;
