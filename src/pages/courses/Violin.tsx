import SimpleCourse from './SimpleCourse';
import { GiViolin } from 'react-icons/gi';

export default function Violin() {
  return (
    <SimpleCourse
      title="바이올린"
      icon={<GiViolin />}
      description="우아하고 아름다운 바이올린의 세계로"
      curriculum={[
        '바이올린 기초 (자세, 활 잡기)',
        '음정과 음색 만들기',
        '기초 교재 및 에튀드',
        '클래식 명곡 연주',
        '실내악 앙상블',
      ]}
      targetAudience={[
        '바이올린을 배우고 싶은 모든 분',
        '클래식 음악을 사랑하는 분',
        '오케스트라에 관심있는 분',
        '음악 입시 준비생',
      ]}
      classInfo={[
        '1:1 개인 레슨',
        '주 1~2회 (협의 가능)',
        '레슨 시간: 30분 / 50분',
        '악기 대여 상담 가능',
      ]}
      color="from-pink-400 to-pink-600"
    />
  );
}

