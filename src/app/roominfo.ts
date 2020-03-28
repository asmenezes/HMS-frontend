import { RoomResult } from './models/roomresult';

let allResults: RoomResult[] = [
  {
    roomname: ""
  }
]
//set all and possibly get all (Might need to deep copy, but don't think I do)

export function getResults(): RoomResult[] {
  return allResults;
}

export function setResults(input: RoomResult[]): void {
  console.log(input)
  allResults = input;
}

export function getAvailable(inroomname: string): number[] {

  let i = allResults.findIndex(entry => {
    return entry.roomname == inroomname
  })

  console.log(allResults[i].available)
  return allResults[i].available
}
// Set selecteds and get selecteds

// {
//   roomname:string;
//   numavail?:number;
//   totalcost?:number;
//   numbeds?:number;
//   maxguests?:number;
//   maxpets?:number;
//   roomdesc?:string;
//   hasmicro?:boolean;
//   haskitch?:boolean;
//   hasfridge?:boolean;
//   imgs?:
//   [
//     {
//     url:string;
//     }
//   ]
//   available?:number[];
// }
