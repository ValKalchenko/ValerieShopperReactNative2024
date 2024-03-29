import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    paddingBottom: 5,
  },
  name: {
    fontSize: 18,
    marginLeft: 10,
    flex: 1,
    flexWrap: 'wrap',
    fontWeight: 'bold',
  },
  store: {
    fontSize: 18,
    marginLeft: 10,
    flex: 1,
    flexWrap: 'wrap',
  },
  date: {
    fontSize: 18,
    marginLeft: 1,
    marginRight: 7,
    flex: 1,
    flexWrap: 'wrap',
  },
  priorityStyle: {
    color: 'white',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default styles;