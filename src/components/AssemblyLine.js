import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
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

  const addItem = () => {
    const newStageBuckets = [...stagesBuckets];
    newStageBuckets[0] = [textInput, ...newStageBuckets[0]];
    setStagesBuckets(newStageBuckets);
    setTextInput('');
  };

  const moveForward = (value, stageIndex, index) => {
    const newStageBuckets = [...stagesBuckets];
    newStageBuckets[stageIndex].splice(index, 1);

    const nextStep = stageIndex + 1;
    if (nextStep < stagesBuckets.length) {
      newStageBuckets[nextStep].unshift(value);
    }
    setStagesBuckets(newStageBuckets);
  };

  const moveBackward = (value, stageIndex, index) => {
    const newStageBuckets = [...stagesBuckets];
    newStageBuckets[stageIndex].splice(index, 1);

    const prevStep = stageIndex - 1;
    if (prevStep >= 0) {
      newStageBuckets[prevStep].push(value);
    }
    setStagesBuckets(newStageBuckets);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Button onPress={addItem} title="Add Item" testID="add-new-item" />
        <TextInput
          placeholder="text"
          onChangeText={input => setTextInput(input)}
          style={styles.textInput}
          value={textInput}
          testID="new-item"
        />
      </View>
      <View style={styles.bucketsContainer}>
        {stages.map((stage, stageIndex) => (
          <View style={styles.buckets} key={stage} testID="stage">
            <Text>{stage}</Text>
            {stagesBuckets[stageIndex].map((value, index) => (
              <TouchableWithoutFeedback
                onPress={() => moveForward(value, stageIndex, index)}
                onLongPress={() => moveBackward(value, stageIndex, index)}
                key={index}
                testID="item">
                <Text>{value}</Text>
              </TouchableWithoutFeedback>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default AssemblyLine;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    padding: 16,
    alignItems: 'flex-start',
  },
  bucketsContainer: {
    flexDirection: 'row',
  },
  textInput: {
    borderWidth: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexGrow: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 24,
  },
  buckets: {
    flex: 1,
    alignSelf: 'stretch',
  },
});
