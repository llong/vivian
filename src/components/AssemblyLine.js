import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

/**
 * stages comes from the parent component and looks like
 * ["Idea", "Development", "Testing", "Deployment" ]
 **/
const AssemblyLine = ({stages}) => {
  // an array of empty arrays representing each stage in the assembly line
  // looks like [[],[],[],[]]
  const [stagesBuckets, setStagesBuckets] = useState(
    [...Array(stages.length)].map(() => []),
  );
  const [textInput, setTextInput] = useState('');
  // TODO add your code

  const addItem = () => {
    const newStageBuckets = [...stagesBuckets];
    newStageBuckets[0] = [...newStageBuckets[0], textInput];
    setStagesBuckets(newStageBuckets);
  };

  const moveForward = (value, index) => {
    const newStageBuckets = [...stagesBuckets];
    const oldList = newStageBuckets.filter(item => item !== value);
    const newList = [value, ...stagesBuckets[index + 1]];
    newStageBuckets[index] = oldList;
    newStageBuckets[index + 1] = newList;
    setStagesBuckets(newStageBuckets);
    console.log(value, index);
  };

  console.log(stagesBuckets);

  return (
    <View style={styles.bucketsContainer}>
      <Button onPress={addItem} title="Add Item" />
      <TextInput
        placeholder="text"
        onChangeText={input => setTextInput(input)}
      />
      {stages.map((stage, index) => (
        <>
          <View>
            <Text>{stage}</Text>
            {stagesBuckets[index].map((value, index) => (
              <TouchableOpacity
                onPress={() => moveForward(value, index)}
                key={value}>
                <Text>{value}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      ))}
    </View>
  );
};

export default AssemblyLine;

const styles = StyleSheet.create({
  bucketsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 's',
    backgroundColor: 'pink',
    alignSelf: 'stretch',
    horizontalPadding: 20,
  },
});
