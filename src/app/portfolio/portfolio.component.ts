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
  ptitle6 = 'Sirnarasa';

  pdesc1 = 'Pemilik Roti Rachmat ingin menambah omzet dan ingin mengembangkan bisnisnya dengan mempromosikannya ke seluruh Indonesia menggunakan situs resmi rachmat.co.id.';
  pdesc2 = 'Jasa Manage Virtual Machine';
  pdesc3 = 'Blog tentang Android dan Teknologi terbaru.';
  pdesc4 = 'Layanan Web Hosting Indonesia';
  pdesc5 = 'Sekolah Tinggi Ilmu Dakwah Sirnarasa.';
  pdesc6 = 'Pesantren Peradaban Dunia Sirnarasa.';

  psicon1 = 'assets/img/portfolio/rachmat-s.jpg';
  psicon2 = 'assets/img/portfolio/managedvm-s.jpg';
  psicon3 = 'assets/img/portfolio/circus.png';
  psicon4 = 'assets/img/portfolio/game.png';
  psicon5 = 'assets/img/portfolio/safe.png';
  psicon6 = 'assets/img/portfolio/submarine.png';

  pimg1 = 'assets/img/portfolio/rachmat.png';
  pimg2 = 'assets/img/portfolio/managedvm-og.jpg';
  pimg3 = 'assets/img/portfolio/circus.png';
  pimg4 = 'assets/img/portfolio/game.png';
  pimg5 = 'assets/img/portfolio/safe.png';
  pimg6 = 'assets/img/portfolio/submarine.png';


  constructor() { }

  ngOnInit() {
  }

}
