import SimpleCourse from './SimpleCourse';
import { FaGuitar } from 'react-icons/fa';

export default function Ukulele() {
  return (
    <SimpleCourse
      title="우쿨렐레"
      icon={<FaGuitar />}
      description="쉽고 재미있는 우쿨렐레로 음악을 시작하세요"
      curriculum={[
        '우쿨렐레 기초 (튜닝, 자세)',
        '기본 코드와 스트러밍',
        '다양한 리듬 패턴',
        '핑거스타일 연주',
        '팝송, 가요 등 인기곡 연주',
      ]}
      targetAudience={[
        '악기를 처음 접하는 분',
        '가볍게 음악을 즐기고 싶은 분',
        '노래 반주를 배우고 싶은 분',
        '취미로 악기를 배우고 싶은 분',
      ]}
      classInfo={[
        '1:1 개인 레슨 또는 그룹 레슨',
        '주 1회 (협의 가능)',
        '레슨 시간: 30분 / 50분',
        '악기 대여 가능',
      ]}
      color="from-yellow-400 to-yellow-600"
    />
  );
}

