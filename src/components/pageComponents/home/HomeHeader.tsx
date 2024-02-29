/* eslint-disable import/no-unresolved */
/// <reference types="vite-plugin-svgr/client" />
import { Avatar, Text, Title } from '@mantine/core';
import { JSX } from 'react';
import Pencil from '../../../assets/svgs/pencil.svg?react';
import LinkSvg from '../../../assets/svgs/link.svg?react';

export default function HomeHeader(): JSX.Element {
  return (
    <div className="flex justify-between flex-1">
      <div className="flex gap-5 items-center">
        <Title order={1}>
          Mobile App
        </Title>
        <Avatar color="#5030E5" radius="sm" size="sm">
          <Pencil />
        </Avatar>
        <Avatar color="#5030E5" radius="sm" size="sm">
          <LinkSvg />
        </Avatar>
      </div>
      <div className="flex gap-3 items-center">
        <Avatar color="#5030E5" radius="sm" size="sm" className="text-base">
          <div className="plus" />
        </Avatar>
        <Text c="#5030E5">
          Invite
        </Text>
        <Avatar.Group>
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar color="#D25B68">
            <Text c="#D25B68">+5</Text>
          </Avatar>
        </Avatar.Group>
      </div>
    </div>
  );
}
