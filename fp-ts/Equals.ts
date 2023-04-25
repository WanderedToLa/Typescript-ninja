import { Eq } from "fp-ts/Eq";

export const eqNumber: Eq<number> = {
  equals: (x, y) => x === y,
};

// 요소가 배열에 있는지 검사
export function elem<A>(E: Eq<A>): (a: A , as: Array<A>) => boolean {
  return (a , as) => as.some(item => E.equals(item , a))
}