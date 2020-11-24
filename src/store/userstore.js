import { get, observable } from "mobx";

const userstore = observable({
    FBUser: {},

    addFBUser(user) {
        if (!this.FBUser) {
            this.FBUser = user;
            console.log("added user : ", this.FBUser);
        } else if (user != this.FBUser) {
            this.FBUser = user;
        } else {
            console.log("User is already exist");
        }
    },
});

export { userstore };
