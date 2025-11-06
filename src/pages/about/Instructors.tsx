import { motion } from 'framer-motion';
import { FaDrum, FaGuitar, FaMusic } from 'react-icons/fa';
import { PiPianoKeysFill } from 'react-icons/pi';

const instructors = [
  {
    name: '강사 A',
    role: '클래식 피아노',
    icon: <PiPianoKeysFill />,
    description: '클래식 피아노 전공, 10년 이상의 레슨 경력',
    specialties: ['클래식', '입시 레슨', '콩쿨 준비'],
  },
  {
    name: '강사 B',
    role: '재즈 피아노 & 작곡',
    icon: <FaMusic />,
    description: '실용음악 전공, 재즈 피아노 및 작곡 전문',
    specialties: ['재즈', '작곡', '미디'],
  },
  {
    name: '강사 C',
    role: '드럼',
    icon: <FaDrum />,
    description: '드럼 전공, 다수의 공연 및 세션 경력',
    specialties: ['록', '재즈', '펑크'],
  },
  {
    name: '강사 D',
    role: '우쿨렐레 & 바이올린',
    icon: <FaGuitar />,
    description: '현악기 전문, 친절한 레슨으로 유명',
    specialties: ['우쿨렐레', '바이올린', '교회반주'],
  },
];

export default function Instructors() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            강사 소개
          </h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            풍부한 경험과 열정을 가진 전문 강사진을 소개합니다
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-br from-primary-400 to-primary-600 p-8 text-white text-center">
                  <div className="text-5xl mb-4 flex justify-center">
                    {instructor.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{instructor.name}</h3>
                  <p className="text-primary-100">{instructor.role}</p>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 mb-4">{instructor.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">전문 분야:</h4>
                    <div className="flex flex-wrap gap-2">
                      {instructor.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              함께 성장하는 강사진
            </h3>
            <p className="text-gray-600 mb-6">
              옐로뮤직의 모든 강사님들은 지속적인 연구와 노력으로
              <br />
              최고의 레슨을 제공하기 위해 노력하고 있습니다.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

