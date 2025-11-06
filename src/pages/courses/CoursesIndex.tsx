import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaMusic, FaGuitar, FaDrum, FaChurch } from 'react-icons/fa';
import { PiPianoKeysFill } from 'react-icons/pi';
import { SiMusescore } from 'react-icons/si';
import { GiViolin } from 'react-icons/gi';

const courses = [
  {
    name: '클래식 피아노',
    path: '/courses/classic-piano',
    icon: <PiPianoKeysFill />,
    description: '체계적인 클래식 피아노 교육',
    color: 'from-blue-400 to-blue-600',
  },
  {
    name: '재즈 피아노',
    path: '/courses/jazz-piano',
    icon: <FaMusic />,
    description: '즉흥 연주와 재즈의 자유로움',
    color: 'from-purple-400 to-purple-600',
  },
  {
    name: '교회반주',
    path: '/courses/church',
    icon: <FaChurch />,
    description: '예배 반주를 위한 실전 레슨',
    color: 'from-green-400 to-green-600',
  },
  {
    name: '우쿨렐레',
    path: '/courses/ukulele',
    icon: <FaGuitar />,
    description: '쉽고 재미있는 우쿨렐레',
    color: 'from-yellow-400 to-yellow-600',
  },
  {
    name: '드럼',
    path: '/courses/drum',
    icon: <FaDrum />,
    description: '리듬의 기초부터 실전까지',
    color: 'from-red-400 to-red-600',
  },
  {
    name: '바이올린',
    path: '/courses/violin',
    icon: <GiViolin />,
    description: '아름다운 현악기의 세계',
    color: 'from-pink-400 to-pink-600',
  },
  {
    name: '작곡 & 미디',
    path: '/courses/composition',
    icon: <SiMusescore />,
    description: '나만의 음악 만들기',
    color: 'from-indigo-400 to-indigo-600',
  },
];

export default function CoursesIndex() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              교육 과정
            </h1>
            <p className="text-lg text-gray-600">
              다양한 악기와 장르 중 원하는 과정을 선택하세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={course.path}
                  className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all group"
                >
                  <div className={`bg-gradient-to-br ${course.color} p-8 text-white text-center`}>
                    <div className="text-5xl mb-3 flex justify-center group-hover:scale-110 transition-transform">
                      {course.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{course.name}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 text-center">{course.description}</p>
                    <div className="mt-4 text-center">
                      <span className="text-primary-600 font-semibold group-hover:text-primary-700">
                        자세히 보기 →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              어떤 악기를 선택해야 할지 고민되시나요?
            </h3>
            <p className="text-gray-600 mb-6">
              상담을 통해 가장 적합한 악기와 과정을 추천해드립니다.
            </p>
            <Link
              to="/inquiry/contact"
              className="inline-block bg-primary-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-600 transition-colors"
            >
              상담 문의하기
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

