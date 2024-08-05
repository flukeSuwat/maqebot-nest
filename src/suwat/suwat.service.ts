import { Injectable } from '@nestjs/common';

@Injectable()
export class SuwatService {
  processRequest(type: string, color: string, limit: number): string {
    return `Type: ${type ? type : '-'}, Color: ${color ? color : '-'}, Limit: ${limit ? limit : '-'}`;
  }
}
