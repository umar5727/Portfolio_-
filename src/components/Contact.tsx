import React from 'react'

 function Contact () {
    
    const formFields=[
        {type:'text', label:'Full Name', name:'name'},
        {type:'email', label:'Email', name:'email'},
        {type:'textarea', label:'Message', name:'Message'},

    ]

    return (
        <div className='grid grid-cols-2'>
            <div className='flex justify-center items-center'>
                image for contact 
            </div>
            <div className=' px-16'>
                <form action="">                    
                    <div className='flex flex-col gap-4'>
                        {   
                            formFields.map((field)=>(
                                field.type!='textarea'?
                                    <div 
                                    className='relative '
                                    key={field.name}
                                    >
                                        <input
                                            type={field.type}
                                            placeholder=' '
                                            name={field.name}
                                            id={field.name}
                                            className='peer w-full outline-none bg-primarybg rounded-md py-3 px-4 text-lg text-gray-200 border-[2px] border-gray-600 transition-all duration-500 focus-visible:border-[#00fd9a] hover:bg-black/20'
                                        />
                                        <label 
                                            htmlFor={field.name} 
                                            className='text-gray-400 bg-primarybg text-xs px-2 absolute top-0 -translate-y-1/2 left-3 duration-300 peer-focus-within:top-0 peer-placeholder-shown:top-1/2 '>
                                        {field.label}
                                        </label>
                                    </div>
                                :
                                <div 
                                className='relative '
                                key={field.name}
                                >
                                    <textarea
                                    rows={5}
                                    placeholder=' '
                                    name={field.name}
                                    id={field.name}
                                    
                                    className='peer w-full outline-none bg-primarybg rounded-md py-3 px-4 text-lg text-gray-200 border-[2px] border-gray-600 transition-all duration-500 focus-visible:border-[#00fd9a] hover:bg-black/20'/>
                                    <label htmlFor={field.name} className='text-gray-400 bg-primarybg text-xs px-2 absolute top-0 left-3 duration-300 peer-focus-within:-top-[6px] peer-placeholder-shown:top-4 '>
                                    {field.label}
                                    </label>
                                </div>
                            ))
                        }
                        <button 
                        type='submit' 
                        className='w-full bg-primary text-black py-2 rounded-md font-semibold text-lg' >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact