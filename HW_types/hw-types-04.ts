type User = {
    id: number;
    name: string;
    email: string;
};

type Patch<T> = {
  [K in keyof T]?: T[K];
};

type UserPatch = Patch<User>;

const p1: UserPatch = {}; 
const p2: UserPatch = { name: "Ivan" }; 
const p3: UserPatch = { email: "a@b.com" }; 

