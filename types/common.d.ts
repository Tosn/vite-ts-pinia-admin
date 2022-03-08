interface ObjAny {
  [propName: string]: any
}

type Options <T = number> = {
  label: string;
  value: T
}[]

interface MenuTag {
  name: string;
  canClose?: boolean;
  path: string
}

// axios response type
type AxiosResponseType = {
  code: number,
  data: any,
  msg?: string
}
