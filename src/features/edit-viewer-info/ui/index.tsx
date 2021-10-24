import React, { useRef, useState } from 'react';
import { StyleSheet, View, StyleProp, ViewStyle, TextInput } from 'react-native';

import { Viewer } from 'shared/api/viewer';
import { TextField, Button, DateField, SelectField } from 'shared/ui';

import { GENDERS } from '../config';

type EditViewerInfoProps = {
  viewer: Viewer;
  style?: StyleProp<ViewStyle>;
};

const EditViewerInfo: React.VFC<EditViewerInfoProps> = (props) => {
  const { style } = props;

  const lastNameRef = useRef<TextInput>(null);
  const [birthdate, setBirthdate] = useState<Date>();

  return (
    <View style={style}>
      <TextField
        placeholder="Имя"
        onSubmitEditing={() => lastNameRef.current?.focus()}
        returnKeyType="next"
        textContentType="name"
      />
      <TextField
        placeholder="Фамилия"
        style={styles.field}
        ref={lastNameRef}
        textContentType="familyName"
        returnKeyType="next"
      />
      <SelectField placeholder="Пол" style={styles.field} items={GENDERS} onChange={() => {}} />
      <DateField
        placeholder="Дата рождения"
        style={styles.field}
        value={birthdate}
        onChange={setBirthdate}
        maximumDate={new Date()}
      />
      <Button label="Сохранить" style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    marginTop: 16,
  },
  button: {
    marginTop: 32,
  },
});

export default EditViewerInfo;
