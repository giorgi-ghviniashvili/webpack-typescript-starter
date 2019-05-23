import {select} from 'd3-selection';

class Chart {
    width: number;
    height: number;
    container: any;
    svg: any;

    constructor (container: string, width: number, height: number) {
        this.width = width;
        this.height = height;
        this.container = select(container);
    }

    renderSvg () {
        this.svg = this.container
            .append('svg')
            .attr('width', this.width)
            .attr('height', this.height);
    }

    addRandomCircles () {
        this.svg.selectAll('circle')
            .data([30, 70, 100])
            .enter()
                .append('circle')
                .attr('r', (d: any) => d)
                .attr('cx', (d: any) => d)
                .attr('cy', (d: any) => d)
                .attr('fill', 'orange')
    }

    render () {
        this.renderSvg();
        this.addRandomCircles();
    }
}

export default Chart;