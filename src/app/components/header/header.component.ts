import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  title: string = 'Angular Test App'
  textColor: string = '';
  color: string = '';

  constructor() {}

  ngOnInit(): void {
    //on load fetch etc in here
  }

  colorChange() {
    this.color = this.generateRandom();
    this.textColor = this.generateRandom(); 
  }

  private generateRandom(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++){
      color += letters[Math.floor(Math.random() * 16)];
    }
      return color;
  }

}
