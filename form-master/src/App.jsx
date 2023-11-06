
import './App.css'
import Grandpa from './Components/Grandpa/Grandpa';
// import HookForm from './Components/HookForm/HookForm'
// import ReusableForm from './Components/ReusableForm/ReusableForm'
// import RefFrom from './Components/RefFrom/RefFrom'
// import StatefulForm from './Components/StatefulForm/StatefulForm'
// import SimpleFrom from './Components/SimpleForm/SimpleFrom'

function App() {
  // const handleSignUpSubmit = (data) => {
  //   console.log('Sign up data', data);
  // }
  // const handleUpdateProfile = (data) => {
  //   console.log('update profile', data);
  // }

  return (
    <>
      <h1>From Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleFrom></SimpleFrom> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefFrom></RefFrom> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm formTitle={'Sign UP'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up rigt now</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} handleSubmit={handleUpdateProfile} submitBtnText='Update'>
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile updated</p>
        </div>
      </ReusableForm> */}
    </>
  )
}

export default App
