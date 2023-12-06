import {
    Box,
    Container,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
} from "@chakra-ui/react";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

function Homepage() {
    const navigate = useNavigate();
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userInfo"));

        if (user) navigate("/profile");
    }, [navigate]);

    return (
        <Container maxW="xl" centerContent>

            <Box bg="white" opacity={"0.5"} w={"30%"} borderRadius="4px " borderWidth="1px">
                <Tabs isFitted variant="soft-rounded">
                    <TabList display="flex" justifyContent={"space-between"} mb="1em">
                        <Tab bg="#C0C0C0" w={"30%"} color={"black"}>Login</Tab>
                        <Tab bg="#C0C0C0" w={"30%"} color={"black"}>Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <SignUp />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    );
}

export default Homepage;
