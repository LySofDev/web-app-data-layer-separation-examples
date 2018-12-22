import { Component, ElementRef, OnInit, OnDestroy, ViewChild } from '@angular/core';

@Component( {
  selector: `iframe-container`,
  styles: [`iframe { height: 0; width: 0; border: none; }`],
  template: `<iframe #iframe></iframe>`
} )
export class IFrameContainerComponent implements OnInit, OnDestroy {

  @ViewChild('iframe') iframe: ElementRef<HTMLIFrameElement>;

  scripts: string[] = [];

  ngOnInit() {
    this.appendCode( 'test', `console.log('Hello, IFrame!')` );
  }

  appendCode( key: string, code: string ) {
    const DOM: Document = this.getIFrameDOM();
    const script: HTMLScriptElement = DOM.createElement( 'script' );
    script.id = key;
    script.type = 'text/javascript';
    script.appendChild( DOM.createTextNode( code ) );
    DOM.getElementsByTagName( 'body' )[0].appendChild( script );
    this.scripts.push( key );
  }

  getIFrameDOM(): Document {
    return this.iframe.nativeElement.contentWindow.document;
  }

  removeCode( key ) {
    const DOM: Document = this.getIFrameDOM();
    const script: HTMLElement = DOM.getElementById( key );
    script.parentElement.removeChild( script );
  }

  ngOnDestroy() {
    this.scripts.forEach( key => this.removeCode( key ) );
  }

}
