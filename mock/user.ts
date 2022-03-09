export default [
  {
    url: '/mock/user',
    method: 'GET',
    response: () => ({
      code: 0,
      message: 'ok',
      data: {
        name: 'Tosn',
        email: 'Tson@webeye.cn',
      },
    }),
  },
];
