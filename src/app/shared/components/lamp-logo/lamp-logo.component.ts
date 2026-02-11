import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lamp-logo',
  standalone: true,
  template: `
    <svg [attr.width]="width" [attr.height]="height" [attr.viewBox]="viewBox" xmlns="http://www.w3.org/2000/svg">
      <!-- Hanging cord -->
      <line [attr.x1]="centerX" y1="0" [attr.x2]="centerX" [attr.y2]="cordEnd" [attr.stroke]="color" stroke-width="2"/>

      <!-- Lampshade body -->
      <path [attr.d]="shadePath" [attr.fill]="color"/>

      <!-- Scalloped bottom edge -->
      <path [attr.d]="scallopPath" [attr.fill]="color"/>
    </svg>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class LampLogoComponent {
  @Input() width: number = 200;
  @Input() height: number = 120;
  @Input() color: string = '#2C3E50';

  get viewBox(): string {
    return `0 0 ${this.width} ${this.height}`;
  }

  get centerX(): number {
    return this.width / 2;
  }

  get cordEnd(): number {
    return this.height * 0.25;
  }

  get shadePath(): string {
    const topY = this.cordEnd;
    const bottomY = this.height * 0.75;
    const topWidth = this.width * 0.6;
    const bottomWidth = this.width * 0.9;
    const topLeft = (this.width - topWidth) / 2;
    const topRight = topLeft + topWidth;
    const bottomLeft = (this.width - bottomWidth) / 2;
    const bottomRight = bottomLeft + bottomWidth;

    return `M ${topLeft} ${topY} L ${topRight} ${topY} L ${bottomRight} ${bottomY} L ${bottomLeft} ${bottomY} Z`;
  }

  get scallopPath(): string {
    const y = this.height * 0.75;
    const bottomWidth = this.width * 0.9;
    const startX = (this.width - bottomWidth) / 2;
    const endX = startX + bottomWidth;
    const scallops = 9;
    const scallopWidth = bottomWidth / scallops;
    const dip = this.height * 0.083;

    let path = `M ${startX} ${y}`;
    for (let i = 0; i < scallops; i++) {
      const x1 = startX + (i + 0.5) * scallopWidth;
      const x2 = startX + (i + 1) * scallopWidth;
      path += ` Q ${x1} ${y + dip}, ${x2} ${y}`;
    }
    path += ` L ${endX} ${y} L ${startX} ${y} Z`;

    return path;
  }
}
