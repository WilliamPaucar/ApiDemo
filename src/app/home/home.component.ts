import { Component, OnInit  } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
data:any[]=[];
constructor(private dataService:ApiService) {}

ngOnInit() {
  this.dataService.getData().subscribe(
    (data) => {
      this.data = data;
      console.log('Datos obtenidos:', this.data);
    },
    (error) => {
      console.error('Error al obtener datos:', error);
    }
  );
}
}


