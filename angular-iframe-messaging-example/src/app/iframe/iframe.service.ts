import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Runnable } from './runnable';

@Injectable()
export class IFrameService {

  execute<T extends Object, S extends Object>( process: Runnable<T, S>, args: T ): Observable<S> {
    return Observable.create( ( observer: Observer<S> ) => {
      try {
        observer.next( process.run( args ) );
      } catch ( error ) {
        observer.error( error );
      }
      observer.complete();
    } );
  }

}
