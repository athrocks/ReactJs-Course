import React from "react";

const UserContext = React.createContext();

export default UserContext;

// We did create Context.
// What context gives us is Provider because it is providing us a variable. 
// Then we add use it as Wrapper and whichever components are wrapped in that provider gets access to that context.

/*
<UserContext> <------------- wrapper so it becomes provider.
    <Login/> 
    <Card>
        <Data/>
    </Card>
</UserContext>
*/

// All variables inside this wrapper gets global access to userContext variable.