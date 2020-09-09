import { Component, h } from '@stencil/core'

@Component({
  tag: 'app-page',
  shadow: true,
  styleUrls: ['style.css'],
})
export class Page {
  render() {
    return (
      <div class="container">
        <stencil-route-title pageTitle="Page - nocode" />
        <div class="header">
          <div class="container1">
            <h1 class="thqHeading1 text">AWESOME</h1>
            <h1 class="thqHeading1 text1">nocode/lowcode website builders list</h1>
            <p>A list of Nocode/Lowcode apps for you to build your next great website</p>
          </div>
        </div>
        <div class="container2">
          <div class="list">
            <app-component1></app-component1>
            <app-component1></app-component1>
            <app-component1></app-component1>
            <app-component1></app-component1>
            <app-component1></app-component1>
            <app-component1></app-component1>
            <app-component1></app-component1>
            <app-component1></app-component1>
            <app-component1></app-component1>
            <app-component1></app-component1>
            <app-component1></app-component1>
            <app-component1></app-component1>
          </div>
        </div>
        <div class="github">
          <div class="container3">
            <h2 class="thqHeading2 text3">Contribute on Github</h2>
            <p class="text4">
              Have a favorite application that it&apos;s not on this list? Open a new issue or a new
              PR (you only need to edit a JSON file) and help others discover new nodecode tools.
            </p>
          </div>
        </div>
        <div class="made-in-telepor">
          <div class="container4">
            <div>
              <img src="/assets/playground_assets/teleport-vfmx.svg" class="thqImage image" />
            </div>
            <div>
              <h2 class="thqHeading2 text5">Made in Teleport</h2>
              <p class="text6">
                Hello, I&apos;m Utwo, a web developer working on TeleportHQ. I collected a bunch of
                nocode/lowcode website builders in Notion for quite some time and I wanted to share
                that with you. And what is a better way to share that then with a website build with
                one of the platforms from the list?
              </p>
              <p class="text7">
                This website was made in Teleport platform and exported to code in Stencil
                framework. After some minor tweaks, the code was pushed to Github and deployed to
                Vercel.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
