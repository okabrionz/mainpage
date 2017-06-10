import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  ptitle1 = 'Roti Rachmat';
  ptitle2 = 'Managed Virtual Machine';
  ptitle3 = 'Androholic';
  ptitle4 = 'Web Host Indonesia';
  ptitle5 = 'STID Sirnarasa';
  ptitle6 = 'Pasantren Sirnarasa';

  pdesc1 = 'Pemilik Roti Rachmat ingin menambah omzet dan ingin mengembangkan bisnisnya dengan mempromosikannya ke seluruh Indonesia menggunakan situs resmi rachmat.co.id.';
  pdesc2 = 'Jasa Manage Virtual Machine';
  pdesc3 = 'Blog tentang Android dan Teknologi terbaru.';
  pdesc4 = 'Layanan Web Hosting Indonesia';
  pdesc5 = 'Sekolah Tinggi Ilmu Dakwah Sirnarasa.';
  pdesc6 = 'Pesantren Peradaban Dunia Sirnarasa.'

  constructor() { }

  ngOnInit() {
  }

}
