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
  isDesp: boolean = false;

  message: string = 'Can I pet that dog?';

  constructor(private fetchDogs: FetchDogService) {}

  ngOnInit() {
    this.fetchDog();
  }

  async fetchDog() {
    const pic = await this.fetchDogs.fetchData();
    console.log('dog-card', pic);
    this.dogPic$.next(pic);
  }

  reloadWindow() {
    window.location.reload();
  }

  toggleDesp() {
    this.isDesp = !this.isDesp;
  }
  changeMessage() {
    this.message = this.message.replace('o', 'oo');
  }
}
