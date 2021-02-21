import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/models/topic';
import { TopicsService } from 'src/app/services/topics.service';

@Component({
  selector: 'app-topics-form',
  templateUrl: './topics-form.component.html',
  styleUrls: ['./topics-form.component.css']
})
export class TopicsFormComponent implements OnInit {

  topics        : Topic[];
  selectedTopic : Topic  ;
  emptyOption   : any    ;
  
  constructor(topicsService : TopicsService)
  {
    this.topics = topicsService.getTopics();
  }

  ngOnInit(): void {
  }

  onChange(value)
  {
    console.log(value);
    this.selectedTopic = value;
  }

}
