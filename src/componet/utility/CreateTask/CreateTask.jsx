import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Input,
    VStack,
  } from '@chakra-ui/react'
import { useState } from 'react'
 const taskObj = {
    tname:"",
    tlink:"",
    tins:"",
    txp:""
  }
export default function CreateTask({setTasks}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    let [task,setTask] =useState(taskObj)

    const handleChange=(e)=>{

        setTask((prev)=>{
            return {...prev,[e.target.name]:e.target.value}
        })
        console.log(task)
    }
    const createTask =()=>{
        let taskinfo = ""
        let i =0
        for(let x in task){
            if(i<3){
                taskinfo+=task[x]+"~"
            }else{
                taskinfo+=task[x]
            }
            i++
        }
        setTasks((prev)=>[...prev,taskinfo])
        onClose()

    }


    return (
      <>
        <Button onClick={onOpen}>Create Task</Button>
  
        <Modal  isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent margin={"16px"} bg="#111315">
            <ModalHeader>Create New Task</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <VStack>
                <Input name="tname" placeholder='Task name'  onChange={handleChange}></Input>
                <Input name="tlink"  placeholder='Task Link' onChange={handleChange}></Input>
                <Input name="tins"  placeholder='Task Instruction' onChange={handleChange}></Input>
                <Input name="txp"  placeholder='Task xp' onChange={handleChange}></Input>
                </VStack>

            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost' onClick={createTask}>Add</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }