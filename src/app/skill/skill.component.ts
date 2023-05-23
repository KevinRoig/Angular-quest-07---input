import { Component, Input, OnInit } from '@angular/core';

import { Developer } from '../models/developer.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input() name: string = "";
  @Input() logo: string = "";
  @Input() site: string = "";
  
  constructor() { }
  ngOnInit(): void { }
}

