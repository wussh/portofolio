'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { education } from '@/lib/data'
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react'

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  return (
    <section id="education" className="py-20 bg-white">
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
            Education
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg border border-primary-100 p-8 md:p-10 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center">
                      <GraduationCap size={32} className="text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-primary-900">
                        {edu.institution}
                      </h3>
                      <div className="flex items-center gap-2 text-primary-600">
                        <Calendar size={18} />
                        <span className="font-semibold">{edu.year}</span>
                      </div>
                    </div>

                    <p className="text-lg text-gray-700 mb-4">
                      {edu.degree}
                    </p>

                    {edu.gpa && (
                      <div className="flex items-center gap-2 mb-4">
                        <Award size={18} className="text-primary-500" />
                        <span className="text-gray-600">
                          <span className="font-semibold">GPA:</span> {edu.gpa}
                        </span>
                      </div>
                    )}

                    {edu.coursework && (
                      <div className="flex items-start gap-2">
                        <BookOpen size={18} className="text-primary-500 mt-1 flex-shrink-0" />
                        <p className="text-gray-600 leading-relaxed">
                          {edu.coursework}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Additional Education Info */}
            <motion.div
              variants={itemVariants}
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">2+</span>
                </div>
                <h4 className="font-semibold text-primary-900 mb-2">Bootcamps Completed</h4>
                <p className="text-sm text-gray-600">DevOps & Backend Development</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h4 className="font-semibold text-primary-900 mb-2">Certifications</h4>
                <p className="text-sm text-gray-600">Cloud & DevOps Technologies</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">∞</span>
                </div>
                <h4 className="font-semibold text-primary-900 mb-2">Continuous Learning</h4>
                <p className="text-sm text-gray-600">Always exploring new technologies</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
