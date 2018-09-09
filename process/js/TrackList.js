var React = require('react');

class TrackList extends React.Component {

    render() {

        let images = this.props.image;
        let imageset=[];
        images.map((img) => {return(
            //console.log(img['#text'])
            imageset = img['#text']
        )});
        return(

            <li className="track-item media">
                <div className="track-info media-body">
                    <div className="track-head">
                        <span className="track-name">{this.props.singleItem.name}</span>
                        <span className="track-artist pull-right">{this.props.singleItem.artist}</span>
                        <div className="track-listeners">{this.props.singleItem.listeners}</div>
                        <div className="track-image"><img src={imageset} alt=""/></div>
                    </div>
                </div>
            </li>
        )
    }
}

module.exports = TrackList;
