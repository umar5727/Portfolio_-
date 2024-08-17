import React from 'react'

const Contact = () => {
    return (
        <div>
            <form action="">
                {/* <label htmlFor=""></label> */}
                <div className='group relative'>
                    <input type="text" placeholder=' ' className='peer focus-visible:outline-none bg-black rounded-md py-2 px-4 text-xl text-gray-200 border-[4px] border-gray-600 '/>
                    <div className='bg-black px-3 absolute top-0 -translate-y-1/2 left-3 duration-300 peer-focus-within:top-0 peer-placeholder-shown:top-1/2 '>
                        Full Name
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contact