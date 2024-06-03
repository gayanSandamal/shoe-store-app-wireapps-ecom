import { Colors } from "@/constants/Colors"
import { ImageBackground, View, Text } from "react-native"
import { useColorScheme } from '@/hooks/useColorScheme';
import { BtnLink } from "../Base/Button";

export const Vivid = (props: any) => {
  const { title, subtitleLine1, subtitleLine2, button, bgImgUri = '' } = props;
  const colorScheme = useColorScheme();
  return (<View className="overflow-hidden overflow-hidden rounded-xl" style={{ backgroundColor: Colors[colorScheme ?? 'light'].primary }}>
    <ImageBackground className='p-6' style={{ borderRadius: 20 }} source={{ uri: bgImgUri }}>
      <View>
        {title && <Text className="mt-2 text-2xl font-medium text-white mb-4">
          {title}
        </Text>}
        {subtitleLine1 && <Text className="text-white">{subtitleLine1}</Text>}
        {subtitleLine2 && <Text className="text-white">{subtitleLine2}</Text>}
        {button.title && <View className='mt-4'>
          <BtnLink
            href={button.href}
            title={button.title}
            color={Colors[colorScheme ?? 'light'].primary}
          />
        </View>}
      </View>
    </ImageBackground>
  </View>)
}