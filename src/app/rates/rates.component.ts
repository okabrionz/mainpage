import { Component, OnInit } from '@angular/core';
import { $ } from "protractor/built";

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {
  layanan1 = "Pembuatan Company Profile";
  biaya1 = "$500-$3000"

  layanan2 = "Pembuatan Landing Page";
  biaya2 = "$350-$1200"

  layanan3 = "Desain Logo";
  biaya3 = "$50-$250"

  layanan4 = "Jasa SEO (/per Kata Kunci)";
  biaya4 = "Hubungi kami"

  layanan5 = "Optimasi Performa Situs";
  biaya5 = "$50-$250"

  layanan6 = "";
  biaya6 = ""

  layanan7 = "";
  biaya7 = ""

  constructor() { }

  ngOnInit() {
  }

}

