import { Component, OnInit } from '@angular/core';
import { actorDTO } from '../actors.model';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-index-actors',
  templateUrl: './index-actors.component.html',
  styleUrls: ['./index-actors.component.css'],
})
export class IndexActorsComponent implements OnInit {
  actors: actorDTO[];
  columnsToDisplay = ['name', 'actions'];

  constructor(private actorsService: ActorsService) {}

  ngOnInit(): void {
    this.actorsService.get().subscribe((actors: actorDTO[]) => {
      this.actors = actors;
    });
  }

  delete(id: number): void {}
}
