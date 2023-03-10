import { ResponseItemData } from '@/types/api';

export const MOCK_IMAGE_URL = 'https://avatars.githubusercontent.com/u/85747667?v=4';

export const makeMockWebtoonItem = (num: number) =>
  ({
    mastrId: `${num}`,
    listSeCd: '1',
    listSeCdNm: '웹툰',
    prdctNm: `목데이터${num}`,
    title: `목데이터${num}`,
    subtitl: null,
    edtn: null,
    pictrWritrNm: `그림작가${num}`,
    sntncWritrNm: `글작가${num}`,
    plscmpnIdNm: '',
    orginlTitle: null,
    originClCd: null,
    originClCdNm: null,
    stleClCd: null,
    stleClCdNm: null,
    mainGenreCd: '20',
    mainGenreCdNm: '판타지',
    outline: '어쩌구 스토리',
    isbn: '',
    issn: null,
    setIsbn: '',
    pltfomCd: '151',
    pltfomCdNm: '플랫폼',
    pltfomCmpnyIdNm: '(주)플랫폼',
    ageGradCd: '3',
    ageGradCdNm: '15세 이상',
    pusryBeginDe: '20221123',
    pusryEndDe: '',
    fnshYn: 'N',
    pblcateYn: 'N',
    webtoonPusryYn: 'Y',
    wnpzCareer: '',
    dstrcpIdNm: '',
    pblicteDe: null,
    dtaTyCd: null,
    dtaTyCdNm: null,
    orginlNationCd: 'KOR',
    orginlNationCdNm: '대한민국',
    relDe: null,
    tlviseBeginDe: null,
    tlviseEndDe: null,
    bdcpn: null,
    makr: null,
    distr: null,
    auspc: null,
    mngt: null,
    stndrd: null,
    pgeCo: null,
    wt: null,
    prc: 0,
    eventSeCd: null,
    eventSeCdNm: null,
    cnsleNm: null,
    imageDownloadUrl: MOCK_IMAGE_URL,
  } as ResponseItemData);

export const makeMockWebtoonList = (num: number) => {
  return Array.from({ length: num }, (_, index) => makeMockWebtoonItem(index + 1));
};
export const makeMockWebtoonGridList = (list: ResponseItemData[], columns: number) => {
  const row = Math.ceil(list.length / columns);

  const newList = Array.from({ length: row }, (_, index) => {
    const start = index * columns;
    return list.slice(start, start + columns);
  });

  return newList;
};
