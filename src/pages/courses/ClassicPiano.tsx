import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { PiPianoKeysFill } from 'react-icons/pi';

export default function ClassicPiano() {
  const curriculum = [
    '기초 음악 이론 및 악보 읽기',
    '정확한 손가락 자세와 터치 연습',
    '체르니, 하농 등 기초 교재',
    '바흐, 모차르트, 베토벤 등 고전 작품',
    '콩쿨 및 입시 준비',
  ];

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
              <PiPianoKeysFill />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              클래식 피아노
            </h1>
            <p className="text-lg text-gray-600">
              정통 클래식 피아노의 세계로 초대합니다
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">과정 소개</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              클래식 피아노는 가장 체계적이고 전통적인 피아노 교육 과정입니다.
              기초부터 고급 레퍼토리까지 단계별로 학습하며,
              음악성과 테크닉을 균형있게 발전시킵니다.
            </p>
            <p className="text-gray-700 leading-relaxed">
              입시 준비생부터 취미로 배우시는 분들까지,
              각자의 목표에 맞춘 맞춤형 레슨을 제공합니다.
            </p>
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
                <li>• 피아노를 처음 시작하시는 분</li>
                <li>• 음악 입시를 준비하는 학생</li>
                <li>• 클래식 음악을 사랑하는 성인</li>
                <li>• 콩쿨 준비생</li>
              </ul>
            </div>

            <div className="bg-primary-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">수업 방식</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 1:1 개인 레슨</li>
                <li>• 주 1~2회 (협의 가능)</li>
                <li>• 레슨 시간: 30분 / 50분 선택</li>
                <li>• 정기 발표회 참가</li>
              </ul>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">수강 문의</h3>
            <p className="mb-6">클래식 피아노 레슨에 대해 더 궁금하신가요?</p>
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

