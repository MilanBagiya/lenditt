import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IDataList, Type } from '../model/comman.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dataList: IDataList[] = [
    {
      name: "Regina Kline",
      creation_date: new Date(2023, 1, 2),
      type: Type.Admin
    },
    {
      name: "Keegan Frost",
      creation_date: new Date(2021, 6, 7),
      type: Type.Admin
    },
    {
      name: "Logan Caldwell",
      creation_date: new Date(2021, 2, 21),
      type: Type.User
    },
    {
      name: "Penelope Lloyd",
      creation_date: new Date(2022, 2, 11),
      type: Type.User
    },
    {
      name: "Uriel Murray",
      creation_date: new Date(2022, 1, 11),
      type: Type.Admin
    },
    {
      name: "Ann Davis",
      creation_date: new Date(2022, 12, 2),
      type: Type.Admin
    },
    {
      name: "Yuli Branch",
      creation_date: new Date(2022, 6, 16),
      type: Type.User
    },
    {
      name: "Wanda Bauer",
      creation_date: new Date(2021, 7, 2),
      type: Type.Admin
    },
    {
      name: "May Sexton",
      creation_date: new Date(2022, 6, 11),
      type: Type.Admin
    },
    {
      name: "Rhoda Griffith",
      creation_date: new Date(2022, 4, 30),
      type: Type.Admin
    },
    {
      name: "Candace Wood",
      creation_date: new Date(2022, 6, 16),
      type: Type.User
    },
    {
      name: "Evan Carroll",
      creation_date: new Date(2022, 1, 21),
      type: Type.User
    },
    {
      name: "Scott Ferrell",
      creation_date: new Date(2023, 7, 28),
      type: Type.Admin
    },
    {
      name: "Paki Moreno",
      creation_date: new Date(2022, 1, 12),
      type: Type.User
    },
    {
      name: "Ila Rutledge",
      creation_date: new Date(2022, 7, 17),
      type: Type.User
    },
    {
      name: "Latifah Haynes",
      creation_date: new Date(2022, 2, 2),
      type: Type.Admin
    },
    {
      name: "Keefe Joyner",
      creation_date: new Date(2022, 9, 16),
      type: Type.Admin
    },
    {
      name: "Jesse Pace",
      creation_date: new Date(2023, 2, 18),
      type: Type.User
    },
    {
      name: "Rowan Snyder",
      creation_date: new Date(2022, 0, 25),
      type: Type.User
    },
    {
      name: "Savannah Mclean",
      creation_date: new Date(2021, 3, 2),
      type: Type.User
    },
    {
      name: "Tatum Key",
      creation_date: new Date(2023, 4, 12),
      type: Type.Admin
    },
    {
      name: "Suki Cameron",
      creation_date: new Date(2021, 3, 14),
      type: Type.Admin
    },
    {
      name: "Nola Dennis",
      creation_date: new Date(2021, 7, 10),
      type: Type.Admin
    },
    {
      name: "Quintessa Gallagher",
      creation_date: new Date(2023, 7, 23),
      type: Type.User
    },
    {
      name: "Amaya Alvarado",
      creation_date: new Date(2022, 7, 14),
      type: Type.User
    },
    {
      name: "Sydney Christensen",
      creation_date: new Date(2023, 7, 6),
      type: Type.Admin
    },
    {
      name: "Gareth Dickson",
      creation_date: new Date(2022, 8, 9),
      type: Type.Admin
    },
    {
      name: "Aiko Hutchinson",
      creation_date: new Date(2022, 3, 5),
      type: Type.Admin
    },
    {
      name: "Nichole Barker",
      creation_date: new Date(2022, 3, 8),
      type: Type.Admin
    },
    {
      name: "Francis Powell",
      creation_date: new Date(2022, 1, 28),
      type: Type.Admin
    },
    {
      name: "Odysseus Wood",
      creation_date: new Date(2023, 4, 15),
      type: Type.Admin
    },
    {
      name: "Ryder Thornton",
      creation_date: new Date(2023, 2, 5),
      type: Type.Admin
    },
    {
      name: "Ivana Andrews",
      creation_date: new Date(2021, 3, 6),
      type: Type.Admin
    },
    {
      name: "Amity Chen",
      creation_date: new Date(2022, 5, 29),
      type: Type.Admin
    },
    {
      name: "Peter Thomas",
      creation_date: new Date(2021, 4, 17),
      type: Type.User
    },
    {
      name: "Kyle Beck",
      creation_date: new Date(2021, 8, 29),
      type: Type.User
    },
    {
      name: "Haley Bryan",
      creation_date: new Date(2023, 6, 27),
      type: Type.Admin
    },
    {
      name: "Vance Sherman",
      creation_date: new Date(2023, 3, 30),
      type: Type.Admin
    },
    {
      name: "Herman Hickman",
      creation_date: new Date(2022, 5, 12),
      type: Type.Admin
    },
    {
      name: "Mariam Goodwin",
      creation_date: new Date(2023, 2, 14),
      type: Type.Admin
    },
    {
      name: "Fletcher Petty",
      creation_date: new Date(2023, 7, 5),
      type: Type.User
    },
    {
      name: "Marvin Davidson",
      creation_date: new Date(2022, 1, 13),
      type: Type.User
    },
    {
      name: "Jamal Snyder",
      creation_date: new Date(2023, 4, 19),
      type: Type.Admin
    },
    {
      name: "Leonard Carter",
      creation_date: new Date(2023, 7, 21),
      type: Type.Admin
    },
    {
      name: "Julie Hooper",
      creation_date: new Date(2023, 8, 10),
      type: Type.Admin
    },
    {
      name: "Quinn Mercado",
      creation_date: new Date(2022, 6, 27),
      type: Type.Admin
    },
    {
      name: "Ethan Flynn",
      creation_date: new Date(2022, 1, 18),
      type: Type.User
    },
    {
      name: "Sydney Myers",
      creation_date: new Date(2022, 2, 10),
      type: Type.User
    },
    {
      name: "Graham Powell",
      creation_date: new Date(2023, 9, 30),
      type: Type.Admin
    },
    {
      name: "Irene Sims",
      creation_date: new Date(2022, 6, 7),
      type: Type.Admin
    }
  ];

  pipe?: DatePipe;

  form = new FormGroup({
    fromDate: new FormControl<Date | null>(null),
    toDate: new FormControl<Date | null>(null),
  });

  get fromDate() { return this.form.get('fromDate')?.value; }
  get toDate() { return this.form.get('toDate')?.value; }

  roleType = ["user", "admin"]

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sorter!: MatSort;

  dataSource = new MatTableDataSource<IDataList>(this.dataList);
  columns: string[] = ['name', 'creation_date', 'type'];

  pageOptions: number[] = [10, 5];

  constructor(private datePipe: DatePipe) {
    this.pipe = new DatePipe('en');
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sorter;
  }

  applyFilter(val: any) {
    const value = val.target.value.trim().toLowerCase();
    this.dataSource.filter = value;
  }

  selectRole(val: string) {
    const value = val;
    this.dataSource.filter = value;
  }

  checkDate() {
    this.dataSource.filterPredicate = (data) => {
      if (this.fromDate && this.toDate) {
        if (data.creation_date) {
          return data?.creation_date >= this.fromDate && data?.creation_date <= this.toDate;
        }
      }
      return true;
    }
  }

  checkDateRange() {
    this.checkDate();
    this.dataSource.filter = '' + Math.random();
  }

  clearFilters() {
  }
}
