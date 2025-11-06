import SimpleCourse from './SimpleCourse';
import { FaChurch } from 'react-icons/fa';

export default function Church() {
  return (
    <SimpleCourse
      title="교회반주"
      icon={<FaChurch />}
      description="예배를 풍성하게 하는 반주 실력을 키워보세요"
      curriculum={[
        '찬송가 및 CCM 반주',
        '코드 진행과 리하모니제이션',
        '다양한 스타일의 반주 패턴',
        '예배 흐름에 맞는 연주',
        '전주/간주/후주 만들기',
      ]}
      targetAudience={[
        '교회 반주자가 되고 싶은 분',
        '찬양 사역을 준비하는 분',
        '반주 실력을 향상시키고 싶은 분',
        '악보 없이 코드로 연주하고 싶은 분',
      ]}
      classInfo={[
        '1:1 개인 레슨',
        '주 1회 (협의 가능)',
        '레슨 시간: 50분',
        '실전 반주 중심 레슨',
      ]}
      color="from-green-400 to-green-600"
    />
  );
}

