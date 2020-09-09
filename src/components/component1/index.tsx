import { Component, h } from '@stencil/core'

@Component({
  tag: 'app-component1',
  shadow: true,
  styleUrls: ['style.css'],
})
export class Component1 {
  render() {
    return (
      <div class="card">
        <span class="text">FREE</span>
        <h3 class="thqHeading3 text1">TeleportHQ</h3>
        <div class="container"></div>
        <p>
          Create high-definition prototypes visually, generate the code in real-time, and deploy
          your user interface with one click
        </p>
        <div class="container1">
          <span class="text3">browser based</span>
          <span class="text4">open source</span>
          <span class="span">hosting support</span>
          <span class="span1">export code</span>
        </div>
      </div>
    )
  }
}
