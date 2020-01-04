import Axios from 'axios';

export default Axios.create({
    // `baseURL` will be prepended to `url` unless `url` is absolute.
    // It can be convenient to set `baseURL` for an instance of axios
    // to pass relative URLs to methods of that instance.
    baseURL: `${root_url}/`,

    // `withCredentials` indicates whether or not cross-site
    // Access-Control requests should be made using credentials
    withCredentials: true, // default
});
