import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  showAlert() {
    Swal.fire({
      title: 'Contact Us',
      text: 'Feel free to reach out to us anytime!',
      icon: 'info',
      confirmButtonText: 'OK'
    });
  }
}
