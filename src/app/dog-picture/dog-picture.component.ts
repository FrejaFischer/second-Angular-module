import { Component } from '@angular/core';
import { FetchDogService } from '../services/fetch-dog.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dog-picture',
  templateUrl: './dog-picture.component.html',
  styleUrl: './dog-picture.component.scss',
})
export class DogPictureComponent {
  dogPic$ = new BehaviorSubject<any>('');

  constructor(private fetchDogs: FetchDogService) {}

  async ngOnInit() {
    const pic = await this.fetchDogs.fetchData();
    console.log('dog-card', pic);
    this.dogPic$.next(pic);
  }

  reloadWindow() {
    window.location.reload();
  }
}
