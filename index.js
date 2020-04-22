import React from 'react';
import { FlatList, TouchableOpacity, Image, View, Text, StyleSheet, Alert } from 'react-native';
import PropTypes from 'prop-types'
import Star from 'react-native-star-view';
export default class HorizontalSlider extends React.Component {
  // how to render each item in the array of data.
  renderItem({ item }) {
    return (
      /*
        The main wrapper component is touchable opacity which is a button so that,
        when the user presses on any part of the item it shows an alert with Url
       */
      <TouchableOpacity
        key={item.id}
        style={styles.buttonStyle}
        // onPress show just a url word
        onPress={() => Alert.alert('', 'URL')}
      >
        {/* image component to show the listing image */}
        <Image
          source={item.image ? item.image : null}
          style={styles.imageStyle}
        />
        {/* View component the wraps all the remaining listing data */}
        <View style={styles.dataContainer}>
          {/* 
          before rendering any attribute, check first if exists and then show it other than that there
          are two options;
          first one to add a condition on the whole component so that not to render it if the attribute
          doesnot exist.
          second option as it is implemented down here to show a default value if it doesnot exist and prevents app crashing
          */}
          <Text style={styles.categoryStyle}>{item.category ? item.category : ''}</Text>
          <Star score={item.rating ? item.rating : 0} style={styles.starStyle} />
          <Text style={styles.titleStyle}>{item.title ? item.title : ''}</Text>

        </View>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <View>
        {/* component title, if it is supported add it if not remove it's section */}
        {this.props.title && <Text style={styles.flatListTitleStyle}>{this.props.title}</Text>}

        {/* using the traditional react native flat list and specifying the needed props */}
        <FlatList
          // the all props here to give the package's user the ability to pass further more flatlist props
          {...this.props}
          data={this.props.data}
          keyExtractor={({ id }) => id}
          renderItem={this.renderItem.bind(this)}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    )
  }
}

/* using propTypes package to warn the package's user about some props and
 here stating that the data prop is required in order to use the package 
 title prop is a string should be supplied if the package's user wants to add a title to the list component
 */
HorizontalSlider.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string
};


// styles object responsible for the component's styling
const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 16, color: 'black', fontWeight: 'bold', marginTop: 5
  },
  starStyle: {
    width: 100,
    height: 20,
    marginTop: 5
  },
  imageStyle: {
    width: 200, height: 200, borderRadius: 30,
  },
  dataContainer: {
    marginTop: 10, maxWidth: 200
  },
  categoryStyle: {
    fontSize: 10, color: 'grey'
  },
  buttonStyle: {
    marginRight: 20
  },
  flatListTitleStyle: {
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 18
  }
})


