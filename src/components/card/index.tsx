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
  @Prop() website: string;
  render() {
    return (
      <div class="card-wrapper">
        <div class="decorate" />
        <div class="card">
          <span class="text">{this.price}</span>
          <h2 class="thqHeading3 text1">
            <a href={this.website} target="_blank" rel="noopener nofollow">
              {this.name}
            </a>
          </h2>
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
