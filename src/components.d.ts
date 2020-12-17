/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppCard {
        "description": string;
        "name": string;
        "price": string;
        "tags": string[];
        "website": string;
    }
    interface AppHome {
    }
    interface AppRoot {
    }
    interface AppStars {
    }
}
declare global {
    interface HTMLAppCardElement extends Components.AppCard, HTMLStencilElement {
    }
    var HTMLAppCardElement: {
        prototype: HTMLAppCardElement;
        new (): HTMLAppCardElement;
    };
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppStarsElement extends Components.AppStars, HTMLStencilElement {
    }
    var HTMLAppStarsElement: {
        prototype: HTMLAppStarsElement;
        new (): HTMLAppStarsElement;
    };
    interface HTMLElementTagNameMap {
        "app-card": HTMLAppCardElement;
        "app-home": HTMLAppHomeElement;
        "app-root": HTMLAppRootElement;
        "app-stars": HTMLAppStarsElement;
    }
}
declare namespace LocalJSX {
    interface AppCard {
        "description"?: string;
        "name"?: string;
        "price"?: string;
        "tags"?: string[];
        "website"?: string;
    }
    interface AppHome {
    }
    interface AppRoot {
    }
    interface AppStars {
    }
    interface IntrinsicElements {
        "app-card": AppCard;
        "app-home": AppHome;
        "app-root": AppRoot;
        "app-stars": AppStars;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-card": LocalJSX.AppCard & JSXBase.HTMLAttributes<HTMLAppCardElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-stars": LocalJSX.AppStars & JSXBase.HTMLAttributes<HTMLAppStarsElement>;
        }
    }
}
