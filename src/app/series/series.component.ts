import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series: Array<Serie> = [];
  constructor() { }

  getSeriesList(): Array<Serie> {
    return dataSeries;
  }

  addAvgSeasons() {
    let totalTemporadas = 0;
    this.series.forEach(serie => {
      totalTemporadas += serie.temporadas;
    });
    const avgSeasons = totalTemporadas / this.series.length;
    let pElement = document.getElementById('avg-seasons');
    if (pElement) {
      pElement.innerHTML = 'Promedio de temporadas: ' + avgSeasons;
    }
  }

  ngOnInit() {
    this.series = this.getSeriesList();
    this.addAvgSeasons();
  }

}
