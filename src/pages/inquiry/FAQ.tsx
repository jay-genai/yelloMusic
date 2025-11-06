import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: '수강료는 어떻게 되나요?',
    answer: '악기와 레슨 시간에 따라 다르며, 상담을 통해 안내해드립니다. 1:1 문의하기를 통해 문의해주세요.',
  },
  {
    question: '레슨 시간은 어떻게 정하나요?',
    answer: '학생분의 스케줄에 맞춰 강사님과 협의하여 정합니다. 주 1~2회가 일반적이며, 시간대는 조율 가능합니다.',
  },
  {
    question: '악기가 없어도 시작할 수 있나요?',
    answer: '네, 가능합니다. 학원에서 레슨 시간에 사용 가능하며, 일부 악기는 대여도 가능합니다. 상담 시 자세히 안내해드립니다.',
  },
  {
    question: '초보자도 수강 가능한가요?',
    answer: '물론입니다! 초보자부터 전문가까지 모든 수준의 학생을 환영합니다. 개인 수준에 맞춘 맞춤 레슨을 제공합니다.',
  },
  {
    question: '성인도 수강할 수 있나요?',
    answer: '네, 나이 제한 없이 누구나 수강 가능합니다. 성인 학생분들도 많이 다니고 계십니다.',
  },
  {
    question: '발표회나 콩쿨 참가 기회가 있나요?',
    answer: '정기적으로 발표회를 개최하며, 희망하는 학생은 각종 콩쿨 준비도 도와드립니다.',
  },
  {
    question: '레슨 변경이나 보강이 가능한가요?',
    answer: '사전에 연락주시면 일정 변경 및 보강 수업이 가능합니다. 자세한 사항은 등록 시 안내해드립니다.',
  },
  {
    question: '입시 준비도 가능한가요?',
    answer: '네, 입시 전문 강사님께서 체계적인 입시 준비 과정을 제공합니다.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            자주 묻는 질문
          </h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            궁금하신 점을 빠르게 확인하세요
          </p>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <FaChevronUp className="text-primary-500 flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="text-gray-400 flex-shrink-0" />
                  )}
                </button>

                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-primary-50 rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              더 궁금한 점이 있으신가요?
            </h3>
            <p className="text-gray-700 mb-6">
              1:1 문의를 통해 직접 질문해주세요. 빠르게 답변드리겠습니다.
            </p>
            <a
              href="/inquiry/contact"
              className="inline-block bg-primary-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-600 transition-colors"
            >
              1:1 문의하기
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

