import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { IdleTimeoutService } from './services/idle-timeout.service';
import { DialogModule } from 'primeng/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    DialogModule,
    RouterOutlet,
    NavbarComponent,
    DashboardComponent,
    DynamicFormComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'crud-ang';
  idleService = inject(IdleTimeoutService);
  private idleSubscription?: Subscription;

  ngOnInit() {
    this.idleSubscription = this.idleService.idleState.subscribe((isIdle) => {
      if (isIdle) {
        console.log('User is idle');
      } else {
        console.log('User is active');
      }
    });
  }

  ngOnDestroy(){
    if(this.idleSubscription){
        this.idleSubscription.unsubscribe()
    }
  }

  onUserAction(){
    this.idleService.resetTimer()
  }


}
