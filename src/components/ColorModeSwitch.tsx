import { Switch, HStack, useColorMode, Text } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const msg = `Switch to ${colorMode === "dark" ? "Light Mode" : "Dark Mode"}`;

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text whiteSpace={"nowrap"}>{msg}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
