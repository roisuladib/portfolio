'use client'

import type { ChildrenProps } from '@/types'
import type { Variants } from 'framer-motion'
import { motion } from 'framer-motion'

const variants: Variants = {
   hidden: {
      opacity: 0,
      x: -200,
      y: 0
   },
   enter: {
      opacity: 1,
      x: 0,
      y: 0
   }
}

export default function Template({ children }: ChildrenProps) {
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: 'linear' }}
      className="flex flex-col flex-1">
      {children}
   </motion.main>
  )
}
