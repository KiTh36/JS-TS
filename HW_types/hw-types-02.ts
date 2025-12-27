type OnlyNumbers<T> = T extends number ? T : never;

type Test1 = OnlyNumbers<string | number | boolean>;
type Test2 = OnlyNumbers<number | number[]>;

