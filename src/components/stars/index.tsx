import { Component, h } from '@stencil/core'

@Component({
  tag: 'app-stars',
  shadow: true,
  styleUrls: ['style.css'],
})
export class Stars {
  render() {
    return (
      <div class="container">
        <img src="/assets/playground_assets/star.svg" class="thqImage image" />
        <img src="/assets/playground_assets/star.svg" class="thqImage image1" />
        <img src="/assets/playground_assets/star.svg" class="thqImage image2" />
        <img src="/assets/playground_assets/star.svg" class="thqImage image3" />
        <img src="/assets/playground_assets/ellipse.svg" class="thqImage image4" />
        <img src="/assets/playground_assets/ellipse.svg" class="thqImage image5" />
        <img src="/assets/playground_assets/ellipse.svg" class="thqImage image6" />
        <img src="/assets/playground_assets/ellipse.svg" class="thqImage image7" />
        <img src="/assets/playground_assets/ellipse.svg" class="thqImage image8" />
      </div>
    )
  }
}
