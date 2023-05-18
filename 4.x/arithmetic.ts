// 1번
type Length<T extends any[]> = T extends { length: infer L } ? L : never;

// 2번
type BuildTuple<L extends number, T extends any[] = []> =
    T extends { length: L } ? T : BuildTuple<L, [...T, any]>;

let CheckLength: Length<[number , string , string , boolean]>
let BuildArray: BuildTuple<5>

type Add<A extends number, B extends number> =
    Length<[...BuildTuple<A>, ...BuildTuple<B>]>;

type Subtract<A extends number , B extends number> =
    BuildTuple<A> extends [...(infer U) , ...BuildTuple<B>]
        ? Length<U>
        : never;

type a = Subtract<0,0> // 0
let five: Add<3, 2>; // `5`
let one: Subtract<3, 2>; // `1`