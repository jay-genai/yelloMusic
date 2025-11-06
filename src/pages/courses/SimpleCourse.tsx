import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

interface SimpleCourseProps {
  title: string;
  icon: ReactNode;
  description: string;
  curriculum: string[];
  targetAudience: string[];
  classInfo: string[];
  color?: string;
}

export default function SimpleCourse({
  title,
  icon,
  description,
  curriculum,
  targetAudience,
  classInfo,
  color = 'from-primary-500 to-primary-600',
}: SimpleCourseProps) {
  return (
    <div className="py-16 bg-white">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="text-6xl text-primary-500 mb-4 flex justify-center">
              {icon}
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
            <p className="text-lg text-gray-600">{description}</p>
          </div>

          <div className="bg-white rounded-lg border-2 border-primary-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">커리큘럼</h2>
            <ul className="space-y-3">
              {curriculum.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <FaCheckCircle className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-primary-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">대상</h3>
              <ul className="text-gray-700 space-y-2">
                {targetAudience.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-primary-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">수업 방식</h3>
              <ul className="text-gray-700 space-y-2">
                {classInfo.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={`text-center bg-gradient-to-r ${color} text-white rounded-lg p-8`}>
            <h3 className="text-2xl font-bold mb-4">수강 문의</h3>
            <p className="mb-6">{title} 레슨에 대해 더 궁금하신가요?</p>
            <a
              href="/inquiry/contact"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              문의하기
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

