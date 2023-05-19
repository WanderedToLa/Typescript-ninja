## NEVER

- `never` 는 공집합`(empty set)`
- 타입 매개변수 `T` 와 `union` 이 만나면 분배법칙 실행  
  이때, never 타입은 그 자체로 union 타입을 가짐

- `never` 타입은 공집합으로 취급하기 때문에 분배법칙이 일어나지 않기때문에 `true` 혹은 `false` 가 될수 없음  
  `never` 타입을 검사하기 위한 두가지 방법.

```typescript
type IsNever<T> = [T] extends [never] ? true : false;
type IsNever2<T> = { type: T } extends { type: never } ? true : false;

type A1 = IsNever<never>;
type A2 = IsNever<never>;
```

## 참고링크

- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
