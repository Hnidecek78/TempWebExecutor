import { Component, OnInit } from '@angular/core';
import { CommandExecutorService } from '../command-executor.service';

@Component({
  selector: 'app-command-executor',
  templateUrl: './command-executor.component.html',
  styleUrls: ['./command-executor.component.css']
})
export class CommandExecutorComponent implements OnInit {
  log: Array<{ command: any; result: any }> = [];

  constructor(private executor: CommandExecutorService) {}

  ngOnInit(): void {
    this.log = this.executor.getLog();
  }
}
