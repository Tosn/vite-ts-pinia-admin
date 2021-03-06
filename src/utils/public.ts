export const checkObjectInList = (item: ObjAny, list: ObjAny[]): boolean => {
  // 验证对象是否在一个list之中
  const sItem = JSON.stringify(item);
  for (let i = 0; i < list.length; i += 1) {
    if (JSON.stringify(list[i]) === sItem) {
      return true;
    }
  }
  return false;
};

// 统一延迟方法
export const fnDelay = (fn: Function, delay: number = 500) => {
  setTimeout(fn, delay)
}

export default {};
