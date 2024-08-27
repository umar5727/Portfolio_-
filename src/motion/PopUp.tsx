import {motion} from 'framer-motion'
import React from 'react'
interface Props{
  children:JSX.Element;
  width?:'fit-content'|'100%';
}
export const PopUp = ({children}: Props)=> {
  return (
    <div className='relative overflow-hidden w-full min-h-max'>
      <motion.div 
        variants={{
          hidden:{opacity:0, y:75},
          visible:{opacity:1, y:0}
        }}
        initial='hidden'
        animate='visible'
        transition={{duration:.5, delay:.25}}
      >
        {children}
      </motion.div>
    </div>
  )
}
