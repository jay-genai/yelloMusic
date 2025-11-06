import { FaYoutube, FaBloggerB, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 학원 정보 */}
          <div>
            <h3 className="text-xl font-bold text-primary-400 mb-4">옐로뮤직</h3>
            <p className="text-sm mb-4">
              음악의 즐거움을 나누는 옐로뮤직 음악학원입니다.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.youtube.com/@yello_music"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="https://blog.naver.com/yellomusic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <FaBloggerB size={24} />
              </a>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h4 className="font-semibold text-white mb-4">빠른 링크</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about/greeting" className="hover:text-primary-400 transition-colors">
                  인사말
                </a>
              </li>
              <li>
                <a href="/about/instructors" className="hover:text-primary-400 transition-colors">
                  강사소개
                </a>
              </li>
              <li>
                <a href="/courses" className="hover:text-primary-400 transition-colors">
                  교육과정
                </a>
              </li>
              <li>
                <a href="/inquiry/contact" className="hover:text-primary-400 transition-colors">
                  1:1 문의
                </a>
              </li>
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h4 className="font-semibold text-white mb-4">연락처</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <FaPhone className="mt-1 mr-2 flex-shrink-0" />
                <span>전화 문의: 추후 업데이트 예정</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0" />
                <span>주소: 추후 업데이트 예정</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} 옐로뮤직. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

