import React, { useCallback, useRef } from 'react';
import { StyleSheet, Text, View, ViewStyle, TouchableOpacity } from 'react-native';
import PickerSelect from 'react-native-picker-select';

import { Colors } from 'shared/config';

type InputAccessoryViewProps = {
  onDone: () => void;
};

const InputAccessoryView: React.VFC<InputAccessoryViewProps> = (props) => {
  const { onDone } = props;

  return (
    <View style={styles.inputAccessoryView}>
      <TouchableOpacity onPress={onDone} activeOpacity={0.4} hitSlop={{ top: 4, right: 4, bottom: 4, left: 4 }}>
        <Text style={styles.done}>Готово</Text>
      </TouchableOpacity>
    </View>
  );
};

type SelectFieldProps = {
  items: Array<{ label: string; value: string | number }>;
  onChange: (value: string | number | null) => void;
  placeholder?: string;
  value?: string | number | null;
  style?: ViewStyle;
};

const SelectField: React.VFC<SelectFieldProps> = (props) => {
  const { onChange, value, items, style, placeholder = 'Выберите значение...' } = props;
  const ref = useRef<PickerSelect>(null);

  const handleClose = useCallback(() => {
    if (ref.current) {
      ref.current.togglePicker(true);
    }
  }, []);

  return (
    <PickerSelect
      placeholder={{
        label: placeholder,
        value: null,
        color: Colors.grey1,
      }}
      onValueChange={onChange}
      value={value}
      items={items}
      doneText="Готово"
      style={{
        inputAndroid: styles.input,
        inputIOS: styles.input,
        placeholder: styles.placeholder,
        viewContainer: style,
      }}
      InputAccessoryView={() => <InputAccessoryView onDone={handleClose} />}
      ref={ref}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 12,
    fontFamily: 'Roboto-Regular',
    color: Colors.black2,
    fontSize: 16,
    borderWidth: 1,
    borderColor: Colors.grey1,
    borderRadius: 8,
    width: '100%',
    height: 40,
  },
  placeholder: {
    fontFamily: 'Roboto-Regular',
    color: Colors.grey1,
    fontSize: 16,
  },
  inputAccessoryView: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#dedede',
    zIndex: 2,
  },
  done: {
    color: '#007aff',
    fontWeight: '600',
    fontSize: 17,
    paddingTop: 1,
    paddingRight: 11,
  },
});

export default SelectField;
