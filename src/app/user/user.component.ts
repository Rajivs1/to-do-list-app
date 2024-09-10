import { Component,Input, Output, EventEmitter, output } from '@angular/core'; //computed and signal also get removed from import
import { type User } from './user.model'
// import { DUMMY_USERS } from '../dummy-users';
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type User = {
  //  id: string;
  //  avatar: string;
  //  name: string;
// };


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //  selectedUser = signal(DUMMY_USERS[randomIndex]);
  //  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }
    // @Input({required: true}) id!: string;
    // @Input({required: true}) avatar!: string;
    // @Input({required: true}) name!: string;

    //--->use the concept of objects here

    @Input({required: true }) user!: User;
    @Input({required: true }) selected!: boolean;
    @Output() select = new EventEmitter<string>();
  
    // select = output<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar;
  // })

   get imagePath() {
     return 'assets/users/' + this.user.avatar;
   }
  onSelectUser() {
    this.select.emit(this.user.id); 
  }

}
