import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription, interval, Observable, Subscriber, PartialObserver, TeardownLogic } from 'rxjs';
import { map, filter } from 'rxjs/operators'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    const customInternalObservable = new Observable<number>((observer)=>{
      let count = 0;
      setInterval(()=>{
        observer.next(count);
        if(count === 5){
          observer.complete();
        }
        if(count > 3){
          observer.error(new Error('Count is greater 3!'));
        }
        count++
      },1000);
    });

    this.firstObsSubscription = customInternalObservable.pipe(filter(data => {
      return data > 0;
    }), map((data:number)=>{
      return 'Round: ' + (data + 1);
    }))
    .subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error.message);
    }, () => {
      console.log("Completed!");
    });


  }


  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}
