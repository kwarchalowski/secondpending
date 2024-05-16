import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-second-pending-element',
  templateUrl: './second-pending-element.component.html',
  styleUrls: ['./second-pending-element.component.scss']
})
export class SecondPendingElementComponent implements OnInit {
  pendingElement: any = null;
  isLoading: boolean = true;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getElements().subscribe({
      next: (data) => {
        let pendingCount = 0;

        for (const element of data) {
          if (element.status === 'pending') {
              pendingCount++;
              if (pendingCount === 2) {
                  this.pendingElement = element;
                  break;
              }
          }
        }

        this.isLoading = false;
        

        if (!this.pendingElement) {
          console.error(`couldn't find second 'pending' element`);
          return;
        }

      },
      error: (error) => {
        console.error(`request failed`, error);
        this.isLoading = false;
      }
    });
  }
}
