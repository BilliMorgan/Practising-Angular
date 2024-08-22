import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
  styles: [
    `
      .fifth {
        color: yellow;
      }
    `,
  ],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'test server';
  serverCreated = false;
  servers = ['Test server', 'Test server 2'];
  displayParagraph = false;
  buttonClickLog: string[] = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    console.log(event.target.value);
    this.serverName = event.target.value;
  }

  onDisplayDetails() {
    this.displayParagraph = !this.displayParagraph;
    this.buttonClickLog.push(new Date().toISOString());
  }
  getItemPosition() {}
}
