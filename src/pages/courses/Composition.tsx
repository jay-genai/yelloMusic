import SimpleCourse from './SimpleCourse';
import { SiMusescore } from 'react-icons/si';

export default function Composition() {
  return (
    <SimpleCourse
      title="작곡 & 미디"
      icon={<SiMusescore />}
      description="나만의 음악을 만들고 세상에 선보이세요"
      curriculum={[
        '음악 이론 및 화성학',
        'DAW (Logic, Cubase 등) 사용법',
        '멜로디 작법과 편곡',
        'MIDI 프로그래밍',
        '믹싱 및 마스터링 기초',
      ]}
      targetAudience={[
        '작곡에 관심있는 모든 분',
        '실용음악 입시 준비생',
        'YouTube, 스트리밍 음원 제작 희망자',
        '취미로 음악 만들기를 원하는 분',
      ]}
      classInfo={[
        '1:1 개인 레슨',
        '주 1회 (협의 가능)',
        '레슨 시간: 50분',
        '개인 노트북 지참 권장',
      ]}
      color="from-indigo-400 to-indigo-600"
    />
  );
}

