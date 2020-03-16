export interface IMovie{
    id:number
    title:string
    boxOffice:number
    imageUrl:string
    dateOfLaunch:Date
    active:boolean
    hasTeaser:boolean
    genre:string
    teaserUrl?:string
}