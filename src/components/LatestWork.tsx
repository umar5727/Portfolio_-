import React from 'react'

const LatestWork = () => {
    const skills = [
        { name: '#React.js' },
        { name: '#JavaScript' },
        { name: '#Tailwind CSS' },
        { name: '#Node.js' },
        { name: '#Express.js' },
        { name: '#MongoDB' },
        { name: '#Mongoose' },
        { name: '#ejs' },
        { name: '#MongoDBAtlas' },
    ]
    return (
        <div>
            <div className='w-full grid grid-cols-2 justify-between gap-10 '>
                <div className=''>

                    <div className='w-[50%] bg-red-600 aspect-video rounded-md'>
                        image
                    </div>
                </div>
                {/* left ends  */}
                <div className='flex flex-col gap-4'>
                    <div>
                        <h3 className='text-xl font-bold pb-1'>Project Name like 'MyClass'</h3>
                        <strong>project title  like 'institute site'</strong>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iusto!</p>
                    <div className='flex gap-5 flex-wrap'>

                        {
                            skills.map((field) => (

                                <div
                                    className='w-fit border-[2px] py-1 px-6 text-sm font-semibold bg-white rounded-full text-gray-600'
                                    key={field.name}
                                >
                                    {field.name}
                                </div>
                            ))
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestWork