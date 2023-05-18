# Typescript using set Theory

- 함수형 프로그래밍의 기본은 타입 `type-class`는 집합이고 `instance`는 원소  
  또한 타입은 함수 시그니쳐 까지 포함한다.

- 타입은 단지 값의 집합이자 정렬되지 않은 개체의 모음.  
  만약 `사과`와 `바나나` 그리고 과일을 넣을 수 있는 `가방(집합)` 이 있다면 총 4개의 집합 생성 가능.

  - `사과`만 있는 가방 {'사과'}
  - `바나나`만 있는 가방 {'바나나'}
  - `사과`,`바나나` 두 가지 다 있는 경우 -> 전체집합 `Universe`
  - 비어있는 경우 -> 공집합 `Empty Set`

- 모든 집합은 자신의 서브셋이고 {}는 다른 집합 S의 서브셋이다.  
  또한 집합 A의 모든 요소가 B에도 있는 경우

  - `A`: {'사과'}
  - `B`: {'사과' , '바나나'}

  A 는 B의 서브셋이다.

- 위와 같은 이유로 타입은 값의 집합으로 생각할 수 있고

  ```typescript
  A extends B
  ```

  타입스크립트 공식문서의 설명과 같이 `A extends B`는 `A 는 B의 서브타입`으로 읽을 수 있다.  
  유니온 타입과 인터섹션 타입은 합집합과 교집합이면서  
  `Exclude<A , B>` 는 다른언어에서의 `difference`연산으로 생각한다.

  `never` 타입의 경우 공집합으로 보면된다.

  ```text
  1. A & never = never
  2. A | never = A
  3. Exclude<0 , 0> = never
  ```

## Conclusion

- 타입 `A` 의 서브타입은 `A` 의 서브셋(부분 집합) `A`의 슈퍼타입은 슈퍼셋(상위집합)이다.
- 타입 넓히기를 허용하여 타입을 넓게 만들수 있다.
- 타입을 좁히면 특정값을 제거 할 수 있다.

## 참고 링크

- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [Generic Constraints](https://www.typescriptlang.org/docs/handbook/2/gen)
