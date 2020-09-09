import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <main>
          <stencil-router>
            <stencil-route-switch>
              <stencil-route url="/" exact component="app-home"></stencil-route>
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
