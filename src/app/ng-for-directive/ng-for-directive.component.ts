import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-directive',
  templateUrl: './ng-for-directive.component.html',
  styleUrl: './ng-for-directive.component.scss'
})
export class NgForDirectiveComponent {
  data: any = ['a','b','c','d']

  movies = [
   { title: 'RRR', director: 'S. S. Rajamouli', releaseYear: 2022, genre: 'Action/Drama' },
   { title: 'Pushpa: The Rise', director: 'Sukumar', releaseYear: 2021, genre: 'Action/Drama' },
   { title: 'Baahubali: The Beginning', director: 'S. S. Rajamouli', releaseYear: 2015, genre: 'Epic/Action' },
   { title: 'Baahubali 2: The Conclusion', director: 'S. S. Rajamouli', releaseYear: 2017, genre: 'Epic/Action' },
   { title: 'Ala Vaikunthapurramuloo', director: 'Trivikram Srinivas', releaseYear: 2020, genre: 'Action/Drama' },
   { title: 'Arjun Reddy', director: 'Sandeep Reddy Vanga', releaseYear: 2017, genre: 'Romance/Drama' },
   { title: 'Geetha Govindam', director: 'Parasuram', releaseYear: 2018, genre: 'Romantic Comedy' },
   { title: 'Eega', director: 'S. S. Rajamouli', releaseYear: 2012, genre: 'Fantasy/Drama' },
   { title: 'Magadheera', director: 'S. S. Rajamouli', releaseYear: 2009, genre: 'Fantasy/Action' },
   { title: 'Sarileru Neekevvaru', director: 'Anil Ravipudi', releaseYear: 2020, genre: 'Action/Comedy' }
 ];

 showLoader: boolean  = true;

 ngOnInit(){
  setTimeout(() => {
    this.showLoader = false;
  }, 5000)
 }
 
}
