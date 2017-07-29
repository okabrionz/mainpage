import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  ptitle1 = 'Rachmat.co.id';
  ptitle2 = 'ManagedVM.com';
  ptitle3 = 'Androholic.com';
  ptitle4 = 'WebHost.co.id';
  ptitle5 = 'JasaTulis.com';
  ptitle6 = 'Jeghi.com';

  pdesc1 = 'Pemilik Roti Rachmat ingin menambah omzet dan ingin mengembangkan bisnisnya dengan mempromosikannya ke seluruh Indonesia menggunakan situs resmi rachmat.co.id.';
  pdesc2 = 'Landing Page Domain Managed Virtual Machine';
  pdesc3 = 'Komunitas, Spesifikasi, Solusi, Tips & Tricks Android Indonesia.';
  pdesc4 = 'Layanan Web Hosting Indonesia';
  pdesc5 = 'Jasa Penulis Artikel profesional bahasa Indonesia dan Inggris.';
  pdesc6 = 'Solusi Konstruksi Baja Indonesia.';

  pimg1 = 'https://cdn.okabrionz.com/assets/img/portfolio/rachmat.jpg';
  pimg2 = 'https://cdn.okabrionz.com/assets/img/portfolio/managedvm.jpg';
  pimg3 = 'https://cdn.okabrionz.com/assets/img/portfolio/androholic.jpg';
  pimg4 = 'https://cdn.okabrionz.com/assets/img/portfolio/webhost.jpg';
  pimg5 = 'https://cdn.okabrionz.com/assets/img/portfolio/jasatulis.jpg';
  pimg6 = 'https://cdn.okabrionz.com/assets/img/portfolio/jeghi.jpg';

  pmdate1 = '';
  pmdate2 = '';
  pmdate3 = '';
  pmdate4 = '';
  pmdate5 = '';
  pmdate6 = '';

  pmservice1 = '';
  pmservice2 = '';
  pmservice3 = '';
  pmservice4 = '';
  pmservice5 = '';
  pmservice6 = '';


  constructor() { }

  ngOnInit() {
  }

}
