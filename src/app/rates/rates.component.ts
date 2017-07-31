import { Component, OnInit } from '@angular/core';
import { $ } from "protractor/built";

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {
  layanan1 = "Profil Perusahaan";
  biaya1 = "$500 - $3000"

  layanan2 = "Toko Online";
  biaya2 = "$350 - $1200"

  layanan3 = "Landing Page";
  biaya3 = "$150 - $350"

  layanan4 = "Jasa SEO";
  biaya4 = "Hubungi kami"

  layanan5 = "Blog";
  biaya5 = "$100 - $2500"

  layanan6 = "Optimasi Kecepatan Website";
  biaya6 = "$200 - $5000"

  layanan7 = "";
  biaya7 = ""

  constructor() { }

  ngOnInit() {
  }

}

