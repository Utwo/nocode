import { Component, h } from '@stencil/core'

@Component({
  tag: 'app-page1',
  shadow: true,
  styleUrls: ['style.css'],
})
export class Page1 {
  render() {
    return (
      <div class="container">
        <stencil-route-title pageTitle="nocode" />
        <div class="header-site">
          <div class="container01">
            <div class="container02">
              <app-stars></app-stars>
            </div>
          </div>
          <div class="container03"></div>
          <div class="container04"></div>
          <div class="container05">
            <h1 class="thqHeading1 text">AWESOME</h1>
            <h1 class="thqHeading1 text1">nocode/lowcode website builders list</h1>
            <p>A list of Nocode/Lowcode apps for you to build your next great website</p>
          </div>
        </div>
        <div class="main-wrapper">
          <div class="container06"></div>
          <div class="main-site">
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
        </div>
        <div class="github">
          <div class="container07">
            <app-stars></app-stars>
          </div>
          <div class="container08">
            <div class="container09">
              <div class="container10">
                <h2 class="thqHeading2 text3">Contribute on Github</h2>
                <p class="text4">
                  Have a favorite application that it&apos;s not on this list? Open a new issue or a
                  new PR (you only need to edit a JSON file) and help others discover new nodecode
                  tools.
                </p>
                <div class="container11"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="made-in-telepor">
          <div class="container12">
            <div class="container13">
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
          <div class="container14">
            <app-stars></app-stars>
          </div>
          <div class="container15">
            <div class="container16">
              <app-stars></app-stars>
            </div>
            <img src="/assets/playground_assets/teleport-vfmx.svg" class="thqImage image" />
          </div>
        </div>
      </div>
    )
  }
}
