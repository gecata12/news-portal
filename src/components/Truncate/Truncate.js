import React, { Component } from 'react';
import PropTypes from 'prop-types';

import shave from 'shave';

class Truncate extends Component {
    static propTypes = {
        text: PropTypes.string,
        className: PropTypes.string,
        lines: PropTypes.oneOfType([
            PropTypes.oneOf([false]),
            PropTypes.number
        ])
    };

    static defaultProps = {
        children: '',
        lines: 3
    };

    constructor(props) {
        super(props);
        this.node = React.createRef();
    }

    componentDidMount() {
        this.truncateText(this.node.current);
        window.addEventListener('resize', this.onResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }

    componentDidUpdate () {
        this.truncateText(this.node.current);
    }

    truncateText = (element) => {
        const {lines} = this.props;

        if (!lines) {
            shave(element, Infinity);
            return;
        }
        shave(element, lines * window.getComputedStyle(element, null).getPropertyValue('line-height').replace(/px/g, ''));
    };

    onResize = () => {
        this.truncateText(this.node.current);
    };

    render() {
        const {text, className} = this.props;

        return (
            <span className={className} ref={this.node}>{text}</span>
        );
    }
}

export default Truncate;