
export interface CalculationResult {
  weeks: number;
  days: number;
  totalDays: number;
  estimatedConception: Date;
  currentDate: Date;
}

export enum ProcedureType {
  MEDICAL = 'MEDICAL',
  SURGICAL = 'SURGICAL',
  CONSULTATION_REQUIRED = 'CONSULTATION_REQUIRED'
}

export interface TimelineInfo {
  startWeek: number;
  endWeek: number;
  type: ProcedureType;
  description: string;
  advice: string;
}
