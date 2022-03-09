import Mock from 'mockjs';
// http://mockjs.com/examples.html
export default [
  {
    url: '/mock/user',
    method: 'GET',
    response: () => ({
      code: 0,
      message: 'ok',
      data: Mock.mock({
        id: '@id',
        name: '@name',
        email: '@email',
      }),
    }),
  },
  {
    url: '/mock/tags',
    method: 'GET',
    response: () => ({
      code: 0,
      message: 'ok',
      data: Mock.mock({
        'list|6': [{
          label: '@word(3)',
          value: '@increment',
        }],
      }),
    }),
  },
];
