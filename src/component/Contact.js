import React from "react"
import { Link } from "react-router-dom"
import "../style/contact.less"

let initState = {
    name: "",
    comment: "",
    email: ""
}





export default class extends React.Component {
    state = initState

    createComment = ({ target }) => {
        if (!target.name) {
            return;
        }
        this.setState({
            [target.name]: target.value
        })
    }
    sendServer = () => {
        fetch(
            "https://formula-test-api.herokuapp.com/contact",
            {
                method: "post",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(this.state)
            }
        ).then(res => {
            if (res.ok) {
                alert("success send data")
                this.setState(initState)
            } else {
                alert("failed send data")
            }

        })
    }

    render() {
        console.log(this.state)
        let data = this.state
        return (
            <div className="contact">
                <div className="inputBlock"

                >
                    <input
                        placeholder="Ваше Имя"
                        name="name"
                        value={data.name}
                        onChange={this.createComment}
                    />

                    <input
                        placeholder="Ваше Email"
                        name="email"
                        value={data.email}
                        onChange={this.createComment}
                    />
                    <p> Оставьте комментарий </p>
                    <textarea
                        name="comment"
                        value={data.comment}
                        onChange={this.createComment}
                    />
                </div>
                <button onClick={this.sendServer}>
                    Отправьте комментарий
                </button>

            </div>
        )
    }
}