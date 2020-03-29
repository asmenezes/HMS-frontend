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
