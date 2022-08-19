import { Box, IconButton, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <IconButton
        aria-label='dark'
        bg='transparent'
        fontSize='lg'
        icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />}
        onClick={toggleColorMode}
      />
    </Box>
  );
}

//DZ: below is an example of how to use the ThemeSwitcher based on a custom Store implementation
// import { useEffect, useState } from 'react';
// import utilStyles from '../styles/utils.module.css';
// import useStore from '../store/store';

// const ThemeSwitcher = () => {
//   const color = useStore((state) => state.color);
//   const [myColor, setMyColor] = useState('');
//   const changeColor = useStore((state) => state.changeColor);

//   useEffect(() => {
//     setMyColor(color);
//   }, [color]);

//   return (
//     <div>
//       {/* <style jsx global>{`
//         body {
//           background: ${myColor};
//           color: ${myColor === 'black' ? 'white' : 'black'};
//         }
//       `}</style> */}
//       <section>
//         <div onClick={changeColor} className={utilStyles.pointer}>
//           Change Theme: {myColor === 'black' ? 'Day' : 'Night'}
//         </div>
//       </section>
//     </div>
//   );
// };

export default ThemeSwitcher;
