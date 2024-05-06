import Views from './src/components/Views';
import FlexProp from './src/components/FlexProp';
import CommonButton from './src/components/CommonButton';
import Hooks from './src/components/Hooks';
import HooksPart2 from './src/components/HooksPart2';
import HooksPart3 from './src/components/HooksPart3';
import HooksPart4 from './src/components/HooksPart4';
import WelcomeIntro from './src/components/WelcomeIntro';
import FlatListDemo2 from './src/components/FlatListDemo2';
import TextFlatListDemo3 from './src/components/TextFlatListDemo3';
import InputsEvents from './src/components/InputsEvents';
import OTPDemo from './src/components/OTPDemo';
import Buttons from './src/components/Buttons';
import Modals from './src/components/Modals';

const App = () => {

  return (
    <>
      {/* react native view */}
      {/* <Views/> */}


      {/* flex properties */}
      {/* <FlexProp /> */}


      {/* customizable button with events */}
      {/* <CommonButton
        PressBtn={() => console.log('hello')}
        title={'first btn'}
        bg={'blue'}
        h={40}
        w={100}
        br={''}
        color={'white'}
      /> */}

      {/* Hooks part 1 useEffect() */}
      {/* <Hooks/> */}

      {/* Hooks part 2 useRef() */}
      {/* <HooksPart2/> */}

      {/* Hooks part 3 useReducer() */}
      {/* <HooksPart3/> */}

      {/* Hooks part 4 useCallback() */}
      {/* <HooksPart4/> */}

      {/* welcome intro FlateList part 1  */}
      {/* <WelcomeIntro/> */}

      {/* FlateList part 2  */}
      {/* <FlatListDemo2/> */}

      {/* text horixontal flex wrap use part 3  */}
      {/* <TextFlatListDemo3/> */}

      {/* text inputs and events  */}
      {/* <InputsEvents/> */}

      {/* OTP DEMO   */}
      {/* <OTPDemo/> */}
      
      {/* Buttons Rect native   */}
      {/* <Buttons/> */}

      {/* Modals react native   */}
      <Modals/>


    </>
  );
};

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
