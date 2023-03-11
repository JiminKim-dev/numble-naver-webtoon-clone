export interface ResponseItemData {
  mastrId: string;
  listSeCd: string;
  listSeCdNm: string;
  prdctNm: string;
  title: string;
  subtitl: string | null;
  edtn: string | null;
  pictrWritrNm: string;
  sntncWritrNm: string;
  plscmpnIdNm: string;
  orginlTitle: string | null;
  originClCd: string | null;
  originClCdNm: string | null;
  stleClCd: string | null;
  stleClCdNm: string | null;
  mainGenreCd: string;
  mainGenreCdNm: string;
  outline: string;
  isbn: string;
  issn: string | null;
  setIsbn: string;
  pltfomCd: string;
  pltfomCdNm: string;
  pltfomCmpnyIdNm: string;
  ageGradCd: string;
  ageGradCdNm: string;
  pusryBeginDe: string;
  pusryEndDe: string;
  fnshYn: string;
  pblcateYn: string;
  webtoonPusryYn: string;
  wnpzCareer: string;
  dstrcpIdNm: string;
  pblicteDe: string | null;
  dtaTyCd: string | null;
  dtaTyCdNm: string | null;
  orginlNationCd: string;
  orginlNationCdNm: string;
  relDe: string | null;
  tlviseBeginDe: string | null;
  tlviseEndDe: string | null;
  bdcpn: string | null;
  makr: string | null;
  distr: string | null;
  auspc: string | null;
  mngt: string | null;
  stndrd: string | null;
  pgeCo: string | null;
  wt: string | null;
  prc: number;
  eventSeCd: string | null;
  eventSeCdNm: string | null;
  cnsleNm: string | null;
  imageDownloadUrl: string;
}

interface ResponseResult {
  viewItemCnt: number;
  listSeCd: string;
  pageNo: number;
  resultState: string;
  resultMessage: string;
  totalCount: number;
}

export interface ResponseAPI {
  result: ResponseResult;
  itemList: ResponseItemData[];
}
