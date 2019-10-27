import React, { useMemo } from 'react';
import { parseISO, formatDistance } from 'date-fns';
// import pt from 'date-fns/locale/pt';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

export default function Appointment({ data, onCancel }) {
  const dateParsed = useMemo(() => {
    return formatDistance(parseISO(data.date), new Date(), {
      addSuffix: true,
    });
  }, [data.date]);

  // because the image address comes with localhost, http://localhost:3332/files/e928783c449ea297d18b5651db6c4eae.jpg, it needs to be replaced by the address our emulator uses
  function formatImageURL(url) {
    const urlSplitted = url.split(''); // turns string into an array so that we can use the splice method
    urlSplitted.splice(
      7,
      9,
      ['1'],
      ['0'],
      ['.'],
      ['0'],
      ['.'],
      ['2'],
      ['.'],
      ['2']
    );
    return urlSplitted.join('');
  }
  return (
    <Container past={data.past}>
      <Left>
        <Avatar
          source={{
            uri: data.provider.avatar
              ? formatImageURL(data.provider.avatar.url)
              : `https://api.adorable.io/avatar/50/${data.provider.name}.png`,
          }}
        />
        <Info>
          <Name> {data.provider.name} </Name>
          <Time>{dateParsed}</Time>
        </Info>
      </Left>
      {data.cancelable && !data.canceled_at && (
        <TouchableOpacity onPress={onCancel}>
          <Icon name="event-busy" size={20} color="#f64c75" />
        </TouchableOpacity>
      )}
    </Container>
  );
}
