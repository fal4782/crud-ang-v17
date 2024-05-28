// idle-timeout.service.ts

import { Injectable } from '@angular/core';
import { Subject, Observable, Subscription, interval } from 'rxjs';
import { throttle } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class IdleTimeoutService {
  private idleSubject = new Subject<boolean>();
  private timeout = 600; //seconds
  private lastActivity?: Date;
  private idleCheckinInterval = 10; //seconds
  public idleSubscription?: Subscription;

  constructor() {
    this.resetTimer();
    this.startWatching();
  }

  get idleState(): Observable<boolean> {
    return this.idleSubject.asObservable();
  }

  private startWatching() {
    console.log('start watching');
    this.idleSubscription = interval(this.idleCheckinInterval * 1000)
      .pipe(throttle(() => interval(1000)))
      .subscribe(() => {
        const now = new Date();

        if (
          now.getTime() - this.lastActivity?.getTime()! >
          this.timeout * 1000
        ) {
          this.idleSubject.next(true);
        }
      });
  }

  resetTimer() {
    console.log('reset timer');
    this.lastActivity = new Date();
    this.idleSubject.next(false);
  }

  stopWatching() {
    console.log('stop watching');
    if (this.idleSubscription) {
      this.idleSubscription.unsubscribe();
    }
  }
}
