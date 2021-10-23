import React, { useMemo, useState } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import TextField from '../text-field';

type DateFieldProps = {
  value?: Date;
  onChange: (value: Date) => void;
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
        onTouchEnd={() => setOpened(true)}
      />

      <DateTimePickerModal
        onConfirm={handleChange}
        date={value}
        mode="date"
        isVisible={isOpened}
        onCancel={() => setOpened(false)}
        maximumDate={maximumDate}
        display="inline"
      />
    </>
  );
};

export default DateField;
