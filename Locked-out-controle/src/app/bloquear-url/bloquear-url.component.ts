import {Component, ViewChild} from '@angular/core';
import {MatTable} from '@angular/material/table';


export interface PeriodicElement {
  url: string;
  tag: string;
  data: string;
  horario: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {tag: 'Temporario',  url: 'https://www.nike.com.br/', data: '18/12/2024',  horario: '10:00 até 18:00'},
  {tag: 'Permanente',  url: 'https://www.nike.com.br/', data: '- - -',  horario: ' - - - '},
  {tag: 'Temporario',  url: 'https://www.nike.com.br/', data: '18/1/2024',   horario: '10:00 até 18:00'},
  {tag: 'Temporario',  url: 'https://www.nike.com.br/', data: '18/5/2024',  horario: '10:00 até 18:00'},
  {tag: 'Permanente',  url: 'https://www.nike.com.br/', data: '- - -',  horario: ' - - - '},
  {tag: 'Permanente',  url: 'https://www.nike.com.br/', data: '- - -', horario: ' - - - '},
  {tag: 'Temporario',  url: 'https://www.nike.com.br/', data: '14/12/2024', horario: '10:00 até 18:00'},
  {tag: 'Permanente',  url: 'https://www.nike.com.br/', data: '- - -', horario: ' - - - '},
  {tag: 'Permanente',  url: 'https://www.nike.com.br/', data: '- - -',    horario: ' - - - '},
  {tag: 'Temporario',  url: 'https://www.nike.com.br/', data: '17/12/2024',  horario: '10:00 até 18:00'},
];

@Component({
  selector: 'app-bloquear-url',
  templateUrl: './bloquear-url.component.html',
  styleUrls: ['./bloquear-url.component.scss'],
})

export class BloquearUrlComponent {
 
  displayedColumns: string[] = ['tag', 'url', 'data', 'horario'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
}
