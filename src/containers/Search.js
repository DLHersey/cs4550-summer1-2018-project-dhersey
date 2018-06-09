import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import SearchItem from "../components/SearchItem";

export default class Search
    extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            results: [
                {name: '1'},
                {name: '2'},
                {name: '3'}
            ]
        }

        this.renderResults = this.renderResults.bind(this);
        this.runSearch = this.runSearch.bind(this);
    }


    runSearch() {
        console.log("search btn");
        this.renderResults();
    }

    renderResults() {
        let results = this.state.results.map((result) => {
            return <SearchItem result={result} key={result.name}/>
        });
        return results;
    }

    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <h1>Search</h1>
                    <button className="float-right" type="button" onClick={this.runSearch}>Search</button>
                </div>
                <div className="">
                    <div><h3>Results: </h3></div>
                    <div>
                        <ul type="none">
                            {this.renderResults()}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}