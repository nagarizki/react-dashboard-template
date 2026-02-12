export interface KPI {
  label: string;
  value: number;
  trend: number;
  trendLabel: string;
  color: string;
}

export interface GeoData {
  id: string;
  name: string;
  offeringCount: number;
  responseRate: number;
  accepted: number;
  pending: number;
  rejected: number;
  resigned: number;
  late: number;
}

export interface FilterState {
  provinsi: string;
  kabKota: string;
  survei: string;
  kegiatan: string;
}

export interface DemographicSegment {
  label: string;
  percentage: number;
  value: number;
  colorClass: string;
}

export interface Demographic {
  category: string;
  totalText: string;
  segments: DemographicSegment[];
}

export interface StatusResponsSegment {
  label: string;
  percentage: number;
  value: number;
  colorClass: string;
}

export interface StatusRespons {
  category: string;
  totalText: string;
  segments: StatusResponsSegment[];
}

export interface OfferingProgressBreakdown {
  label: string;
  value: number;
  color: string;
}

export interface OfferingProgress {
  total: number;
  breakdown: OfferingProgressBreakdown[];
}

export interface KpiMitraBreakdown {
  label: string;
  value: number;
  percentage: number;
  description: string;
}

export interface KpiMitra {
  average: number;
  trend: number;
  trendLabel: string;
  breakdown: KpiMitraBreakdown[];
}

export interface MapData {
  growthRate: number;
  trend: number;
  target: number;
  currentRegion: GeoData;
  regions: GeoData[];
}

export interface AcceptanceRate {
  current: number;
  trend: number;
}

export interface AcceptanceCountBreakdown {
  label: string;
  value: number;
}

export interface AcceptanceCount {
  current: number;
  trend: number;
  breakdown: AcceptanceCountBreakdown[];
  history: any[];
}

export interface DashboardData {
  kpis: KPI[];
  demographics: Demographic[];
  statusRespons: StatusRespons[];
  offeringProgress: OfferingProgress;
  kpiMitra: KpiMitra;
  mapData: MapData;
  acceptanceRate: AcceptanceRate;
  acceptanceCount: AcceptanceCount;
}

export interface UserAccount {
  nama: string;
  email: string;
  niplama: string;
  role: string;
  tipe: string;
  urlfoto: string;
  nik: string;
}

export interface RekrutmenStat {
  label: string;
  value: string;
}

export interface ProvinceProgress {
  name: string;
  value: number;
}

export interface KabupatenData {
  no: number;
  name: string;
  target: number;
  capaian: string;
  pendaftar: number;
  diterima: number;
}

export interface RekrutmenData {
  stats: RekrutmenStat[];
  provinceProgress: ProvinceProgress[];
  kabupatenData: KabupatenData[];
}