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
    const work = [
        { image: '#', name: 'Project Name like MyClass', title: 'project title  like Institute Site', details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iusto!' },
        { image: '#', name: 'Project Name like MyClass', title: 'project title  like Institute Site', details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iusto!' },
        { image: '#', name: 'Project Name like MyClass', title: 'project title  like Institute Site', details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iusto!' },

    ]
    return (
        <div className=''>
            {
                work.map((field) => (
                    <div
                        className='w-full grid grid-cols-2 justify-between gap-10 mt-28'
                        key={field.name}
                    >
                        <div className=''>
                            <div className='w-[50%] bg-red-600 aspect-video rounded-md'>
                                <img src={field.image} alt={field.name} />
                            </div>
                        </div>
                        {/* left ends  */}
                        <div className='flex flex-col gap-4'>
                            <div>
                                <h3 className='text-xl font-bold pb-1'>{field.name}</h3>
                                <strong>{field.title}</strong>
                            </div>
                            <p>{field.details}</p>
                            <div className='flex gap-3 flex-wrap'>
                                {
                                    skills.map((skill) => (
                                        <div
                                            className='w-fit border-[2px] py-1 px-4 text-xs font-semibold bg-white rounded-full text-gray-600'
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