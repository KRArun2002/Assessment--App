import { Component, OnInit } from '@angular/core';
import { TestService } from '../shared1/test1.service';
import { NgForm } from '@angular/forms';
import { Test1 } from '../shared1/test1.model';

declare var M: any;



@Component({
  selector: 'app-category1',
  templateUrl: './category1.component.html',
  styleUrls: ['./category1.component.css'],
  providers: [TestService]
})
export class Category1Component implements OnInit {

  constructor(public testService: TestService) {}

  ngOnInit() {
    this.resetForm();
    this.refreshTestList();
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.testService.selectedTest = {
      _id: '',
      question: '',
      answer1: '',
      answer2: '',
      answer3: '',
      correctanswer: ''
    };
  }
  onSubmit(form: NgForm) {
    if (form.value._id === '') {
      this.testService.postTest(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshTestList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    } else {
      this.testService.putTest(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshTestList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }
  refreshTestList() {
    this.testService.getTestList().subscribe((res) => {
      this.testService.tests = res as Test1[];
    });
  }
  onEdit(tst: Test1) {
    this.testService.selectedTest = tst;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') === true) {
      this.testService.deleteTest(_id).subscribe((res) => {
        this.refreshTestList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
