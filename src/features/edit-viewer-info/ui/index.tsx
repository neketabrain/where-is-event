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
  const { viewer, style } = props;

  const [firstName, setFirstName] = useState<string>(viewer.firstName);
  const [lastName, setLastName] = useState<string>(viewer.lastName);
  const [gender, setGender] = useState<string | number | null>(viewer.gender || null);
  const [birthdate, setBirthdate] = useState<Date | undefined>(
    viewer.birthdate ? new Date(viewer.birthdate) : undefined,
  );

  const lastNameRef = useRef<TextInput>(null);

  return (
    <View style={style}>
      <TextField
        placeholder="Имя"
        onSubmitEditing={() => lastNameRef.current?.focus()}
        returnKeyType="next"
        textContentType="name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextField
        placeholder="Фамилия"
        style={styles.field}
        ref={lastNameRef}
        textContentType="familyName"
        returnKeyType="next"
        value={lastName}
        onChangeText={setLastName}
      />
      <SelectField placeholder="Пол" style={styles.field} items={GENDERS} onChange={setGender} value={gender} />
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
