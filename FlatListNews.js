import React from 'react'
import {FlatList} from 'react-native'
import PropTypes from 'prop-types'

import Row from './Row'

const renderItem = ({item}) => <Row {...item} />

const FlatListNews = props => <FlatList renderItem={renderItem} data={props.news} keyExtractor={(item, index) => index.toString()}/>

FlatListNews.propTypes = {
  news: PropTypes.array,
}

export default FlatListNews
