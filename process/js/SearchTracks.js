var React = require('react');

class SearchTracks extends React.Component {
    renderSearch(e) {
        e.preventDefault();
        let trackName = this.search;
        let artistName = this.artist;
        let track = this.name;
        this.props.searchTrack(trackName.value, artistName.value,track.value);
    }
    render() {
        return(
            <div className="row search-tracks">
                <div className="col-sm-4">

                        <input id="SearchTracks" placeholder="Search" ref={(input) => this.search = input} type="text" className="form-control" aria-label="Search Tracks" />
                </div>

                            <div className="col-sm-3">
                            <button type="button" className="btn btn-primary"  onClick={this.renderSearch.bind(this)} name ="Search Track" >Search Track</button>
                            </div>
                            <div className="col-sm-3">
                                <button type="button" className="btn btn-primary dropdown-toggle"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by: <span className="caret"></span></button>
                            <ul className="dropdown-menu dropdown-menu-right">
                                <li placeholder="artist" ref={(input) => this.artist = input}><a href="#" id="artist"  >Artist Name</a></li>
                                <li><a href="#" id="name" placeholder="name" ref={(input) => this.name = input} >Track Name</a></li>
                                <li role="separator" className="divider"></li>
                                <li><a href="#" id="asc">Asc</a></li>
                                <li><a href="#" id="desc">Desc</a></li>
                            </ul>
                            </div>
                        </div>

        ) // return
    } // render
} //SearchTracks

module.exports = SearchTracks;
