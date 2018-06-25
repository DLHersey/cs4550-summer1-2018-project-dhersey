import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import auth from '../auth/authenticator';
import RecipeService from "../services/RecipeServiceClient";
import SearchItem from "../components/SearchItem";

const PageSizePlusOne = 6;
const PageSize = 5;

export default class SearchPage
    extends React.Component {

    constructor(props) {
        super(props);
        this.recipeService = RecipeService.instance;
        this.state = {
            userId: auth.getId(),
            searchTerm: "",
            page: 1,
            searchResult: null
        }

/*        this.state = {
            searchTerm: "",
            fromItem: 0,
            toItem: 5,
            more: true,
            maxItem: 5,
            page: 1,
            searchResult: null,
            hits: []
        } */

        this.renderResults = this.renderResults.bind(this);
        this.runSearch = this.runSearch.bind(this);
        this.onChange = this.onChange.bind(this);
        this.renderPagers = this.renderPagers.bind(this);
        this.updatePageItems = this.renderPagers.bind(this);
        this.getStartIndex = this.getStartIndex.bind(this);
        this.increasePage = this.increasePage.bind(this);
        this.decreasePage = this.decreasePage.bind(this);
        this.runPageSearch = this.runPageSearch.bind(this);
    }

    onChange(event) {
        var searchTerm = event.target.value;
        console.log("searchTerm: " + searchTerm);
        return this.setState({searchTerm: searchTerm});
      }

      /*
    runSearch() {
        console.log("search Term: " + this.state.searchTerm);
        if (this.state.searchTerm != "") {        
        let tempResults = RecipeApi.search(this.state.searchTerm);
        debugger;
            if (tempResults) {
                this.setState({results: tempResults});
                console.log("results: " + this.state.results);
                this.renderResults();
            }
        }
    }
    */

    setResults(result) {
        this.setState({searchResult: result});
        /*
        if (result != null) {
        this.setState({hits: result.hits});
        this.setState({more: result.more});
        this.setState({maxItem: result.count});
        }
        */
    }


    /*
    updatePageItems(pageSize) {
        if (this.state.SearchItem !== "") {
        if ( (pageSize > 0) || (this.state.fromItem !== 0) ) {
            this.state.fromItem += pageSize;
        }

        if ( (pageSize < 0) || (this.state.toItem < this.state.maxItem-1) ) {
            this.state.toItem += pageSize;
        }

        if (this.state.fromItem < 0) {
            this.state.fromItem = 0;
        }

        if (this.state.toItem > this.state.maxItem-1) {
            this.state.toItem = this.state.maxItem-1;
        }
        this.runSearch();
        }
    } */

    getStartIndex(pageNumber) {
        var curPage = pageNumber;
        var startPage = curPage-1;
        var startIndex = startPage * PageSizePlusOne;
        return startIndex;
    }

    decreasePage() {
        var curpage = this.state.page;
        var newPage = curpage - 1;
        this.updatePageItems(newPage);
    }

    increasePage() {
        var curpage = this.state.page;
        var newPage = curpage + 1;
        this.updatePageItems(newPage);
    }

    updatePageItems(newPage) {
        debugger;
        if (this.state.searchResult != null) {
            var pageCount = this.state.searchResult.count;
            var maxPage = (pageCount/PageSize) + 1;
        
            if (newPage > 0 && newPage < maxPage) {
                //this.state.page = newPage;
                this.runPageSearch(newPage);
            }
        }
    }


    runPageSearch(pageNumber) {
        debugger;
        if (this.state.searchTerm !== "") {
            var startIndex = this.getStartIndex(pageNumber);
            var endIndex = startIndex + PageSize;
        this.recipeService.search(this.state.searchTerm, startIndex, endIndex)
        .then(result => { 
            this.setResults(result)
            //this.searchResult = result;
            //this.state.hits = result.hits;
            //this.state.more = result.more;
            //this.state.maxItem = result.count;
        });
        }
    }

    runSearch() {
        if (this.state.searchTerm !== "") {
            var startIndex = this.getStartIndex(this.state.page);
            var endIndex = startIndex + PageSize;
        this.recipeService.search(this.state.searchTerm, startIndex, endIndex)
        .then(result => { 
            this.setResults(result)
            //this.searchResult = result;
            //this.state.hits = result.hits;
            //this.state.more = result.more;
            //this.state.maxItem = result.count;
        });
        }
    }


    renderResults() {
        if (this.state.searchResult) {
            if (this.state.searchResult.hits && this.state.searchResult.hits.length) {
            console.log("renderResults: " + this.state.searchResult.hits);
        let results = this.state.searchResult.hits.map((hit) => {
            console.log("renderResults hit: " + hit.recipe.label);
            return <SearchItem hit={hit} key={hit.recipe.uri}/>
        });
        return results;
    }
        }
        return <h3>No Results</h3>;
    }

    /*
    renderPagers() {
        if (this.state.hits && this.state.hits.length) {
        if ((this.state.fromItem > 0) && (this.state.more)) {
            return (<div><button type="button" onClick={this.updatePageItems(PageSizePlusOne * -1)} >Back</button><br />
            <button type="button" onClick={this.updatePageItems(PageSizePlusOne)} >Next</button></div>)
        } else if (this.state.fromItem == 0) {
            return (<div><button type="button" onClick={this.updatePageItems(PageSizePlusOne)} >Next</button></div>)
        } else if (!this.state.more) {
            return (<div><button type="button" onClick={this.updatePageItems(PageSizePlusOne * -1)} >Back</button></div>)
        } else { return }
        }
        return;
    }*/

    renderPagers() {
        if (this.state.searchResult != null) {
            if ((this.state.page > 1) && (this.state.searchResult.more)) {
                return (<div><button type="button" onClick={this.decreasePage()} >Back</button><br />
                <button type="button" onClick={this.increasePage()} >Next</button></div>)
            } else if (this.state.page === 1) {
                return (<div><button type="button" onClick={this.increasePage()} >Next</button></div>)
            } else if (!this.state.searchResult.more) {
                return (<div><button type="button" onClick={this.decreasePage()} >Back</button></div>)
            } else {
                return;
            }
        }
        return;
    }


    render() {
        return(
            <div className="container-fluid">
                <head>
                    <script src="https://developer.edamam.com/attribution/badge.js"></script>
                </head>
                <div className="row">
                <form className="border border-dark p-5">
                    <h3>Search</h3>
                    <div className="form-group mt-4">
                    <input id="searchTermCtrl" className="form-control m-2" required=""
                                   autoFocus="" value={this.state.searchTerm} onChange={this.onChange}  />
                    <button className="float-right" type="button" onClick={this.runSearch}>Search</button>
                    </div>
                </form>
                    <div id="edamam-badge" data-color="white"></div>
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