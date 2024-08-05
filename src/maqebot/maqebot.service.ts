import { Injectable } from '@nestjs/common';

@Injectable()
export class MaqeBotService {
  private directions = ['North', 'East', 'South', 'West'];
  private x = 0;
  private y = 0;
  private directionIndex = 0;

  processCommands(commands: string): string {
    for (let i = 0; i < commands.length; i++) {
      const command = commands[i];
      if (command === 'R') {
        this.directionIndex = (this.directionIndex + 1) % 4;
      } else if (command === 'L') {
        this.directionIndex = (this.directionIndex + 3) % 4;
      } else if (command === 'W') {
        let j = i + 1;
        let numStr = '';
        while (j < commands.length && !isNaN(parseInt(commands[j], 10))) {
          numStr += commands[j];
          j++;
        }
        const distance = parseInt(numStr, 10);
        this.moveForward(distance);
        i = j - 1;
      }
    }
    return `X: ${this.x} Y: ${this.y} Direction: ${this.directions[this.directionIndex]}`;
  }

  private moveForward(distance: number): void {
    switch (this.directions[this.directionIndex]) {
      case 'North':
        this.y += distance;
        break;
      case 'East':
        this.x += distance;
        break;
      case 'South':
        this.y -= distance;
        break;
      case 'West':
        this.x -= distance;
        break;
    }
  }
}
