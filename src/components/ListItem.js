import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';

import * as actions from '../actions';


class ListItem extends Component {
    render() {
        const { titleStyle } = styles;
        const { title, id } = this.props.library;
        return (
            <TouchableWithoutFeedback
                onPress={() => { this.props.selectLibrary(id); }}
            >
                <CardSection>
                    <Text style={titleStyle}>{title}</Text>
                </CardSection>
            </TouchableWithoutFeedback>
        );
    }
}
const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15

    }
};
export default connect(null, actions)(ListItem);
