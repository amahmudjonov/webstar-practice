import React, { Component } from 'react'

export default class Lesson5 extends Component {
    constructor() {
        super();
        this.state = {
            users: [
        {id: 1, name: "John", surname: "Doe", gender: "male", job: "developer", salary: "5000",
          imgUrl:"https://decisionsystemsgroup.github.io/workshop-html/img/john-doe.jpg",},
        {id: 2, name: "Nick", surname: "Epic", gender: "male", job: "driver", salary: "1200",
          imgUrl: "https://www.westtransit.com/wp-content/uploads/2016/06/team-1.jpg",},
        {id: 3, name: "Erik", surname: "Garcia", gender: "male", job: "football player", salary: "200000",
          imgUrl: "https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/Manchester-City-v-Watford-FC---Premier-League-f10f74f03f1c4f4f9ef81596844ff4f2.jpg",},
        {id: 4, name: "Bill", surname: "Gates", gender: "male", job: "developer", salary: "400000",
          imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bill_Gates_-_Nov._8%2C_2019.jpg/640px-Bill_Gates_-_Nov._8%2C_2019.jpg",},
        {id: 5, name: "Kane", surname: "Harry", gender: "male", job: "football player", salary: "250000",
          imgUrl: "https://i.guim.co.uk/img/media/dbd1bf13175e8bf4f1aaf73f1f1d47bbda5d0398/0_136_3480_2088/master/3480.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=38c224d031905bc6e29aee04b5618e5c",},
        {id: 6, name: "Alex", surname: "Marry", gender: "male", job: "actor", salary: "100000",
          imgUrl: "https://i0.wp.com/media.ghgossip.com/wp-content/uploads/2020/11/17203256/Screenshot-2020-11-17-at-8.31.57-PM.png?fit=900%2C692&ssl=1",},
        {id: 7, name: "Emilia", surname: "Clerk", gender: "female", job: "actress", salary: "120000",
          imgUrl: "https://i.pinimg.com/736x/19/ba/9a/19ba9a273cf36196bfe1a7b416d57682.jpg",},
        {id: 8, name: "Alisa", surname: "Alisa", gender: "female", job: "actress", salary: "112000",
          imgUrl: "http://chinafilminsider.com/wp-content/uploads/2021/07/Angelababy.jpeg",},
        {id: 9, name: "Grilish", surname: "Jeck", gender: "male", job: "football player", salary: "220000",
          imgUrl: "https://static.independent.co.uk/2021/11/30/15/a585c7cc3a575db220a222d8e48c91e3Y29udGVudHNlYXJjaGFwaSwxNjM4MzY5MjQ0-2.63412093.jpg?quality=75&width=982&height=726&auto=webp",},
        {id: 10, name: "Dua", surname: "Lipa", gender: "female", job: "singer", salary: "180000",
          imgUrl: "https://tntmusic.ru/media/content/preview@2x/2021-06-05_11-30-59__802d9d4c-c5f1-11eb-967b-19c54c23e3e8.jpg",},
        {id: 11, name: "Selena", surname: "Gomez", gender: "female", job: "singer", salary: "120000",
          imgUrl: "https://media.vanityfair.com/photos/624c8bd2004978a71edce56d/master/w_2560%2Cc_limit/1198930383",},
        {id: 12, name: "Klark", surname: "Godin", gender: "male", job: "engineer", salary: "20000",
          imgUrl: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",},
        {id: 13, name: "Pheonix", surname: "Dimon", gender: "male", job: "designer", salary: "30000",
          imgUrl: "https://media.istockphoto.com/photos/young-male-designer-of-fashion-looking-at-textile-samples-in-picture-id1169167415?k=20&m=1169167415&s=612x612&w=0&h=wz34AiVKEI6aGuvI1hXP5_4keRq1fpIifGAvzBke0oo=",},
        {id: 14, name: "Kante", surname: "Ngolo", gender: "male", job: "football player", salary: "185000",
          imgUrl: "https://static.independent.co.uk/2021/09/17/13/newFile-5.jpg?quality=75&width=982&height=726&auto=webp",},
        {id: 15, name: "Gaitan", surname: "Mertenz", gender: "male", job: "football player", salary: "90000",
          imgUrl: "https://football24.ru/uploads/posts/2021-11/1637528398_dries54.jpg",},
        {id: 16, name: "Arthur", surname: "Denny", gender: "male", job: "engineer", salary: "15000", 
          imgUrl: "https://i.pinimg.com/originals/54/ca/c2/54cac2037512380cd7fe38a00ef9b0ba.jpg",},
        {id: 17, name: "Sane", surname: "Leroy", gender: "male", job: "football player", salary: "130000",
          imgUrl: "https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/SS-Lazio-v-Bayern-Muenchen----UEFA-Champions-Leagu-cc77bfd1a08ae75e50ccb436c762ebda.jpg",},
        {id: 18, name: "Shakira", surname: "Shakira", gender: "female", job: "singer", salary: "28000",
          imgUrl: "https://s1.cdn.teleprogramma.pro/wp-content/uploads/2021/07/8cd554dfcb6d31cace973513bf9dda4c.jpg",},
        {id: 19, name: "Rihanna", surname: "Rihanna", gender: "female", job: "singer", salary: "35000",
          imgUrl: "https://icdn.lenta.ru/images/2021/08/04/14/20210804142928796/square_320_333c3adf7357d152e9c9756abcf9003f.jpg",},
        {id: 20, name: "Eminem", surname: "Eminem", gender: "male", job: "singer", salary: "43000",
          imgUrl: "https://www.eminem.pro/wp-content/uploads/2012/07/2011-3-Eminem-Recovery-e1580224592979.jpg",},
      ],
        }
    }
  render() {
    return (
      <div>
          
      </div>
    )
  }
}
