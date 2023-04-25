# Getting Started fp-ts
- 

## Eq
  -  `Eq`의 선언

```typescript
  const eqNumber: Eq<number> = {
      equals: (x, y) => x === y,
  };
```
  
`Eq`의 규칙은 아래의 3가지 조건을 만족함.   
1. 반사성(Reflexivity): `A`의 모든 `x`에 대하여 `equals(x, x) === true`를 만족한다.

2. 대칭(Symmetry): `A`의 모든 `x`, `y`에 대하여 `equals(x, y) === equals(y, x)`를 만족한다.

3. 이동성(Transitivity): `A`의 모든 `x`, `y`, `z`에 대하여 `equals(x, y) === true`이고 `equals(y, z) === true`라면 `equals(x, z) === true`를 만족한다.