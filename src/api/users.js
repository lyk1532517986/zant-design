import ajax from 'zan-pc-ajax';
export function fetchUsersList(data) {
  return ajax({
    url: `/api/users/list.json`,
    method: 'GET',
    data
  });
}
