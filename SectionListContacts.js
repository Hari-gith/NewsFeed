import React from 'react'
import {SectionList, Text} from 'react-native'
import PropTypes from 'prop-types'

import Row from './Row'

 //const renderSectionHeader = ({section}) => <Text>{section.title}</Text>

const SectionListContacts = props => {
  const contactsByLetter = props.news.reduce((obj, news) => {
    console.log('news.title',news.title)
    if(typeof(news.title) != "undefined" && typeof(news.author) != 'undefined')
    {
    const firstLetter = news.title[0].toUpperCase()
    
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), news],
    }
  }
    
  }, {})
  return (
    <SectionList
      keyExtractor={item => item.title}
      renderItem={({item}) => <Row {...item}  />}
      renderSectionHeader={renderSectionHeader}
    />
  )
}
SectionListContacts.propTypes = {
  contacts: PropTypes.array,
}

export default SectionListContacts
