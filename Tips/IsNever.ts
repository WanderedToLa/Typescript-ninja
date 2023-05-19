type IsNever<T> = T extends never ? true : false
type IsNever2<T> = { type: T } extends { type: never } ? true : false

type A1 = IsNever<never>
type A2 = IsNever<true>