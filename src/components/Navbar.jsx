import React from 'react';
import styles from "../components/Navbar.module.css";
import { Button, ButtonGroup } from '@chakra-ui/react';
import { BellIcon } from '@chakra-ui/icons'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.left}>
            <img className={styles.img} src="https://www.wework4days.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fassets%2Fimages%2Flogo.4cc40a9ad62028ac0ab9af556de0b081.svg&w=32&q=75" alt="" />
        </div>
        <div className={styles.right}>
                <Button colorScheme='teal' variant='ghost'>
                 Sign In
                </Button>
                <Button colorScheme='teal' variant='outline'>
                  Sign Up
                </Button>
                <Button rightIcon={<BellIcon />} color="white"  _hover={{
    bgGradient: 'linear(to-r, red.500, yellow.500)',
  }} bgGradient='linear(to-r, teal.500, green.500)'  variant='outline'>
                  Post a Job
                </Button>
        </div>
    </div>
  )
}

export default Navbar