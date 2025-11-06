import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaMusic, FaGuitar, FaDrum, FaUsers } from 'react-icons/fa';
import { PiPianoKeysFill } from 'react-icons/pi';

export default function Home() {
  const courses = [
    { name: '클래식 피아노', icon: <PiPianoKeysFill />, path: '/courses/classic-piano' },
    { name: '재즈 피아노', icon: <FaMusic />, path: '/courses/jazz-piano' },
    { name: '우쿨렐레', icon: <FaGuitar />, path: '/courses/ukulele' },
    { name: '드럼', icon: <FaDrum />, path: '/courses/drum' },
  ];

  return (
    <div>
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-20">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            음악의 즐거움을 함께
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            옐로뮤직 음악학원에서 시작하세요
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/inquiry/contact"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              수강 문의하기
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 학원 소개 */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              옐로뮤직을 소개합니다
            </h2>
            <p className="text-lg text-gray-600">
              전문 강사진과 함께하는 체계적인 음악 교육
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl text-primary-500 mb-4 flex justify-center">
                <FaUsers />
              </div>
              <h3 className="text-xl font-semibold mb-2">전문 강사진</h3>
              <p className="text-gray-600">
                풍부한 경험과 노하우를 가진 전문 강사님들이 함께합니다
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl text-primary-500 mb-4 flex justify-center">
                <FaMusic />
              </div>
              <h3 className="text-xl font-semibold mb-2">다양한 악기</h3>
              <p className="text-gray-600">
                피아노, 드럼, 바이올린, 우쿨렐레 등 다양한 악기를 배울 수 있습니다
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl text-primary-500 mb-4 flex justify-center">
                <PiPianoKeysFill />
              </div>
              <h3 className="text-xl font-semibold mb-2">맞춤형 교육</h3>
              <p className="text-gray-600">
                개인별 수준과 목표에 맞춘 1:1 맞춤 레슨을 제공합니다
              </p>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/about/greeting"
              className="inline-block text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              학원 소개 더보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* 교육 과정 */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              교육 과정
            </h2>
            <p className="text-lg text-gray-600">
              체계적인 커리큘럼으로 실력을 키워보세요
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={course.path}
                  className="block p-6 bg-white rounded-lg text-center hover:shadow-lg transition-shadow group"
                >
                  <div className="text-4xl text-primary-500 mb-3 flex justify-center group-hover:scale-110 transition-transform">
                    {course.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {course.name}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="inline-block bg-primary-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-600 transition-colors"
            >
              전체 교육과정 보기
            </Link>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            지금 바로 시작하세요!
          </h2>
          <p className="text-xl mb-8">
            궁금한 점이 있으신가요? 언제든 문의해주세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/inquiry/faq"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              자주묻는 질문
            </Link>
            <Link
              to="/inquiry/contact"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              1:1 문의하기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

