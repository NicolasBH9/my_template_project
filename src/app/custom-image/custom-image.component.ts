import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-image',
  templateUrl: './custom-image.component.html',
  styleUrls: ['./custom-image.component.scss']
})
export class CustomImageComponent {

  imageUrl = 
  "https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_noticia__medium__webp/public/media/2022/02/17/dia_internacional_gato_p_jpg.webp";

  constructor(){}

  ngOnInit():void{}
}
