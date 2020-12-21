import { Component, h } from '@stencil/core';
import awesomeList from '../../awesome-list.json';

@Component({
  tag: 'app-home',
  shadow: false,
  scoped: false,
  styleUrl: 'style.css',
})
export class Home {
  render() {
    return (
      <div class="container">
        <stencil-route-title pageTitle="nocode" />
        <header class="header-site">
          <div class="container01">
            <div class="container02">
              <app-stars></app-stars>
            </div>
          </div>
          {
            //@ts-ignore
            <div class="container03 xyz-in" xyz="fade left-5 big-3 origin-left duration-20 delay-10"></div>
          }
          {
            //@ts-ignore
            <div class="container04 xyz-in" xyz="fade right-5 big-3 origin-right duration-15 delay-10"></div>
          }
          {
            //@ts-ignore
            <div class="container05" xyz="fade down-3 small-3 stagger-2 delay-2">
              <div class="heading-wrapper xyz-in">
                <h1 class="thqHeading1 text text-gradient">AWESOME</h1>
              </div>
              <h1 class="thqHeading1 text1 xyz-in">nocode/lowcode website builders list</h1>
              <p class="xyz-in">A list of Nocode/Lowcode apps for your next great website</p>
            </div>
          }
        </header>
        <main class="main-wrapper">
          <div class="container06"></div>
          <div class="main-site">
            {
              //@ts-ignore
              <div class="list" xyz="fade stagger-2 down delay-10">
                {awesomeList.map(element => (
                  <app-card class="xyz-in" name={element.name} description={element.description} price={element.price} tags={element.tags}></app-card>
                ))}
              </div>
            }
          </div>
        </main>
        <section class="github">
          <div class="container07">
            <app-stars></app-stars>
          </div>
          <div class="container08">
            <div class="container09">
              <div class="container10">
                <h2 class="thqHeading2 text3">Contribute on Github</h2>
                <p class="text4">
                  Have a favorite application that it&apos;s not on this list? <a href="https://github.com/Utwo/nocode/issues/new">Open a new issue</a> or{' '}
                  <a href="https://github.com/Utwo/nocode/pulls">a new PR</a> (you only need to edit a JSON file) and help others discover new nodecode tools.
                </p>
                <div class="container11"></div>
              </div>
            </div>
          </div>
        </section>
        <footer class="made-in-telepor">
          <div class="container12">
            <div class="container13">
              <h2 class="thqHeading2 text5">Made in Teleport</h2>
              <p class="text6">
                Hello, I&apos;m{' '}
                <a href="https://twitter.com/Utwoo">
                  <img src="/assets/playground_assets/utwo.webp" alt="utwo logo" width="20" /> Utwo
                </a>
                , a web developer working on <a href="https://teleporthq.io">TeleportHQ</a>. I collected a bunch of nocode/lowcode website builders in Notion for quite some time
                and I wanted to share that with you. And what is a better way to share that then with a website build with one of the platforms from the list? Meta right?
              </p>
              <p class="text7">
                This website was made in Teleport platform and exported to code in <a href="https://stenciljs.com">Stencil</a> framework. After some minor tweaks, the code was
                pushed to <a href="https://github.com/Utwo/nocode">Github</a> and deployed to <a href="https://vercel.com">Vercel</a>.
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
            <img src="/assets/playground_assets/teleport-vfmx.svg" alt="teleport logo" class="thqImage image" />
          </div>
        </footer>
      </div>
    );
  }
}
