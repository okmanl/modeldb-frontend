export type URL = string;
export type Milliseconds = number;
export type Timestamp = Milliseconds;
export type RecordValues<R extends Record<any, any>> = R[keyof R];

export type NonFunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? never : K
}[keyof T];

export type DeepPartial<T> = T extends any[]
  ? IDeepPartialArray<T[number]>
  : T extends object
  ? DeepPartialObject<T>
  : T;
export interface IDeepPartialArray<T> extends Array<DeepPartial<T>> {}
export type DeepPartialObject<T> = {
  readonly [P in NonFunctionPropertyNames<T>]?: DeepPartial<T[P]>
};
