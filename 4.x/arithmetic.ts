// 1번
type Length<T extends any[]> = T extends { length: infer L } ? L : never;

// 2번
type BuildTuple<L extends number, T extends any[] = []> = T extends {
  length: infer L;
}
  ? T
  : BuildTuple<L, [...T, any]>;
