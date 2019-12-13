import { Component, OnInit } from '@angular/core';
import { TestService } from '../shared/test.service';
import { NgForm } from '@angular/forms';
// import { Answermodel } from './quizmodel';
import { Test } from '../shared/test.model';

declare var M: any;


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [TestService]
})
export class QuizComponent implements OnInit {

  constructor(public testService: TestService) { }

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
      this.testService.tests = res as Test[];
    });
  }

  onEdit(tst: Test) {
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

  // answerkey: Answermodel[] = [];
  //   answerkey1 =[]
  //   check(e, str: String, answer: String) {
  //     if (e.target.checked) {
  //       console.log("..................."+str + " " + answer);
  //       this.answerkey.push(new Answermodel(str));
  //     }
  //     else {

  //       this.answerkey.splice(0, 1);
  //     }
  //     console.log(this.answerkey);
  //   }





}
