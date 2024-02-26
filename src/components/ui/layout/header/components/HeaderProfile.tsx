import { JSX } from 'react';
import { Flex, Image, Text } from '@mantine/core';

function HeaderProfile(): JSX.Element {
  return (
    <Flex gap="md" align="center">
      <Flex direction="column">
        <Text size="md">
          Beka Dvali
        </Text>
        <Text size="md" c="gray">
          Tbilisi, Georgia
        </Text>
      </Flex>
      <Image w={46} h={46} radius="xl" src="/images/profile.gif" />
    </Flex>
  );
}

export default HeaderProfile;
