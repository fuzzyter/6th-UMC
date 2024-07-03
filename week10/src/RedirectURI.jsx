const getRedirectURI = () => {
    const { hostname } = window.location;
  
    if (hostname === 'localhost') {
      return 'http://localhost:5173/auth';
    } else if (hostname === 'umc-10.netlify.app') {
      return 'https://umc-10.netlify.app/auth';
    } else if (hostname === 'main--umc-10.netlify.app') {
      return 'https://main--umc-10.netlify.app/auth';
    }

  };
  
  export default getRedirectURI;