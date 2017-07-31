import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Jasa Pembuatan Website Super Cepat';
  desc = 'Melayani Pembuatan Website untuk Landing Page, Presentasi, Profil Perusahaan, Toko Online, Portfolio, dan Blog.'

  constructor() { }

  ngOnInit() {
  }

}
