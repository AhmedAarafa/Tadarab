import '../styles/globals.css'
import "swiper/css/bundle";
import type { AppProps } from 'next/app'
import 'normalize.css';
import {Provider, useDispatch} from 'react-redux';
import {store} from "configurations/redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return   <Provider store={store}> <Component {...pageProps} /></Provider> 
}

export default MyApp
