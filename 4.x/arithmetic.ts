// 1번
type Length<T extends any[]> = T extends { length: infer L } ? L : never;

// 2번
type BuildTuple<L extends number, T extends any[] = []> =
    T extends { length: L } ? T : BuildTuple<L, [...T, any]>;

let CheckLength: Length<[number , string , string , boolean]>
let BuildArray: BuildTuple<5>