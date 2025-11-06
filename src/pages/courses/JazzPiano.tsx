import { motion } from 'framer-motion';
import { FaMusic, FaCheckCircle } from 'react-icons/fa';

export default function JazzPiano() {
  const curriculum = [
    '재즈 코드와 보이싱',
    '즉흥 연주 (Improvisation)',
    '리듬과 그루브',
    '스탠다드 재즈 곡 연주',
    '블루스, 스윙, 보사노바 등 다양한 스타일',
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
              <FaMusic />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              재즈 피아노
            </h1>
            <p className="text-lg text-gray-600">
              자유로운 즉흥 연주의 매력을 경험하세요
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">과정 소개</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              재즈 피아노는 자유로운 표현과 즉흥 연주가 핵심입니다.
              코드 이론부터 시작하여 다양한 재즈 스타일을 배우고,
              나만의 연주를 만들어갈 수 있습니다.
            </p>
            <p className="text-gray-700 leading-relaxed">
              블루스, 스윙, 보사노바 등 다양한 장르를 경험하며
              실전 연주 능력을 키워갑니다.
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
                <li>• 재즈에 관심있는 모든 분</li>
                <li>• 실용음악 입시 준비생</li>
                <li>• 코드 연주를 배우고 싶은 분</li>
                <li>• 즉흥 연주에 도전하고 싶은 분</li>
              </ul>
            </div>

            <div className="bg-primary-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">수업 방식</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 1:1 개인 레슨</li>
                <li>• 주 1~2회 (협의 가능)</li>
                <li>• 레슨 시간: 50분</li>
                <li>• 앙상블 세션 참여 기회</li>
              </ul>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">수강 문의</h3>
            <p className="mb-6">재즈 피아노 레슨에 대해 더 궁금하신가요?</p>
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

