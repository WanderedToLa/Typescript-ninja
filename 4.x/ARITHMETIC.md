## 산술 타입

1. 각 숫자의 리터럴 -> 튜플 길이에 매핑
2. 가변 튜플을 이용한 길이 조작
3. 결과 튜플의 길이를 숫자 리터럴에 다시 매핑함.

## 주의사항

- 산술 계산의 기반은 튜플의 길이이기 때문에 자연수만 대응 가능, 음수/분수 개념 X

## 기본 산술 구현방식

- ## Add Type
```typescript
type Add<A extends number, B extends number> = 
    Length<[...BuildTuple<A>, ...BuildTuple<B>]>;
```
하나 길이인 두개의 튜플 생성하고 결합하여 튜플의 길이 결정

- ## Subtract
```typescript
type Subtract<A extends number , B extends number> = 
    BuildTuple<A> extends [...(infer U) , ...BuildTuple<B>]
    ? Length<U>
    : never;
```
`A`가 3일때, 나머지 ...BuildTuple의 길이는 2가 됨, `U` 는 BuildTuple<1>이 됨으로 [any] => Length<any> => 1