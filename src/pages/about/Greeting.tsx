import { motion } from 'framer-motion';

export default function Greeting() {
  return (
    <div className="py-16 bg-white">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            인사말
          </h1>

          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <p className="text-lg leading-relaxed mb-6">
                안녕하세요, <span className="text-primary-600 font-semibold">옐로뮤직 음악학원</span>을 찾아주셔서 감사합니다.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                옐로뮤직은 음악의 즐거움을 나누고, 
                학생 한 분 한 분의 음악적 재능을 발견하고 키워드리는 것을 목표로 합니다.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                클래식 피아노부터 재즈, 드럼, 바이올린까지 다양한 악기와 장르를 
                전문 강사진과 함께 체계적으로 배우실 수 있습니다.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                초보자부터 전문가 수준까지, 나이와 실력에 관계없이 
                모든 분들을 환영합니다. 음악을 사랑하는 마음 하나면 충분합니다.
              </p>

              <p className="text-gray-700 leading-relaxed">
                여러분의 음악 여정에 옐로뮤직이 함께하겠습니다.
              </p>
            </div>

            <div className="text-right text-gray-600 mt-8">
              <p className="text-lg font-semibold">옐로뮤직 음악학원 원장</p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
              <p className="text-gray-700">년 이상의 경력</p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">100+</div>
              <p className="text-gray-700">졸업생 배출</p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">7+</div>
              <p className="text-gray-700">다양한 교육과정</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

