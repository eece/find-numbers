import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Find Numbers';
  public boxes:Array<Box> = new Array();
  public openedBoxes:Array<Box> = new Array();
  public score:number = 0;
  public guess:number = 0;
  public finished:boolean;
  public level:number = 4;
  ngOnInit() {
   this.loadPuzzle();
  }

  public showBox(index:number):void {
    if(!this.boxes[index].visible) {
      this.guess++;
      if(this.openedBoxes.length < 2) {
        this.addToOpened(index);
        if(this.openedBoxes.length == 2) {
          this.checkOpenedBoxes();
        }
      } else { // 2 opened items
        this.closeOpenedNonFoundBoxes();
        this.addToOpened(index);
      }
    }
  }
  public closeOpenedNonFoundBoxes():void {
    this.boxes.filter(item => item.visible == true && item.found == false).forEach(item => {
      item.visible = false;
    })
    this.openedBoxes= [];
  }

  public checkOpenedBoxes():void {
    if(this.openedBoxes[0].label == this.openedBoxes[1].label ) { // Found Items
      this.boxes.filter(item => item.label == this.openedBoxes[0].label).forEach(item => { // Make found items
        item.found = true;
      })
      this.score++;
      if(this.score == this.boxes.length / 2) {
        this.finished = true;
      }
    }
  }

  public addToOpened(index):void{
    this.boxes[index].visible= true;
    this.openedBoxes.push(this.boxes[index]);
  }

  public Shuffle(d) {
    let m = d.length, i;
    while (m) {
      i = (Math.random() * m--) >>> 0;
      [d[m], d[i]] = [d[i], d[m]]
    }
    return d;
  }

  public generateBoxes(id,level:number):void {
    for (let i = 1; i < (level*2)+1; i++) {
      this.boxes.push({id:i+id, label:i.toString(), visible:false, found:false});
    }
  }

  public loadPuzzle():void {
    this.generateBoxes('',Number(this.level));
    this.generateBoxes('-2',Number(this.level));
    this.boxes = this.Shuffle(this.boxes);
  }

  public restartPuzzle():void {
    this.boxes = [];
    this.guess = 0;
    this.score = 0;
    this.finished = false;
    this.loadPuzzle();
  }

  public levelChangeHandler():void {
    this.restartPuzzle();
  }

}
