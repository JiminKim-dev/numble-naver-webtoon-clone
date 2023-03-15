interface RouteType {
  id: number;
  key: 'new' | 'daily' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun' | 'end';
  title: string;
}

const WEBTOON_ROUTE: RouteType[] = [
  { id: 0, key: 'new', title: '신작' },
  { id: 1, key: 'daily', title: '매일' },
  { id: 2, key: 'mon', title: '월' },
  { id: 3, key: 'tue', title: '화' },
  { id: 4, key: 'wed', title: '수' },
  { id: 5, key: 'thu', title: '목' },
  { id: 6, key: 'fri', title: '금' },
  { id: 7, key: 'sat', title: '토' },
  { id: 8, key: 'sun', title: '일' },
  { id: 9, key: 'end', title: '완결' },
];

export default WEBTOON_ROUTE;
