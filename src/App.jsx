import '@radix-ui/themes/styles.css';
import { Theme, ThemePanel } from '@radix-ui/themes';
import { Flex, Text, Tabs, Box, Container, Section } from '@radix-ui/themes';
import Home from './Home';

function App() {

  return (
    <>
      <Theme appearance="dark" accentColor="gray">
    
        <Flex direction="column" gap="1">

          <Tabs.Root defaultValue="Home">
            <Container size={'4'}>
              <Tabs.List>
                <Tabs.Trigger value="Home">Home</Tabs.Trigger>
                <Tabs.Trigger value="About me">About me</Tabs.Trigger>
              </Tabs.List>
            
              <Box pt="3">
                <Tabs.Content value="Home">
                  <Section>
                    <Home/>
                  </Section>
                </Tabs.Content>

                <Tabs.Content value="About me">
                  <Text size="2">Access and update your documents.</Text>
                </Tabs.Content>
              </Box>
            </Container>
          </Tabs.Root>
        </Flex>
        <ThemePanel/>
      </Theme>
    </>
  )
}

export default App
