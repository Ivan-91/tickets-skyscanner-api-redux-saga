import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

export default class Scrollbar extends Component {

    constructor(props, ...rest) {
        super(props, ...rest);
        
        this.renderThumb = this.renderThumb.bind(this);
        this.renderTrack = this.renderTrack.bind(this)
    }   

    renderThumb({ style, ...props }) {
        const thumbStyle = {
            width: 2,
            background: '#1157A7',
            cursor: 'pointer',
            borderRadius: 2
        };
        return (
            <div
                style={{ ...style, ...thumbStyle }}
                {...props}/>
        );
    }

    renderTrack({ style, ...props }) {
        const trackStyle = {
            width: 2,
            background: '#1157A7',
            cursor: 'pointer',
            borderRadius: 2
        };
        return (
            <div
                style={{ ...style, ...trackStyle }}
                {...props}/>
        );
    }

    render() {
        return (
            <Scrollbars
            
                //renderThumbVertical={this.renderThumb}
                renderThumbVertical={({ style, ...props }) =>
            <div {...props} style={{ ...style,  width: 2,
                background: '#1157A7',
                cursor: 'pointer',
                borderRadius: 2 }}/>
        }
                {...this.props}
                />
        );
    }
}