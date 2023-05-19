## NEVER

- `never` 는 공집합`(empty set)`
- 타입 매개변수 `T` 와 `union` 이 만나면 분배법칙 실행 여기서 never 타입은 그 자체로 union 타입을 가짐
    
```typescript
type IsNever<T> = [T] extends [never] ? true : false
type A1 = IsNever<never>
```