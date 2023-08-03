import { useNavigate } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setValue } from "../../redux/cashierSlice";

export const Logout = () => {
    const navigate = useNavigate()
    
    const logout = () => {
      try {
        
        localStorage.removeItem("token")
       navigate("/login")
      } catch (error) {
        console.log(error);
      }
    }
    return(
      <Text color="red" cursor="pointer" onClick={logout}>
      Logout
    </Text>
    )
}