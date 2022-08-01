import React, { Component } from 'react';
import  ForRouter from './ForRouter';

class TryMe extends Component {

    state = {
        data: null
    }
      //const [data, setData] = React.useState(null);
    async tryServer()
    {
        const response = await fetch("http://localhost:8000/api/products/", {
            mode: "cors",
            headers: {
                "access-control-allow-origin" : "*"
            }
        });
        const data = await response.json();
        console.log('data: ', data);
        console.log('finish ');
        //this.setState({ filteredList: data.musicalInstruments })
    }

    //     fetch("http://localhost:8000/api/products/")
    //       .then((res) => res.json())
    //       .then((data) => console.log('data: '+data))
    //       .catch((err) => console.log(err.message))
    //       //.then((data) => this.setState(data.message));
    //     console.log("Server started,");
    // }

    render() {
        return(
            <>
            <h1>welcome!</h1>
            <h2>we happy see you!</h2>
            <p>Our store was founded in 2022 by Tzivya Friman<br></br>
            We supply food products and more<br></br>
            We look forward to your return visits</p>
            <p>{!this.state.data ? "Loading..." : this.state.data}</p>
            <button type="button" onClick= {() => this.tryServer()}>clickMe</button>
            </>
        )
    }
}
export default TryMe;