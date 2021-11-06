import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-medias',
  templateUrl: './medias.component.html',
  styleUrls: ['./medias.component.scss'],
})
export class MediasComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  // GoToTheLeft = (e: any) => {
  //   const carrouselLanguages = document.getElementById(
  //     e.target.parentElement.parentElement.classList[0]
  //   );

  //   carrouselLanguages.scrollLeft -= carrouselLanguages.offsetWidth;
  // };
  // GoToTheRight = async (e: any) => {
  //   const carrouselLanguages = document.getElementById(
  //     e.target.parentElement.parentElement.classList[0]
  //   );
  //   carrouselLanguages.scrollLeft += carrouselLanguages.offsetWidth;
  // };
}
