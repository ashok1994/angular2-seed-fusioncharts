import {Component} from '@angular/core';

@Component({
  selector: 'chart',
  styleUrls: ['./fusioncharts.component.css'],
  templateUrl: './fusioncharts.component.html'
})
export class ChartsComponent {
	dataSource: Object;

	constructor() {
		this.dataSource = {
			chart: {},
			data: [
				{value: 500},
				{value: 400},
				{value: 300},
				{value: 500}
			]
		}
	}

}
