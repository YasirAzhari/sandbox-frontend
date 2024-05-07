import { Flex, Text, Button, Tabs, Heading, Box, RadioCards, Container, Section, Grid, AlertDialog } from '@radix-ui/themes';
import sand from './assets/sand.png'
import fang from './assets/fang.png'

export default function Home() {
  return (
    <>
        <Grid columns={"2"}>
            <Flex direction={"column"} gap={"8"}>
                <Heading size={"9"}>Welcome to the sandbox</Heading>
                <Text >I'm gonna be dumping all the little thingamajigs, trinkets, doo-dads and whatcha-ma-call-its that I come up with into this here website. I'll just add a new tab whenever something comes up.</Text>
                <Box>
                <AlertDialog.Root>
                <AlertDialog.Trigger>
                    <Button >Contact me!</Button>
                </AlertDialog.Trigger>
                <AlertDialog.Content maxWidth="450px">
                    <AlertDialog.Title>Fuck You</AlertDialog.Title>
                    <AlertDialog.Description size="2">
                    Don't you EVER try to contact me again. Who do you think you are?
                    </AlertDialog.Description>

                    <Flex gap="3" mt="4" justify="end">
                    <AlertDialog.Cancel>
                        <Button variant="soft" color="gray">
                        Sorry
                        </Button>
                    </AlertDialog.Cancel>
                    </Flex>
                </AlertDialog.Content>
                </AlertDialog.Root>
                </Box>
            </Flex>
            <Box >
                <img src= {sand} width={'500px'}/>
            </Box>
            
        </Grid>
        <Box height={'100px'}></Box>
        <img src={fang} width={'100%'}></img>
    </>
  )
}
