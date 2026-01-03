import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-layout',
  standalone: true, // ← ДОБАВЬТЕ ЭТО
  imports: [CommonModule, RouterModule, SharedModule],
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
