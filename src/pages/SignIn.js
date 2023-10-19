import { SignInFrom } from 'components/SignInFrom/SignInFrom';
import homeImage from '../images/png/home/Illustration.png';
import { AuthContainer } from 'components/AuthContainer/AuthContainer';
import { useDispatch, useSelector } from 'react-redux';
import operations from 'redux/auth/operations';
import Swal from 'sweetalert2';
import { deleteError } from 'redux/auth/authSlice';

const SignIn = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.isAuthError);


  if(error){
    Swal.fire({
      position: 'top',
      icon: 'error',
      title: 'Your entered data is incorect',
      showConfirmButton: false,
      timer: 3500, 
      background: "#0F0F0F",
      color: "white",
    })
    dispatch(deleteError())
  }

  const handleSingIn = (values, { resetForm }) => {
    
    dispatch(operations.logIn(values));
    resetForm();
  };

  return (
    <AuthContainer image={homeImage}>
      <SignInFrom handleSubmit={handleSingIn} />
    </AuthContainer>
  );
};

export default SignIn;
