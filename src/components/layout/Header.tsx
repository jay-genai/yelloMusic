import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

interface SubMenu {
  name: string;
  path: string;
}

interface MenuItem {
  name: string;
  path: string;
  subMenus?: SubMenu[];
}

const menuItems: MenuItem[] = [
  { name: '메인홈', path: '/' },
  {
    name: '학원소개',
    path: '/about',
    subMenus: [
      { name: '인사말', path: '/about/greeting' },
      { name: '강사소개', path: '/about/instructors' },
      { name: '갤러리', path: '/about/gallery' },
    ],
  },
  {
    name: '교육과정',
    path: '/courses',
    subMenus: [
      { name: '클래식 피아노', path: '/courses/classic-piano' },
      { name: '재즈 피아노', path: '/courses/jazz-piano' },
      { name: '교회반주', path: '/courses/church' },
      { name: '우쿨렐레', path: '/courses/ukulele' },
      { name: '드럼', path: '/courses/drum' },
      { name: '바이올린', path: '/courses/violin' },
      { name: '작곡&미디', path: '/courses/composition' },
    ],
  },
  {
    name: '수강문의',
    path: '/inquiry',
    subMenus: [
      { name: '자주묻는 질문', path: '/inquiry/faq' },
      { name: '1:1 문의남기기', path: '/inquiry/contact' },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary-500">🎵</div>
            <span className="text-xl font-bold text-gray-900">옐로뮤직</span>
          </Link>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setHoveredMenu(item.name)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link
                  to={item.path}
                  className="px-4 py-2 text-gray-700 hover:text-primary-500 font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>

                {/* 드롭다운 서브메뉴 */}
                <AnimatePresence>
                  {item.subMenus && hoveredMenu === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-2"
                    >
                      {item.subMenus.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-500 transition-colors duration-150"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-500 hover:bg-gray-100"
          >
            {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* 모바일 메뉴 */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200"
            >
              <div className="py-4 space-y-2">
                {menuItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-500 font-medium"
                      onClick={() => !item.subMenus && setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.subMenus && (
                      <div className="pl-4 space-y-1">
                        {item.subMenus.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-500"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

