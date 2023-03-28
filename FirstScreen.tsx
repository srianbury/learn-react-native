import { useState } from "react";
import { Image, ScrollView, Text } from "react-native";

type Logo = {
  uri: string;
  width: number;
  height: number;
};

const logo: Logo = {
  uri: "https://reactnative.dev/img/tiny_logo.png",
  width: 64,
  height: 64,
};

type TextStyle = {
  fontSize: number;
};

const textStyle: TextStyle = {
  fontSize: 96,
};

function ReactTinyLogo(): JSX.Element {
  return <Image source={logo} />;
}

type LargeTextProps = {
  children: any;
};
function LargeText({ children }: LargeTextProps): JSX.Element {
  return <Text style={textStyle}>{children}</Text>;
}

function FirstScreen(): JSX.Element {
  return (
    <ScrollView>
      <LargeText>Scroll me plz</LargeText>
      <ReactTinyLogo />
      <ReactTinyLogo />
      <ReactTinyLogo />
      <ReactTinyLogo />
      <ReactTinyLogo />
      <LargeText>If you like</LargeText>
      <ReactTinyLogo />
      <ReactTinyLogo />
      <ReactTinyLogo />
      <ReactTinyLogo />
      <ReactTinyLogo />
      <LargeText>Scrolling down</LargeText>
      <ReactTinyLogo />
      <ReactTinyLogo />
      <ReactTinyLogo />
      <ReactTinyLogo />
      <ReactTinyLogo />
      <LargeText>What's the best</LargeText>
      <ReactTinyLogo />
      <ReactTinyLogo />
      <ReactTinyLogo />
      <ReactTinyLogo />
      <ReactTinyLogo />
      <LargeText>Framework around?</LargeText>
      <ReactTinyLogo />
      <ReactTinyLogo />
      <ReactTinyLogo />
      <ReactTinyLogo />
      <ReactTinyLogo />
      <LargeText>React Native</LargeText>
    </ScrollView>
  );
}

export { FirstScreen };
