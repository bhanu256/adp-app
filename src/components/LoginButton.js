import {Text, View, Button, StyleSheet} from 'react-native';
import React, {Component} from 'react';

class LoginButton extends Component {
  constructor(props) {
    super(props);
  }

  onClick(props) {
    props.callBack(props.title);
  }

  render() {
    return (
      <View style={[styles.container]}>
        <Button
          style={[styles.button]}
          onPress={() => this.onClick(this.props)}
          title={this.props.title}
        />
      </View>
    );
  }
}

// function onClick(props) {
//   props.callBack(props.title);
// }

// const LoginButton = (props) => {
//   return (
//     <View style={[styles.container]}>
//         <Button
//           onPress={() => onClick(props)}
//           title={props.title}
//         />
//       </View>
//   )
// }

const styles = StyleSheet.create({
  container: {
    width: '80%'
  },
  button: {
    
  }
});

export default LoginButton;
