import Head from 'next/head';
import Header from './Header';

// const layoutStyle = {
//   margin: 20,
//   padding: 20,
//   border: '1px solid #DDD'
// };

const bodyStyle = {
  padding: 10,
  fontFamily: 'Roboto'
}

const Layout = props => (
  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    </Head>
    <Header />
    <div style={bodyStyle}>
      {props.children}
    </div>
    <style jsx global>{`
      body { 
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>
);

export default Layout;
