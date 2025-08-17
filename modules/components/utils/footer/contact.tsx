"use client";

import { useForm, ValidationError } from "@formspree/react";
import Button from "../button";

export default function FooterContact(): JSX.Element {
    const [state, handleSubmit, reset] = useForm("mjvnebzy");

    if (state.succeeded) {
        return (
            <div>
                Thank you for signing up! <button onClick={reset}>Reset</button>
            </div>
        );
    }
    return (
        <form onSubmit={handleSubmit} className='h-full gap-y-2.5 md:gap-y-4 flex flex-col justify-between'>
                <div className='flex flex-col gap-y-1'>
                    <label
                        className='block text-ganache font-medium text-base md:text-lg'
                        htmlFor='name'>
                        Full Name
                    </label>
                    <input
                        className='border-2 rounded w-full py-5 px-3 border-ganache text-ganache bg-transparent placeholder-ganache/70 leading-tight focus:outline-none focus:shadow-outline font-normal text-base'
                        id='name'
                        type='name'
                        name='name'
                        required
                        placeholder='Enter your name'
                    />
                </div>
                <div className='flex flex-col gap-y-1'>
                    <label
                        className='block text-ganache font-medium text-base md:text-lg'
                        htmlFor='name'>
                        Email
                    </label>
                    <input
                        className='border-2 rounded w-full py-5 px-3 border-ganache text-ganache bg-transparent placeholder-ganache/70 leading-tight focus:outline-none focus:shadow-outline font-normal text-base'
                        id='email'
                        type='email'
                        name='email'
                        required
                        placeholder='Enter your email'
                    />
                </div>
                <div className='flex flex-col gap-y-1'>
                    <label
                        className='block text-ganache font-medium text-base md:text-lg'
                        htmlFor='name'>
                        Your Message
                    </label>
                    <textarea
                        className='border-2 rounded w-full py-5 px-3 border-ganache text-ganache bg-transparent placeholder-ganache/70 leading-tight focus:outline-none focus:shadow-outline font-normal text-base'
                        id='message'
                        name='message'
                        required
                        placeholder='Write your message here...'
                    />
                </div>
            <Button type='submit' disabled={state.submitting} theme='dark' className="w-fit py-4 px-8">
                Send Message
            </Button>
        </form>
    );
}
