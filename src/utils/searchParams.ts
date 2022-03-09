import { getTags } from '@/api';

interface OptionItem <T = number> {
  label: string;
  value: T
}

type TypeValue = 'input'| 'password' | 'select' | 'date'

export interface SearchItem {
  key: string;
  label: string;
  type?: TypeValue;
  options?: OptionItem[] | Function;
  placeholder?: string;
  rules?: ObjAny[]
}

export const goodsParams:SearchItem[] = [
  {
    key: 'url',
    label: 'url',
    type: 'input',
    rules: [
      { required: true, message: '请输入url' },
    ],
  },
  {
    key: 'status',
    label: '发布状态',
    type: 'select',
    options: [
      { label: '已发布', value: 1 },
      { label: '微发布', value: 2 },
    ],
  },
  {
    key: 'tag',
    label: '标签',
    type: 'select',
    options: async () => {
      const ret = await getTags().then((res: any) => res.list);
      return ret;
    },
  },
];
