import { RoomSearchItem } from './models/roomsearchitem';
import { RoomResult } from './models/roomresult';

//Searched Item stuff
let dateob = new Date()
let today:string = `${dateob.getFullYear()}-${(dateob.getMonth()+1).toString().padStart(2,"0")}-${dateob.getDate().toString().padStart(2,"0")}`;

let dateob2 = new Date(dateob.setDate(dateob.getDate() + 1));

let tomorrow:string = `${dateob2.getFullYear()}-${(dateob2.getMonth()+1).toString().padStart(2,"0")}-${dateob2.getDate().toString().padStart(2,"0")}`;

let searchedItem:RoomSearchItem = {
   startdate: today,
   enddate:  tomorrow,
   maxguests:  1,
   maxpets:  0,
   nightlycost: 900,
   hasmicro: false,
   haskitch: false,
   hasfridge:false,
   hascouch:false
 }

// Search Item getters
export function getSearchSD():string {
return searchedItem.startdate
}
export function getSearchED():string {
return searchedItem.enddate
}
export function getSearchMaxGuests():number {
  return searchedItem.maxguests
}
export function getSearchMaxpets():number {
  return searchedItem.maxpets
}
export function getSearchCost():number {
  return searchedItem.nightlycost
}
export function getSearchHasMicro():boolean {
  return searchedItem.hasmicro
}
export function getSearchHasKitch():boolean {
  return searchedItem.haskitch
}
export function getSearchHasFridge():boolean {
  return searchedItem.hasfridge
}
export function getSearchHasCouch():boolean {
  return searchedItem.hascouch
}
//Searched Item Setters
export function setSearchSD(newdate:string) {
searchedItem.startdate = newdate
}
export function setSearchED(newdate:string) {
searchedItem.enddate = newdate
}
export function setSearchMaxGuests(newmax:number) {
  searchedItem.maxguests = newmax
}
export function setSearchMaxpets(newmax:number) {
  searchedItem.maxpets = newmax
}
export function setSearchCost(newnum:number) {
  searchedItem.nightlycost = newnum
}
export function setSearchHasMicro(newbool:boolean) {
  searchedItem.hasmicro = newbool
}
export function setSearchHasKitch(newbool:boolean) {
  searchedItem.haskitch = newbool
}
export function setSearchHasFridge(newbool:boolean) {
  searchedItem.hasfridge = newbool
}
export function setSearchHasCouch(newbool:boolean) {
  searchedItem.hascouch = newbool
}

// roomresult item with room nums, room descriptions and stuff

// Account stuff
