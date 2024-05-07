import '@radix-ui/themes/styles.css';
import { Theme, ThemePanel } from '@radix-ui/themes';
import { Flex, Text, Tabs, Box, Container, Section } from '@radix-ui/themes';
import Home from './Home';
import Flask from './Flask';

function App() {

  return (
    <>
      <Theme accentColor="gray">
    
        <Flex direction="column" gap="1">

          <Tabs.Root defaultValue="Home">
            <Container size={'4'}>
              <Tabs.List>
                <Tabs.Trigger value="Home">Home</Tabs.Trigger>
                <Tabs.Trigger value="Flask test">Flask Test</Tabs.Trigger>
              </Tabs.List>
            
              <Box pt="3">
                <Tabs.Content value="Home">
                  <Section>
                    <Home/>
                  </Section>
                </Tabs.Content>

                <Tabs.Content value="Flask test">
                  <Flask/>
                </Tabs.Content>
              </Box>
            </Container>
          </Tabs.Root>
        </Flex>
      </Theme>
    </>
  )
}

export default App
