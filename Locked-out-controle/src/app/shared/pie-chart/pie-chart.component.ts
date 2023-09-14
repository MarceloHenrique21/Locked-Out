import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements AfterViewInit {
  @ViewChild('svg')
  svg!: ElementRef<SVGSVGElement>

  ngAfterViewInit(): void {
    console.log(this.svg)
    const circle =
      this.svg.nativeElement.querySelector("circle")

    console.log(circle?.getTotalLength())
    if (circle) { 
      circle.style.strokeDasharray = 20 + " " + 156
    }

  }
}
