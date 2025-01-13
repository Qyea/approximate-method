import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { GlobalService } from '../../data/services/global.service';

declare global {
  interface Window {
    MathJax?: any;
  }
}

@Component({
  selector: 'mathjax',
  templateUrl: './mathjax.component.html',
  styleUrls: ['./mathjax.component.css'],
})
export class MathjaxComponent implements OnInit, OnChanges {
  @Input() content: string = '';

  mathJaxObject: any;

  constructor(public gs: GlobalService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['content'] && changes['content'].currentValue) {
      this.renderMath();
    }
  }

  renderMath() {
    this.mathJaxObject = this.gs.nativeGlobal()?.MathJax || window.MathJax;

    if (!this.mathJaxObject) {
      console.warn('MathJax is not loaded.');
      return;
    }

    setTimeout(() => {
      console.log('Rendering MathJax content...');
      this.mathJaxObject.Hub.Queue([
        'Typeset',
        this.mathJaxObject.Hub,
        'mathContent',
      ]);
    }, 1000);
  }

  loadMathConfig() {
    console.log('Loading MathJax configuration...');
    this.mathJaxObject = this.gs.nativeGlobal()?.MathJax || window.MathJax;

    if (!this.mathJaxObject) {
      console.warn('MathJax is not loaded.');
      return;
    }
  }

  ngOnInit() {
    this.loadMathConfig();
    this.renderMath();
  }
}
