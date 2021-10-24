import React, { useMemo, useState } from 'react';
import { Keyboard, StyleProp, TextStyle } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import TextField from '../text-field';

type DateFieldProps = {
  onChange: (value: Date) => void;
  value?: Date;
  style?: StyleProp<TextStyle>;
  placeholder?: string;
  maximumDate?: Date;
};

const DateField: React.VFC<DateFieldProps> = (props) => {
  const { value, onChange, style, placeholder, maximumDate } = props;

  const serializedDate = useMemo(() => value?.toLocaleDateString('ru-RU') || '', [value]);

  const [isOpened, setOpened] = useState(false);
  const handleChange = (date: Date) => {
    setOpened(false);
    onChange(date);
  };

  return (
    <>
      <TextField
        style={style}
        value={serializedDate}
        placeholder={placeholder}
        editable={false}
        onTouchEnd={() => {
          Keyboard.dismiss();
          setOpened(true);
        }}
      />

      <DateTimePickerModal
        onConfirm={handleChange}
        date={value}
        mode="date"
        isVisible={isOpened}
        onCancel={() => setOpened(false)}
        maximumDate={maximumDate}
      />
    </>
  );
};

export default DateField;
