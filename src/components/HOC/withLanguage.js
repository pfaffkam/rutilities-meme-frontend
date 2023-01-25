import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageProvider';

const withLanguage = (WrappedComponent) => {
  return (props) => {
    const { language } = useContext(LanguageContext);

    const texts = {
      en: {
        sortMemes: 'Sort memes',
        browse: 'Browsing memes',
        email: 'Email address',
        password: 'Password',
        confirmPassword: 'Confirm password',
        register: 'Register',
        back: 'Backt to login form',
        logIn: 'Log in',
        remindPassword: 'Remind password',
        sendPassword: 'Send password reset link',
        forgetPassword: 'Forget password?',
        missing: "We've lost you, go back to the",
        mainPage: 'Main page',
        or: 'or',
        category: 'Category',
        type: 'Type',
        sort: 'Sort',
        unauthorized: 'you shall not pass!!',
        sfw: 'SFW',
        nsfw: 'NSFW',
        cropped: 'Cropped',
        unCropped: 'Uncropped',
        meme: 'Meme',
        notMeme: 'Not Meme'
      },
      pl: {
        sortMemes: 'Sortuj memy',
        browse: 'Przeglądaj memy',
        email: 'Adres email',
        password: 'Hasło',
        confirmPassword: 'Potwierdź hasło',
        register: 'Zajerestruj',
        back: 'Cofnij do logowania',
        logIn: 'Zaloguj',
        remindPassword: 'Przypomnij hasło',
        sendPassword: 'Wyślij link do resetowania hasła',
        forgetPassword: 'Zapomniałeś hasła?',
        missing: 'Straciliśmy cię, wróć do',
        mainPage: 'Głównej strony',
        or: 'Albo',
        category: 'Kategoria',
        type: 'Typ',
        sort: 'Sortuj',
        unauthorized: 'nie przejdziesz!',
        sfw: 'Bezpieczny',
        nsfw: 'Niebezpieczny',
        cropped: 'Przycięty',
        unCropped: 'Nieprzycięty',
        meme: 'Mem',
        notMeme: 'to nie Mem'
      }
    };

    return (
      <div>
        <WrappedComponent {...props} language={language} texts={texts[language]} />
      </div>
    );
  };
};
export default withLanguage;
