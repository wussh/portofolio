'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { personalInfo } from '@/lib/data'

export default function About() {
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
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="section-title"
          >
            About Me
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100"
          >
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl md:text-2xl font-light text-center mb-8 text-gray-600">
                {personalInfo.about}
              </p>
            </div>

            {/* Key Highlights */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
            >
              <div className="text-center p-6 bg-primary-50 rounded-xl border border-primary-100">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">2+</span>
                </div>
                <h3 className="font-semibold text-primary-900 mb-2">Years Experience</h3>
                <p className="text-sm text-primary-700">DevOps & Cloud Infrastructure</p>
              </div>

              <div className="text-center p-6 bg-primary-50 rounded-xl border border-primary-100">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">50+</span>
                </div>
                <h3 className="font-semibold text-primary-900 mb-2">Projects Completed</h3>
                <p className="text-sm text-primary-700">CI/CD & Infrastructure</p>
              </div>

              <div className="text-center p-6 bg-primary-50 rounded-xl border border-primary-100">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="font-semibold text-primary-900 mb-2">Cloud Platforms</h3>
                <p className="text-sm text-primary-700">AWS, Azure, GCP</p>
              </div>
            </motion.div>

            {/* Skills Preview */}
            <motion.div
              variants={itemVariants}
              className="mt-12"
            >
              <h3 className="text-2xl font-bold text-center mb-8 text-primary-900">
                Core Expertise
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'Kubernetes', 'Docker', 'Terraform', 'Jenkins', 'AWS', 'Azure', 'GCP',
                  'CI/CD', 'GitOps', 'Monitoring', 'Automation', 'Infrastructure as Code'
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 bg-white border border-primary-200 rounded-full text-sm font-medium text-primary-700 hover:bg-primary-50 transition-colors duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
