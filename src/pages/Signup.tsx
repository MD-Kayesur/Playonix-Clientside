import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import { CiSquarePlus } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/store/Slices/AuthSlice/authSlice";
import { useTranslation } from "react-i18next";

const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["admin", "user"]),
  image: z
    .any()
    .refine((file) => file, "Image is required")
    .optional(),
});

type SignupFormInputs = z.infer<typeof signupSchema>;

const Signup = () => {
  const { t } = useTranslation();
  const [preview] = useState<string | null>(null);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    // setValue,
    formState: { errors },
  } = useForm<SignupFormInputs>({
    resolver: zodResolver(signupSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (data: SignupFormInputs) => {
    // Simulate API call and success
    const userData = {
      name: data.name,
      email: data.email,
      role: data.role,
      avatar: preview || ""
    };

    // Set credentials in Redux and Cookies
    dispatch(setCredentials({
      user: userData,
      token: "dummy-access-token-" + Math.random().toString(36).substr(2, 9)
    }));

    console.log("Registered User:", userData);

    // Redirect based on role
    if (data.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/user/all");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 dark:bg-gray-950">
      <div className="w-full max-w-md bg-white dark:bg-[#1A1C1D] dark:border dark:border-gray-800 p-6 rounded-lg shadow-md my-10">
        <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white">
          {t('common.signup', 'Signup')}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t('auth.name', 'Name')}
            </label>
            <input
              type="text"
              {...register("name")}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t('auth.email', 'Email')}
            </label>
            <input
              type="email"
              {...register("email")}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t('auth.password', 'Password')}
            </label>
            <input
              type="password"
              {...register("password")}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Role Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t('auth.role', 'Role')}
            </label>
            <select
              {...register("role")}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
            >
              <option value="user">{t('auth.user', 'User')}</option>
              <option value="admin">{t('auth.admin', 'Admin')}</option>
            </select>
            {errors.role && (
              <p className="text-red-500 text-sm">{errors.role.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            {t('common.signup', 'Signup')}
          </button>
        </form>
      </div>
    </div>
  );
};


export default Signup;

