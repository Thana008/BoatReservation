import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutUsComponent {
  showAlert() {
    Swal.fire({
      title: 'About BoatReservation',
      text: 'We offer the best boat reservation services with a variety of boats to choose from!',
      icon: 'info',
      confirmButtonText: 'Got it!'
    });
  }
}
