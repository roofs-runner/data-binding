import { Component } from '@angular/core';
import {el} from "@angular/platform-browser/testing/src/browser_util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'testServer', content: 'Just a test'}];
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
       type: 'server',
       name: serverData.serverName,
       content: serverData.serverContent
     });
  }

  onBlueprintCreated(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
     type: 'blueprint',
     name: blueprintData.serverName,
     content: blueprintData.serverContent
   });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }

    onGameFired(firedNumber: number) {
        if (firedNumber % 2 === 0) {
            this.evenNumbers.push(firedNumber);
            console.log(this.evenNumbers);
        } else {
            this.oddNumbers.push(firedNumber);
        }
    }
}
