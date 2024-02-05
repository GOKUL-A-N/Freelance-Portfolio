'use client'
import styles from './page.module.scss'
import { useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from "./{utils}/useMousePosition.js";
// import { Fade } from "react-awesome-reveal";

export default function Home() {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className={styles.main}>
      <motion.div 
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
      >
          <div className='w-full h-full flex flex-col items-center justify-center'>
        <h6 onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}} className='text-[10px] sm:text-[15px] font-semibold text-center tracking-widest uppercase'>Gokul NatarajMoorthy</h6> 
        <h1 onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}} className='text-center text-[35px] sm:text-[35px] md:text-[55px] xl:[85px] md:tracking-wide uppercase font-black'>I{"'"}m a <br /> <span className=''>Wizard</span> <br /> <span className=''>who</span> <br /> turns <br /> Coffee <br /> into <br /> Code</h1>
        </div> 
      </motion.div>

      <div className={styles.body}>
        <div className='w-full h-full flex flex-col items-center justify-center '>
        <h6 className='text-[10px] sm:text-[15px] font-semibold text-center tracking-widest uppercase'>Gokul NatarajMoorthy</h6> 
        <h1 className='text-center text-[35px] sm:text-[35px] leading-tight md:text-[55px] xl:text-[65px]  md:tracking-wide  uppercase font-black'><span>Crafting</span>  <br /> <span className='text-[#0de1d4]'>digital</span> <br /> <span className='text-[#0de1d4]'>experience</span> <br /> that <br /> ignite <br /> your <br /> business </h1>
        </div> 
      </div>

    </main>
  )
}