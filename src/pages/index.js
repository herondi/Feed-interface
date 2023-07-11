import React from "react";
import { Box, HStack, Pressable, Icon, Avatar, FlatList } from "native-base";
import { Feather } from '@expo/vector-icons';
import Storys from "../components/Storys";



const data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullname: "Aafreen Khan",
    timeStamp: "12:47 pm",
    recentText: "Good Day!",
    avatarUrl: "https://github.com/herondi/Feed-interface/blob/56361b927c7c03c7e268b7e43defcec00a0ea11f/src/img/cat-07.jpg?raw=true"
  },
  {
    id: "cd7acbea-c1b1-46c2-aed5-3ad53abb28bb",
    fullname: "John Doe",
    timeStamp: "2:30 pm",
    recentText: "Hello World!",
    avatarUrl: "https://github.com/herondi/Feed-interface/blob/56361b927c7c03c7e268b7e43defcec00a0ea11f/src/img/head-04.jpg?raw=true"
  },
  {
    id: "dd7acbea-c1b1-46c2-aed5-3ad53abb28bc",
    fullname: "Jane Smith",
    timeStamp: "4:15 pm",
    recentText: "How are you doing?",
    avatarUrl: "https://github.com/herondi/Feed-interface/blob/56361b927c7c03c7e268b7e43defcec00a0ea11f/src/img/man-05.jpg?raw=true"
  },
  {
    id: "ed7acbea-c1b1-46c2-aed5-3ad53abb28bd",
    fullname: "Bob Johnson",
    timeStamp: "6:00 pm",
    recentText: "What's up?",
    avatarUrl: "https://github.com/herondi/Feed-interface/blob/56361b927c7c03c7e268b7e43defcec00a0ea11f/src/img/mask-06.jpg?raw=true"
  },
  {
    id: "fd7acbea-c1b1-46c2-aed5-3ad53abb28be",
    fullname: "Sarah Lee",
    timeStamp: "8:45 pm",
    recentText: "Nice to meet you!",
    avatarUrl: "https://github.com/herondi/Feed-interface/blob/56361b927c7c03c7e268b7e43defcec00a0ea11f/src/img/smile-02.jpg?raw=true"
  },
  {
    id: "gd7acbea-c1b1-46c2-aed5-3ad53abb28bf",
    fullname: "David Chen",
    timeStamp: "10:30 pm",
    recentText: "How's it going?",
    avatarUrl: "https://github.com/herondi/Feed-interface/blob/56361b927c7c03c7e268b7e43defcec00a0ea11f/src/img/woman-01.jpg?raw=true"
  },
  {
    id: "hd7acbea-c1b1-46c2-aed5-3ad53abb28bg",
    fullname: "Emily Wong",
    timeStamp: "1:15 am",
    recentText: "Good night!",
    avatarUrl: "https://github.com/herondi/Feed-interface/blob/56361b927c7c03c7e268b7e43defcec00a0ea11f/src/img/woman-03.jpg?raw=true"
  },
  // adicione mais objetos aqui conforme necessário
];

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

<Box rounded="md" flexDir="row" alignItems="center">

<Pressable>

<Icon
as={Feather}
name="bell"
size={7}
color="#000"
marginRight={4}


/>
</Pressable>

<Pressable>

<Avatar
  source={{ uri: 'https://raw.githubusercontent.com/herondi/Feed-interface/master/src/img/jobs.jpg' }}
  height={12}
  width={12}
/>
</Pressable>
</Box>

      </HStack>

      <Box paddingX={4}>


      <FlatList

horizontal={true}
data={data}
renderItem={ ({item}) => <Storys data={item}/> }
showsHorizontalScrollIndicator={false}



/>
      </Box>

    </Box>
  );
}