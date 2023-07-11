import React from "react";
import { Box, HStack, Pressable, Icon, Avatar } from "native-base";
import { Feather } from '@expo/vector-icons';

export default function Home() {
  return (
    <Box flex={1} backgroundColor="#f8f8f8" flexDirection="column">
      <HStack padding={4} w="100%" alignItems="center" justifyContent="space-between" safeArea>
        <Box>
          <Pressable>
            <Icon
              as={Feather}
              name="menu"
              size={7}
              color="#000"
            />
          </Pressable>
        </Box>
<Box>

<Pressable>
<Icon


as={Feather}
name="bell"
size={7}
color="#000"

/>


</Pressable>

<Pressable>

<Avatar
source={{uri: "      " }}


/>

</Pressable>

</Box>

      </HStack>
    </Box>
  );
}