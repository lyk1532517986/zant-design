import ajax from 'zan-pc-ajax';

export function fetchGoodsList(data) {
  return ajax({
    url: `/api/goods/list.json`,
    method: 'GET',
    data
  });
}
