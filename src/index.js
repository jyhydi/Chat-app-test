import React, { useState, useEffect } from "react";
import { Alert } from "react-native";

import Loader from "./components/Loader";
import Hooks from "./hooks/Hooks";

import { firebaseService } from "./services";
import useStore from "~/useStore";

const { userstore } = useStore();
export default App = () => {
    const [user, setUser] = useState([]);

    useEffect(async () => {
        try {
            const FBUser = await firebaseService.signIn();
            setUser(FBUser);
            userstore.addFBUser(FBUser);
            const mobxuser = await userstore.FBUser;
            console.log("stored : ", mobxuser);
        } catch (error) {
            Alert.alert("Something went wrong");
        }
    }, []);
    if (!user) {
        return <Loader />;
    }
    return (
        <>
            <Hooks />
        </>
    );
};
