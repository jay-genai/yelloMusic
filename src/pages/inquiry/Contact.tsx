import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaMusic, FaComment } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제 구현 시 이메일 전송 API 연동 (EmailJS, Formspree 등)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // 3초 후 폼 초기화
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '', course: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="py-16 bg-white">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            1:1 문의하기
          </h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            궁금하신 점을 남겨주시면 빠르게 답변드리겠습니다
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border-2 border-green-500 rounded-lg p-12 text-center"
            >
              <div className="text-6xl text-green-500 mb-4">✓</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                문의가 접수되었습니다!
              </h3>
              <p className="text-gray-700">
                빠른 시일 내에 연락드리겠습니다. 감사합니다.
              </p>
            </motion.div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 이름 */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <FaUser className="inline mr-2" />
                    이름 *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="이름을 입력해주세요"
                  />
                </div>

                {/* 연락처 */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <FaPhone className="inline mr-2" />
                    연락처 *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="010-0000-0000"
                  />
                </div>

                {/* 이메일 */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <FaEnvelope className="inline mr-2" />
                    이메일
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="example@email.com"
                  />
                </div>

                {/* 관심 과정 */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <FaMusic className="inline mr-2" />
                    관심 과정
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">선택해주세요</option>
                    <option value="클래식 피아노">클래식 피아노</option>
                    <option value="재즈 피아노">재즈 피아노</option>
                    <option value="교회반주">교회반주</option>
                    <option value="우쿨렐레">우쿨렐레</option>
                    <option value="드럼">드럼</option>
                    <option value="바이올린">바이올린</option>
                    <option value="작곡&미디">작곡&미디</option>
                    <option value="기타">기타/상담 필요</option>
                  </select>
                </div>

                {/* 문의 내용 */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <FaComment className="inline mr-2" />
                    문의 내용 *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                    placeholder="궁금하신 점을 자유롭게 작성해주세요"
                  />
                </div>

                {/* 제출 버튼 */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-primary-500 text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl"
                  >
                    문의하기
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* 추가 연락 정보 */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary-50 rounded-lg p-6 text-center">
              <h3 className="font-bold text-gray-900 mb-3">네이버 블로그</h3>
              <a
                href="https://blog.naver.com/yellomusic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                blog.naver.com/yellomusic →
              </a>
            </div>

            <div className="bg-primary-50 rounded-lg p-6 text-center">
              <h3 className="font-bold text-gray-900 mb-3">유튜브 채널</h3>
              <a
                href="https://www.youtube.com/@yello_music"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                @yello_music →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

