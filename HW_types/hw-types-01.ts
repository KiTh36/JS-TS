type ISstring<T> = T extends string ? true : false;

type test1 = ISstring<string>;
type test2 = ISstring<number>;
type Test3 = ISstring<string | number>; 
