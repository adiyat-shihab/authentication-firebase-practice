import { motion } from "framer-motion";
import { AuthContext } from "./AuthProvider.jsx";
import { useContext } from "react";

export const Register = () => {
  const { handleSignUp } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    handleSignUp(email.value, password.value);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="bg-grey-lighter min-h-screen flex flex-col"
      >
        <div className="container max-w-sm mx-auto  flex-1 flex flex-col items-center justify-center px-2">
          <form
            onSubmit={handleSubmit}
            className="bg-white px-6 py-8 rounded shadow-[0px_1px_10px_2px_#cbd5e0] text-black w-full"
          >
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4 outline-none"
              name="fullname"
              placeholder="Full Name"
            />

            <input
              type="email"
              className="block border border-grey-light w-full p-3 rounded mb-4 outline-none"
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4 outline-none"
              name="password"
              placeholder="Password"
              required
            />

            <input
              type="submit"
              value={"Create Account"}
              className="w-full text-center py-3 rounded bg-green-400 hover:bg-green-500 transition focus:outline-none my-1"
            />

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </form>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <a
              className="no-underline border-b border-blue text-blue"
              href="../login/"
            >
              Log in
            </a>
            .
          </div>
        </div>
      </motion.div>
    </>
  );
};
