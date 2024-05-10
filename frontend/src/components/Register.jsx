import React,{useState} from 'react'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'


const backendUrl = import.meta.env.VITE_BACKEND_URL
const Register = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
        }

        const response = await fetch(backendUrl+'/api/user/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name,email, password })
        });

        if (response.ok) {
        alert('Account created successfully!');
        navigate('/')
        } else {
        alert('Failed to create account.');
        }
    }  
  return (
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold  text-white">
                <img class="w-8 h-8 mr-2" src={logo} alt="logo"/>
                 Tasker   
            </a>
            <div class="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                        Create an account
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                        <div>
                            <label for="name" class="block mb-2 text-sm font-medium  text-white">Your Name</label>
                            <input type="text" name="name" id="name" class="   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="your name" required="" value={name} onChange={e => setName(e.target.value)}/>
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium  text-white">Your email</label>
                            <input type="email" name="email" id="email" class="   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@company.com" required="" value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium  text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" class=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" value={password} onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <div>
                            <label for="confirm-password" class="block mb-2 text-sm font-medium  text-white">Confirm password</label>
                            <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" class=" border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
                        </div>
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border  rounded ocus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800" required=""/>
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="terms" class="font-light text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline text-primary-500" href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                        <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">Create an account</button>
                        <p class="text-sm font-light  text-gray-400">
                            Already have an account? <a href="#" class="font-medium text-primary-600 hover:underline text-primary-500">Login here</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
   
  )
}

export default Register