import SimpleCourse from './SimpleCourse';
import { FaDrum } from 'react-icons/fa';

export default function Drum() {
  return (
    <SimpleCourse
      title="드럼"
      icon={<FaDrum />}
      description="리듬의 중심, 드럼으로 강렬한 비트를 만들어보세요"
      curriculum={[
        '스틱 그립과 기본 자세',
        '기본 비트와 필인',
        '록, 팝, 펑크 등 다양한 장르',
        '독보 읽기와 리듬 패턴',
        '실전 곡 연주',
      ]}
      targetAudience={[
        '드럼에 관심있는 모든 분',
        '밴드 활동을 원하는 분',
        '리듬 감각을 키우고 싶은 분',
        '실용음악 입시 준비생',
      ]}
      classInfo={[
        '1:1 개인 레슨',
        '주 1~2회 (협의 가능)',
        '레슨 시간: 50분',
        '개인 연습실 이용 가능',
      ]}
      color="from-red-400 to-red-600"
    />
  );
}

