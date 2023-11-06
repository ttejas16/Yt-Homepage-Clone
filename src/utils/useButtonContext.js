import { useContext } from "react";
import { ButtonContext } from "./buttonContext";


function useButtonContext() {
    return useContext(ButtonContext);
}

export { useButtonContext };
