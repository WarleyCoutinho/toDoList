import { View, Text } from 'react-native';

type Props = {
  title: string;
};

export const Header = ({ title }: Props) => {
  return (
    <View className=" h-32 bg-GRAY-700">
      <Text className="mt-14 mb-12 text-center text-GRAY-100 font-BOLD text-LG">
        {title}
      </Text>
    </View>
  );
};
