import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import { CinematicScreen } from '@/src/design/components/CinematicScreen';
import { PrimaryButton } from '@/src/design/components/PrimaryButton';
import { RuleBasedCoachModel } from '@/src/features/ai/coach';

const coach = new RuleBasedCoachModel();

export default function CoachScreen() {
  const [input, setInput] = useState('');
  const [reply, setReply] = useState('');

  return (
    <CinematicScreen>
      <Text className="text-4xl font-black text-white">Coach Chat</Text>
      <TextInput
        className="rounded-xl border border-white/15 p-4 text-white"
        placeholder="I feel tired"
        placeholderTextColor="#6d7380"
        value={input}
        onChangeText={setInput}
      />
      <PrimaryButton
        label="Send"
        onPress={() => {
          void coach.generateReply([{ role: 'user', content: input }]).then(setReply);
        }}
      />
      <View className="rounded-2xl border border-white/10 bg-charcoal p-4">
        <Text className="text-silver">{reply || 'Rule-based response will appear here.'}</Text>
      </View>
    </CinematicScreen>
  );
}
