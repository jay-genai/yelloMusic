import { motion } from 'framer-motion';
import { useState } from 'react';

const galleryImages = [
  { id: 1, title: '피아노 레슨실', category: '시설' },
  { id: 2, title: '드럼 연습실', category: '시설' },
  { id: 3, title: '발표회 현장', category: '행사' },
  { id: 4, title: '학생 연주 모습', category: '수업' },
  { id: 5, title: '강사 레슨 장면', category: '수업' },
  { id: 6, title: '단체 사진', category: '행사' },
];

const categories = ['전체', '시설', '수업', '행사'];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const filteredImages =
    selectedCategory === '전체'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            갤러리
          </h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            옐로뮤직의 다양한 모습을 확인해보세요
          </p>

          {/* 카테고리 필터 */}
          <div className="flex justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* 이미지 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative aspect-video bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              >
                {/* 이미지 플레이스홀더 */}
                <div className="w-full h-full flex items-center justify-center text-primary-400">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🎵</div>
                    <p className="text-sm font-medium">{image.title}</p>
                  </div>
                </div>

                {/* 호버 오버레이 */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    {image.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 안내 메시지 */}
          <div className="mt-12 bg-primary-50 rounded-lg p-6 text-center">
            <p className="text-gray-700">
              <strong>참고:</strong> 실제 학원 사진은 네이버 블로그와 유튜브 채널에서 확인하실 수 있습니다.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href="https://blog.naver.com/yellomusic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                네이버 블로그 →
              </a>
              <a
                href="https://www.youtube.com/@yello_music"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                유튜브 채널 →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

