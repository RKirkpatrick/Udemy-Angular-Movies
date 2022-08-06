import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
  totalAmountOfRecords;
  currPage = 1;
  pageSize = 5;

  constructor(private actorsService: ActorsService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.actorsService
      .get(this.currPage, this.pageSize)
      .subscribe((response: HttpResponse<actorDTO[]>) => {
        this.actors = response.body;
        this.totalAmountOfRecords = response.headers.get(
          'totalAmountOfRecords'
        );
      });
  }

  updatePagination(event: PageEvent) {
    this.currPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadData();
  }

  delete(id: number): void {}
}
