import { Component, OnInit } from '@angular/core';
import { Questionmodel } from './quiz2model';
import { Answermodel } from './quiz2model';
import { TestService } from '../shared2/test2.service';
import { NgForm } from '@angular/forms';
import { Test2 } from '../shared2/test2.model';

declare var M: any;
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'test';
// }


@Component({
  selector: 'app-quiz2',
  templateUrl: './quiz2.component.html',
  styleUrls: ['./quiz2.component.css'],
  providers: [TestService]
})
export class Quiz2Component implements OnInit {
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
      this.testService.tests = res as Test2[];
    });
  }
  onEdit(tst: Test2) {
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

  answerkey: Answermodel[] = [];
  answerkey1 =[]
  check(e, str: String, answer: String) {
    if (e.target.checked) {
      console.log("..................."+str + " " + answer);
      this.answerkey.push(new Answermodel(str));
    }
    else {

      this.answerkey.splice(0, 1);
    }
    console.log(this.answerkey);
  }


  quizlist: Questionmodel[] = [];
  store(e, str1:String, answer1: String) {
    if(e.target.checked) {
      console.log("..................."+str1 + " " + answer1);
      this.quizlist.push(new Questionmodel(str1));
    }
    else {
      this.quizlist.splice(0,1);
    }
    console.log(this.quizlist);
  }

marks: number = 0;

generatemark() {

    console.log(this.answerkey,this.answerkey.length)
    const arr = [];
    const arr1 = [];
    this.answerkey.map(item =>{
      arr.push(item.option);
    })
    this.quizlist.map(item =>{
      arr1.push(item.option1);
    })

    for(let c = 0 ; c < this.answerkey.length ; c++){
    console.log(arr[c]);
    console.log(arr1[c]);
      if(arr[c] === arr1[c]) {
        this.marks++;
      }else{
        console.log("No match");
      }
    }

  document.writeln("Your score is " + this.marks);

}



}
