import React from "react"
import { Link } from "react-router-dom"
import "../style/home.less"

let HotDog = ({ description, expirationDate, name, backgroundURL }) => (
    <div className="hot_Dog">
        <div className="about_hotDog">
            <span>
                <p><b>{name}</b></p>
                <i>{description}</i>
            </span>
        </div>
        <div
            style={{
                background: `url(${backgroundURL})`
            }}
        />
    </div>
)
export default class extends React.Component {

    state = {
        list: []
    }
    filterByExpiration = ({ expirationDate: dateString }) => {
        let [mounth, day, year] = dateString.split("-")
        let dateNuber = Date.parse(`${year}-${mounth}-${day}`)
        let date = new Date(dateNuber)
        console.log({
            dateString,
            year: date.getFullYear(),
            mounth: date.getMonth(),
            day: date.getDate()
        })
        return date > new Date()
    }
    render() {
        let { list } = this.state
        return (
            <div className="home">
                <div className="header"></div>
                <div className="menu">
                    <span> Menu </span>
                    <span> Catering </span>
                    <span> About us </span>
                    <Link to="/vk">
                        Contact
                    </Link>
                </div>
                <div className="content">{
                    list
                        .filter(this.filterByExpiration)
                        .map(({ id, ...props }) => (
                            <HotDog
                                key={id}
                                {...props}
                            />
                        ))
                }</div>
                <footer></footer>
            </div>
        )

    }

    componentDidMount() {
        fetch("https://formula-test-api.herokuapp.com/menu")
            .then(res => res.json()).then(data => {
                this.setState({
                    list: data
                })
            })
    }
}