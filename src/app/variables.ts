import { RoomSearchItem } from './models/roomsearchitem';
import { RoomResult } from './models/roomresult';



// roomresult item with room nums, room descriptions and stuff

// Account stuff
dateob = new Date()
today:string = `${this.dateob.getFullYear()}-${(this.dateob.getMonth()+1).toString().padStart(2,"0")}-${this.dateob.getDate().toString().padStart(2,"0")}`;

dateob2 = new Date(this.dateob.setDate(this.dateob.getDate() + 1));

tomorrow:string = `${this.dateob2.getFullYear()}-${(this.dateob2.getMonth()+1).toString().padStart(2,"0")}-${this.dateob2.getDate().toString().padStart(2,"0")}`;

let searchedItem:RoomSearchItem = {
   startdate: this.today,
   enddate:  this.tomorrow,
   maxguests:  1,
   maxpets:  0,
   cost: 900,
   hasmicro: false,
   haskitch: false,
   hasfridge:false,
   hascouch:false
 }

// Search Item getters
export function getSearchSD():string {
return this.searchedItem.startdate
}
export function getSearchED():string {
return this.searchedItem.enddate
}
export function getSearchMaxGuests():number {
  return this.searchedItem.maxguests
}
export function getSearchMaxpets():number {
  return this.searchedItem.maxpets
}
export function getSearchCost():number {
  return this.searchedItem.cost
}
export function getSearchHasMicro():boolean {
  return this.searchedItem.hasmicro
}
export function getSearchHasKitch():boolean {
  return this.searchedItem.haskitch
}
export function getSearchHasFridge():boolean {
  return this.searchedItem.hasfridge
}
export function getSearchHasCouch():boolean {
  return this.searchedItem.hascouch
}
//Searched Item Setters
export function setSearchSD(newdate:string) {
this.searchedItem.startdate = newdate
}
export function setSearchED(newdate:string) {
this.searchedItem.enddate = newdate
}
export function setSearchMaxGuests(newmax:number) {
  this.searchedItem.maxguests = newmax
}
export function setSearchMaxpets(newmax:number) {
  this.searchedItem.maxpets = newmax
}
export function setSearchCost(newnum:number) {
  this.searchedItem.cost = newnum
}
export function setSearchHasMicro(newbool:boolean) {
  this.searchedItem.hasmicro = newbool
}
export function setSearchHasKitch(newbool:boolean) {
  this.searchedItem.haskitch = newbool
}
export function setSearchHasFridge(newbool:boolean) {
  this.searchedItem.hasfridge = newbool
}
export function setSearchHasCouch(newbool:boolean) {
  this.searchedItem.hascouch = newbool
}
