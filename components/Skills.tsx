'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills } from '@/lib/data'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
            className="section-title"
          >
            Technical Skills & Interests
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-primary-900 mb-6 pb-3 border-b border-gray-200">
                  {skill.category}
                </h3>
                <div className="space-y-3">
                  {skill.items.map((item, itemIndex) => (
                    <motion.div
                      key={item}
                      variants={skillItemVariants}
                      initial="hidden"
                      animate={isInView ? 'visible' : 'hidden'}
                      transition={{ delay: index * 0.1 + itemIndex * 0.05 }}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors duration-200"
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Visualization */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 md:p-12 border border-primary-100"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-primary-900">
              Skill Proficiency Overview
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { category: 'DevOps Tools', level: 90, color: 'bg-primary-500' },
                { category: 'Cloud Platforms', level: 85, color: 'bg-blue-500' },
                { category: 'Containerization', level: 95, color: 'bg-green-500' },
                { category: 'Infrastructure as Code', level: 88, color: 'bg-purple-500' },
              ].map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-gray-200"
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        className={skill.color}
                        initial={{ strokeDasharray: '0 251.2' }}
                        animate={isInView ? { strokeDasharray: `${(skill.level / 100) * 251.2} 251.2` } : { strokeDasharray: '0 251.2' }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-700">{skill.level}%</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-700">{skill.category}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
