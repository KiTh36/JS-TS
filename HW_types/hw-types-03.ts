type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
type Test_1 = UnwrapPromise<Promise<number>>;
type Test_2 = UnwrapPromise<string>;



