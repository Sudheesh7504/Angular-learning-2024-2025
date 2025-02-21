import { Component, ElementRef, ViewChild } from '@angular/core';
import { delay, from, fromEvent, map, merge, of } from 'rxjs';

@Component({
  selector: 'app-realtime-notifications',
  templateUrl: './realtime-notifications.component.html',
  styleUrl: './realtime-notifications.component.scss'
})
export class RealtimeNotificationsComponent {
  @ViewChild('btn') btnRef!: ElementRef;
  serverNotifications: any;
  manualNotifications: any;
  notifications: any;
  ngOnInit() {
    this.serverNotifications = of(['new friend request', 'new voice message received from whatsapp',
      'new notification from instagram', 'someone liked your reel']).pipe(
        delay(1000)
      );
  }

  ngAfterViewInit() {
    this.manualNotifications = fromEvent(this.btnRef.nativeElement, 'click').pipe(
      map(() => 'manual notifactions')
    );

    merge(this.manualNotifications, this.serverNotifications).subscribe((notifications) => {
      if (Array.isArray(notifications)) {
        this.notifications = [...notifications];
      } else {
        this.notifications.push(notifications);
      }
    })
  }
}
