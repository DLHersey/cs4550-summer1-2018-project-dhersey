import React from 'react';
import { Link } from 'react-router-dom'

export default class FavoriteListItem
    extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            recipe: ''
        }
    }

    componentDidMount() {
        this.selectCourse(this.props.courseId);
    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }

//
//     onClick={() =>
// {this.props.delete(this.props.module.id)}}
    render() {
        return (
            <li className="list-group-item">
                <Link to={`/course/${this.state.courseId}/module/${this.props.module.id}`}>
                    {this.props.module.title}
                </Link>
                <button className="btn btn-danger float-right"
                        onClick={() => {this.props.delete(this.props.module.id)}}
                        type="button">
                    <i className="fa fa-trash" ></i>
                </button>
            </li>
        );
    }
}