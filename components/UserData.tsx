import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { UserDataType } from '../types';

type PropsType = {
  data: UserDataType;
};

const UserData = ({ data }: PropsType) => {
  return (
    <Flex wrap='wrap' whiteSpace='nowrap' alignItems='top'>
      <Box flex={1} pb={4} mr={4}>
        {data?.address?.street && (
          <Text fontSize='lg'>{data.address.street}</Text>
        )}
        {data?.address?.suite && (
          <Text fontSize='lg'>{data.address.suite}</Text>
        )}

        <Flex>
          {data?.address?.city && (
            <Text fontSize='lg' paddingRight={'.5rem'}>
              {`${data.address.city},`}
            </Text>
          )}
          {data?.address?.state && (
            <Text fontSize='lg' paddingRight={'.5rem'}>
              {data.address.state}
            </Text>
          )}
          {data?.address?.zipcode && (
            <Text fontSize='lg'>{data.address.zipcode}</Text>
          )}
        </Flex>
      </Box>
      <Box
        flex='1'
        textAlign={['left', 'left', 'right', 'right', 'right']}
        pb={4}
      >
        {data?.phone && <Text fontSize='lg'>{data.phone}</Text>}
        {data?.email && (
          <Text fontSize='lg'>
            <Link
              color='teal.500'
              href={`mailto:${data.email}?subject=Mail from ${data.name} Resume Website&body=Hi ${data.name},%0D%0A%0D%0AYour resume looks Fantastic.%0D%0AI would like to hire you immediately!!!%0D%0A%0D%0ASincerely,%0D%0A<your name>`}
              isExternal
            >
              {data.email}
            </Link>
          </Text>
        )}
        {data?.website && (
          <Text fontSize='lg'>
            <Link color='teal.500' href={data.website} isExternal>
              {data.website}
            </Link>
          </Text>
        )}
      </Box>
    </Flex>
  );
};

export default UserData;
