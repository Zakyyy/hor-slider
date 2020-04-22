import React from 'react';
import { FlatList, TouchableOpacity, Image, View, Text, StyleSheet, Alert } from 'react-native';
import PropTypes from 'prop-types'
import Star from 'react-native-star-view';
export default class HorizontalSlider extends React.Component {
  renderItem({ item }) {
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.buttonStyle}
        onPress={() => Alert.alert('', `${item.image.uri}`)}
      >
        <Image
          source={item.image}
          style={styles.imageStyle}
        />
        <View style={styles.dataContainer}>
          <Text style={styles.categoryStyle}>{item.category}</Text>
          <Star score={item.rating} style={styles.starStyle} />
          <Text style={styles.titleStyle} >{item.title}</Text>

        </View>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <FlatList
        {...this.props}
        data={this.props.data}
        keyExtractor={({ id }) => id}
        renderItem={this.renderItem.bind(this)}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    )
  }
}

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
  }
})

HorizontalSlider.propTypes = {
  data: PropTypes.array.isRequired
};