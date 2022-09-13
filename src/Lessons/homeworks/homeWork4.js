import React, { Component } from 'react'

export default class HomeWork4 extends Component {
    constructor() {
        super();
        this.state = {
            male: true,
            female: true,
            users: [
                { id: 1, name: "John", surname: "Doe", gender: 'male', job: 'developer', salay: '5000' },
                { id: 2, name: "Nick", surname: "Epic", gender: 'male', job: 'driver', salay: '1200' },
                { id: 3, name: "Erik", surname: "Garcia", gender: 'male', job: 'football player', salay: '200000' },
                { id: 4, name: "Bill", surname: "Gates", gender: 'male', job: 'developer', salay: '400000' },
                { id: 5, name: "Kane", surname: "Harry", gender: 'male', job: 'football player', salay: '250000' },
                { id: 6, name: "Alex", surname: "Marry", gender: 'male', job: 'actor', salay: '100000' },
                { id: 7, name: "Emilia", surname: "Clerk", gender: 'female', job: 'actress', salay: '120000' },
                { id: 8, name: "Alisa", surname: "Alisa", gender: 'female', job: 'actress', salay: '112000' },
                { id: 9, name: "Grilish", surname: "Jeck", gender: 'male', job: 'football player', salay: '220000' },
                { id: 10, name: "Dua", surname: "Lipa", gender: 'female', job: 'singer', salay: '180000' },
                { id: 11, name: "Selena", surname: "Gomez", gender: 'female', job: 'singer', salay: '120000' },
                { id: 12, name: "Klark", surname: "Godin", gender: 'male', job: 'engineer', salay: '20000' },
                { id: 13, name: "Pheonix", surname: "Dimon", gender: 'male', job: 'designer', salay: '30000' },
                { id: 14, name: "Kante", surname: "Ngolo", gender: 'male', job: 'football player', salay: '185000' },
                { id: 15, name: "Gaitan", surname: "Mertenz", gender: 'male', job: 'football player', salay: '90000' },
                { id: 16, name: "Arthur", surname: "Denny", gender: 'male', job: 'engineer', salay: '15000' },
                { id: 17, name: "Sane", surname: "Leroy", gender: 'male', job: 'football player', salay: '130000' },
                { id: 18, name: "Shakira", surname: "Shakira", gender: 'female', job: 'singer', salay: '28000' },
                { id: 19, name: "Rihanna", surname: "Rihanna", gender: 'female', job: 'singer', salay: '35000' },
                { id: 20, name: "Eminem", surname: "Eminem", gender: 'male', job: 'singer', salay: '43000' },
              ],
        }
    }



    getMale = () => {
        // this.setState({
        //     male: !this.state.male
        // })
        
        if (this.state.male) {
            this.setState({
                users: this.state.users.filter((item) => {
                    return item.gender === 'male'
                })
            })
        } else {
            return false;
        }        
    }

    getFemale = () => {        
        this.setState({
            users: this.state.users.filter((item) => {
                return item.gender === 'female'
            })
        })
    }

    getSearch = (e) => {
        let val = e.target.value
        this.setState({
            users: this.state.users.filter((item) => {
                return (
                    item.name === val
                )
            })
        })
        console.log(val);
    }

  render() {
    return (
      <div className='container'>
          <div className='d-flex'>
              <input onChange={this.getSearch} type="text" className='form-control m-2' />
              <button onClick={this.getMale} className="btn btn-secondary m-2">Male</button>
              <button onClick={this.getFemale} className="btn btn-secondary m-2">Female</button>
          </div>
          <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Gender</th>
                        <th>Salay</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.users.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name} {item.surname}</td>
                                    <td>{item.job}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.salay}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
          </table>
      </div>
    )
  }
}
