
import { ProcedureType, TimelineInfo } from './types';

export const TIMELINE_DATA: TimelineInfo[] = [
  {
    startWeek: 0,
    endWeek: 10,
    type: ProcedureType.MEDICAL,
    description: "초기 임신 중지 (약물 활용 가능 시기)",
    advice: "일반적으로 10주 이내에는 약물(미프진 등)을 통한 임신 중지가 고려될 수 있는 시기입니다. 다만 전문가의 처방과 지도가 반드시 필요합니다."
  },
  {
    startWeek: 10,
    endWeek: 14,
    type: ProcedureType.SURGICAL,
    description: "초기 수술적 임신 중지",
    advice: "이 시기에는 주로 흡입술 등의 수술적 방법이 권장됩니다. 회복이 빠르고 비교적 안전한 시기로 알려져 있습니다."
  },
  {
    startWeek: 14,
    endWeek: 24,
    type: ProcedureType.CONSULTATION_REQUIRED,
    description: "중기 임신 중지 (정밀 상담 필요)",
    advice: "14주가 지나면 시술의 난이도가 높아지며, 법적/의학적 검토가 더 필요할 수 있습니다. 가능한 빨리 전문 의료기관을 방문하십시오."
  }
];

export const FAQ_ITEMS = [
  { q: "임신 중지는 불법인가요?", a: "대한민국에서는 2019년 헌법불합치 판결 이후 낙태죄가 실효되었습니다. 현재 처벌 조항은 없으나, 세부적인 보건 의료 체계 내 가이드라인이 정립 중입니다." },
  { q: "비용은 어느 정도인가요?", a: "주수와 시술 방식에 따라 차이가 큽니다. 초기일수록 비용 부담이 적고 몸의 회복도 빠릅니다. 의료기관마다 상이하므로 직접 상담이 필요합니다." },
  { q: "비밀이 보장되나요?", a: "의료기관은 환자의 개인정보를 보호할 의무가 있습니다. 본인이 원하지 않는 경우 가족에게도 알리지 않을 권리가 있습니다." }
];
