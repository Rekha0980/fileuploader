import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import {Link, useNavigate} from "react-router-dom"
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
const navigate=useNavigate()
  const handlesubmit = (e) => {
      e.preventDefault()
      const payload = {
          email,
          pass,
      }
      //console.log(payload)
      fetch("https://daylogic-s1id.onrender.com/users/login", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
              "Content-type": "application/json"
          }
      }).then(res =>res.json())
          .then((res=>{
            if(res.token){
                alert(res.mess)
                localStorage.setItem("token", (res.token))
                navigate("/alldata")
                } 
                else {
                  alert(res.err)
                }
          }))
          .catch(err => console.log(err))
  }


  return (
      <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}>
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
              <Stack align={'center'}>
                  <Heading fontSize={'4xl'} textAlign={'center'}>
                      Login
                  </Heading>
                  <Text fontSize={'lg'} color={'gray.600'}>
                      to enjoy all of our cool features ✌️
                  </Text>
              </Stack>
              <Box
                 width={"120%"}
                  bg={useColorModeValue('white', 'gray.700')}
                  boxShadow={'lg'}
                  p={8} >
                  <Stack spacing={4}>
                      <form onSubmit={handlesubmit}>
                          
                          <FormControl id="email" isRequired>
                              <FormLabel>Email address</FormLabel>
                              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                          </FormControl>
                          <FormControl id="password" isRequired>
                              <FormLabel>Password</FormLabel>
                              <InputGroup>
                                  <Input type={showPassword ? 'text' : 'password'} value={pass} onChange={(e) => setPass(e.target.value)} />
                                  <InputRightElement h={'full'}>
                                      <Button
                                          variant={'ghost'}
                                          onClick={() =>
                                              setShowPassword((showPassword) => !showPassword)
                                          }>
                                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                      </Button>
                                  </InputRightElement>
                              </InputGroup>
                          </FormControl>
                          <Stack spacing={10} pt={2}>
                              <Button
                                  type='submit'
                                  loadingText="Submitting"
                                  size="lg"
                                  bg={'blue.400'}
                                  color={'white'}
                                  _hover={{
                                      bg: 'blue.500',
                                  }}>
                                  Login
                              </Button>
                          </Stack>
                      </form>
                      <Stack pt={6}>
                          <Text align={'center'}>
                              Create an account? <Link to={"/signup"}><span style={{color:"blue"}}>Signup</span></Link>
                          </Text>
                      </Stack>
                  </Stack>
              </Box>
          </Stack>
      </Flex>
  );
}