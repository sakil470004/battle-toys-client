import {useContext,useState} from 'react';
import { Link ,useNavigate,useLocation} from 'react-router-dom';
import AuthContext from '../../providers/AuthProvider.jsx'
const Login = () => {
   
   
    // const { signIn, googleLogin } = useContext(AuthContext);
    // const navigate = useNavigate();
    // const location = useLocation();
    // const [error, setError] = useState('')

    // const from = location.state?.from?.pathname || '/';


    // const handleSubmit = event => {
    //     event.preventDefault();

    //     const form = event.target;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(email, password);
    //     setError('')
    //     signIn(email, password)
    //         .then(result => {
    //             const loggedUser = result.user;
    //             console.log(loggedUser)
    //             // form.reset();
    //             toast.success(`Login Success`)
    //             navigate(from, { replace: true })
    //         })
    //         .catch(error => {
    //             console.log(error);
    //             setError(error.message)
    //         })
    // }
    // const handleGoogleLogin = () => {
    //     setError('')
    //     googleLogin()
    //         .then((result) => {
    //             const user = result.user;
    //             toast.success(`Login Success`)

    //             navigate(from, { replace: true })

    //         }).catch((error) => {
    //             // Handle Errors here.
    //             const errorMessage = error.message;
    //             setError(errorMessage)

    //         });
    // } // const { signIn, googleLogin } = useContext(AuthContext);
    // const navigate = useNavigate();
    // const location = useLocation();
    // const [error, setError] = useState('')

    // const from = location.state?.from?.pathname || '/';


    // const handleSubmit = event => {
    //     event.preventDefault();

    //     const form = event.target;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(email, password);
    //     setError('')
    //     signIn(email, password)
    //         .then(result => {
    //             const loggedUser = result.user;
    //             console.log(loggedUser)
    //             // form.reset();
    //             toast.success(`Login Success`)
    //             navigate(from, { replace: true })
    //         })
    //         .catch(error => {
    //             console.log(error);
    //             setError(error.message)
    //         })
    // }
    // const handleGoogleLogin = () => {
    //     setError('')
    //     googleLogin()
    //         .then((result) => {
    //             const user = result.user;
    //             toast.success(`Login Success`)

    //             navigate(from, { replace: true })

    //         }).catch((error) => {
    //             // Handle Errors here.
    //             const errorMessage = error.message;
    //             setError(errorMessage)

    //         });
    // }
    return (
        <div className="  bg-pink-50">
        <div className=" w-full md:w-1/3 mx-auto py-[35vh] md:py-52">
          
          <div className="card  shadow-2xl bg-slate-500">
            <form  className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="text-white label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered" />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-pink-100 text-black hover:bg-rose-400 hover:text-white">Login</button>
                  <p  className="lr text-white text-center">New Here ? Go to <Link className="text-pink-light" to={'/register'}>Register</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;