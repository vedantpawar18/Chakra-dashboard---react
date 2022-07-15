import { Box } from '@chakra-ui/react'
import React from 'react';
import styles from "../components/Dashboard.module.css";
import { Text } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { SunIcon,ChevronRightIcon,LinkIcon } from '@chakra-ui/icons'

const Dashboard = () => {
  return (
    <div>
       <div className={styles.container}>
       <h1 style={{color:"linear(to-r, red.500, yellow.500)"}}>Find The Right
Four-Day Week Job</h1>
         <Input placeholder='Type keyword or job role' size='md' />
       </div>
       <div className={styles.btn}>
       <Button leftIcon={<SunIcon />} colorScheme='purple' variant='solid'>
            Remote
        </Button>
        <Button leftIcon={<ChevronRightIcon />} colorScheme='purple' variant='solid'>
    Tech
  </Button><Button leftIcon={<LinkIcon />} colorScheme='purple' variant='solid'>
    Marketing
  </Button>
       </div>
    </div>
  )
}

export default Dashboard