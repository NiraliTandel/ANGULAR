import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() items: Array<any>;
  @Output() changePage = new EventEmitter<any>();
  @Input() initialPage = 1;
  @Input() itemsPerPage = 5;
  @Input() maxPages = 10;

  pager: any = {};

  constructor() {

  }

  ngOnInit(): void {
    if (this.items && this.items.length) {
      this.setPage(this.initialPage);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['items'].currentValue !== changes['items'].previousValue) {
      this.setPage(this.initialPage);
    }
  }

  setPage(page: number) {
    this.pager = this.paginate(this.items.length, page, this.itemsPerPage, this.maxPages);

    var pageOfItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);
    console.log(pageOfItems, 'page pf Index herer')

    this.changePage.emit(pageOfItems);
  }

  paginate(totalItems: number, currentPage: number, itemsPerPage: number, maxPages: number) {
    if (currentPage === 0) { currentPage = 1; }
    if (itemsPerPage === 0) { itemsPerPage = 10; }
    if (maxPages === 0) { maxPages = 10; }

    let totalPages = Math.ceil(totalItems / itemsPerPage);

    if (currentPage < 1) {
      currentPage = 1;
    }
    else if (currentPage > totalPages) {
      currentPage = totalPages;
    }
    let startPage: number, endPage: number;
    if (totalPages <= maxPages) {
      startPage = 1;
      endPage = totalPages;
    }
    else {
      var maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
      var maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
      if (currentPage <= maxPagesBeforeCurrentPage) {
        startPage = 1;
        endPage = maxPages;
      }
      else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
        startPage = totalPages - maxPages + 1;
        endPage = totalPages;
      }
      else {
        startPage = currentPage - maxPagesBeforeCurrentPage;
        endPage = currentPage + maxPagesAfterCurrentPage;
      }
    }
    var startIndex = (currentPage - 1) * itemsPerPage;
    var endIndex = Math.min(startIndex + itemsPerPage - 1, totalItems - 1);
    var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      itemsPerPage: itemsPerPage,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }
}