import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css'],
})
export class InputMarkdownComponent implements OnInit {
  @Input()
  markdownContent = '';

  @Output()
  changeMarkdown = new EventEmitter<string>();

  @Input()
  label = 'Value';

  constructor() {}

  ngOnInit(): void {}
}
