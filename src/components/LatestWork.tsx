import React from 'react'

function LatestWork(){
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
    const work = [
        { id: 0, image: '#', name: 'Project Name like MyClass', title: 'project title  like Institute Site', details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iusto!' },
        { id: 1, image: '#', name: 'Project Name like MyClass', title: 'project title  like Institute Site', details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iusto!' },
        { id: 2, image: '#', name: 'Project Name like MyClass', title: 'project title  like Institute Site', details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iusto!' },

    ]
    return (
        <div className=''>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Projects</h2>
            </div>
            {
                work.map((field, index) => (
                    <div
                        className='w-full flex  justify-between mt-28'
                        key={field.id}
                    >
                        <div className={`${field.id % 2 === 0 ? ' border-r-2  ' : ' border-l-2   justify-end order-2'} flex w-1/2`}>
                            <div className='w-[50%] bg-red-600 aspect-video rounded-md'>
                                <img src={field.image} alt={field.name} />
                            </div>
                        </div>
                        {/* left ends  */}
                        <div className={`flex flex-col gap-4 w-1/2 ${field.id % 2 === 0 ? ' pl-10' : ' pr-10'}`} >
                            <div >
                                <h3 className='text-xl font-bold pb-1'>{field.name}</h3>
                                <strong className='text-sm'>{field.title}</strong>
                            </div>
                            <p className='text-sm'>{field.details}</p>
                            <div className='flex gap-3 flex-wrap'>
                                {
                                    skills.map((skill) => (
                                        <div
                                            className='w-fit border-[2px] py-[2px] px-4 text-xs font-semibold bg-white rounded-full text-slate-900'
                                            key={skill.name}
                                        >
                                            {skill.name}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default LatestWork