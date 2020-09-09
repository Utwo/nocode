import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-card',
  shadow: true,
  styleUrls: ['style.css'],
})
export class Card {
  @Prop() name: string;
  @Prop() description: string;
  @Prop() price: string;
  @Prop() tags: string[];
  render() {
    return (
      <div class="card-wrapper">
        <div class="decorate" />
        <div class="card">
          <span class="text">{this.price}</span>
          <h3 class="thqHeading3 text1">{this.name}</h3>
          <div class="container"></div>
          <p>{this.description}</p>
          <div class="container1">
            {this.tags.map(tag => (
              <span class="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
