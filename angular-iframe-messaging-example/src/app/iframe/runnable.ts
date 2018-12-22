export interface Runnable<T extends Object, S extends Object> {
  run( args: T ): S;
}
