// type IsNever<T> = T extends never ? true : false; // true 혹은 false 가 될 수 없음.
type IsNever<T> = [T] extends [never] ? true : false;
type IsNever2<T> = { type: T } extends { type: never } ? true : false;

type A1 = IsNever<never>; // true
type A2 = IsNever<true>;
