import { Component, OnInit } from '@angular/core';
import { ApiController } from 'src/app/constant/ApiController.constent';
import { Plan } from 'src/app/Interfaces/plan.interface';
import { GenericService } from '../../services/generic.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  private ctrl = new ApiController();
  plan: Plan[] = [];

  constructor(private genService: GenericService) { }

  ngOnInit(): void {
    this.GetAll();
  }

  GetAll(){
    this.genService.GetAll("", this.ctrl.plan)
    .subscribe(data => {
      this.plan = data
    })
  }

  getPlan(plan: Plan){
    console.log('Plan select: ', plan);
  }
}
