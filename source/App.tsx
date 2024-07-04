import {useColorScheme} from 'react-native';
import React, {useState} from 'react';
import Calculator from './calc';
import {Box, GluestackUIProvider, Heading, Switch} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config'; // Optional if you want to use default theme

export default function SciCalc() {
  const theme = useColorScheme();
  const [calcType, setCalcType] = useState(false);
  const [calcTypeText, setCalcTypeText] = useState('ساده');
  return (
    <GluestackUIProvider config={config}>
      <Box
        bg="$blueGray600"
        p="$5"
        flexDirection="row-reverse"
        justifyContent="space-between">
        <Heading color="white">ماشین حساب {calcTypeText}</Heading>
        <Box mt={5}>
          <Switch
            size="md"
            isDisabled={false}
            value={calcType}
            defaultValue={false}
            onToggle={() => {
              setCalcType(!calcType);
              calcType ? setCalcTypeText('ساده') : setCalcTypeText('مهندسی');
            }}
          />
        </Box>
      </Box>
      <Box flex={1}>
        <Calculator
          showLiveResult={true}
          scientific={calcType}
          haptics={false}
          theme={theme}
          customize={{
            borderRadius: 5,
            spacing: 3,
          }}
          history={undefined}
          showTooltip={undefined}
        />
      </Box>
      <Box
        bg="$blueGray600"
        p="1"
        flexDirection="row-reverse"
        justifyContent="center"
        alignItems="center">
        <Heading color="white">نسخه 1.0</Heading>
      </Box>
    </GluestackUIProvider>
  );
}
